import './signup.css'
import * as workshopsJson from '../../data/workshops.json';
import * as dateJson from '../../data/dates.json';

import {getFirestoreInstance} from '../../utils/Firebase';
import {collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';

import {useNavigate} from 'react-router-dom';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "1.5rem",
      },
      invalid: {
        iconColor: "red",
        color: "red"
      }
    }
  }

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const checkIfInputEmailAndClassExists = async (emailInput, classInput) => {
    const querySnapshot = await getDocs(collection(getFirestoreInstance, "enrollments"));
    querySnapshot.forEach((doc) => {
      if(doc.data().email === emailInput && doc.data().class === classInput ) {
        console.log(doc.data().email + " " + doc.data().class);
        return true;
      }
    });
    return false;
  }

  const handleAddDocumentToFirebase = async(formData) => {
    try {
      document.getElementById('sign-up-button').disabled = true;
      const docRef = await addDoc(collection(getFirestoreInstance, 'enrollments'), formData);
      document.getElementById('sign-up-button').disabled = false;
      navigate(`/confirmation/${docRef.id}`);


    } catch (error) {
      console.error('Error writing document: ', error);
    }


  };


  const handleCreditCardAndFirebaseSubmit = async (e, formData) => {
    e.preventDefault()

      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)
      })

      if(!error) {
        try {
          const {id} = paymentMethod
          console.log(id);
          const response = await axios.post("https://codepark-server.herokuapp.com/payment", {
              amount: 10, //price in cents cents
              id: id
          })
        

          if(response.data.success) {
            handleAddDocumentToFirebase(formData);
          }
          else{
            throw new Error("Unsuccessful payment")
          }

        } catch (error) {
          throw error;
        }
    }
    else {
      console.log(error);
      throw new Error("Unsuccessful payment")
    }
  }
  
  const handleSignUp = (event) => {
    event.preventDefault();

    const nameParentInput = document.getElementById('name-parent');
    const nameChildInput = document.getElementById('name-child');
    const experienceInput = document.getElementById('experience');
    const emailInput = document.getElementById('email');
    const classSelect = document.getElementById('class');
    const enrollmentRadioButtons = document.getElementsByName('enrollment');
    const dateSelect = document.getElementById('date');

    let enrollmentType;
    enrollmentRadioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        enrollmentType = radioButton.value;
      }
    });

    const formData = {
      nameParent: nameParentInput.value,
      nameChild: nameChildInput.value,
      experience: experienceInput.value,
      email: emailInput.value,
      class: classSelect.value,
      enrollment: enrollmentType,
      date: dateSelect.value,
      price: price,
      timestamp: Timestamp.now()
    };

    // if(checkIfInputEmailAndClassExists(formData.email, formData.class)) {
    //   //alert("This email is already registered for this particular class");
    //   return;
    // }
    
    handleCreditCardAndFirebaseSubmit(event, formData);

  };

  const [price, setPrice] = useState(0);

  return(
    <>
      <section className = "signup-section">
        <h1 className = "signup-heading">Sign Up for CodePark</h1>
        <br />
        
        <form className = "signup-form">
          <div className = "form-group">
            <label hmtlfor="name-parent">Name of Parent:</label>
            <input type="text" id="name-parent" name="name-parent" required/>
          </div>

          <div className = "form-group">
            <label hmtlfor="name-child">Name of Child Enrolling:</label>
            <input type="text" id="name-child" name="name-child" required/>
          </div>

          <div className = "form-group">
            <label hmtlfor="experience">How proficient are you in programming? If you plan to enroll in any secondary courses, please specify the prerequisite skills you possess:</label>
            <input type="text" id="experience" name="experience" required />
          </div>

          <div className = "form-group">
            <label hmtlfor="email">Email:</label>
            <input type="email" id="email" name="email" required autoComplete="off" />
          </div>

          <div className = "form-group">
            <label hmtlfor="class">Class Selection:</label>
            <select id="class" name="class" required>
              <option value="">Select a class</option>
              {
                workshopsJson.workshops.map((workshop, index) => {
                    return(
                    <option key = {index} value={workshop.title}>{workshop.title}</option>
                    )
                })
              }
            </select>
          </div>

          <div className = "form-group">
            <label hmtlfor="date">Date Selection:</label>
            <select id="date" name="date" required>
              <option value="">Select a section</option>
              {
                dateJson.dates.map((date, index) => {
                    const stringDate = date.start + " - " + date.end;
                    return(
                    <option key = {index} value={date.title}>{stringDate}</option>
                    )
                })
              }
            </select>
          </div>

          <div className = "form-group">
            <label hmtlfor="enrollment">Enrollment Type:</label>
            <div className = "radio-group">
              <label hmtlfor="enrollment-group">Group</label>
              <input type="radio" id="enrollment-group" name="enrollment" value="group" required onClick = {() => setPrice(800)}/>
            </div>
            <div className = "radio-group">
              <label hmtlfor="enrollment-1on1">1 on 1</label>
              <input type="radio" id="enrollment-1on1" name="enrollment" value="1on1" required onClick = {() => setPrice(1000)}/>
            </div>
          </div>
          <br />
          <div className = "form-group" style = {{maxHeight: "fit-content"}}>
            {
              price !== 0 && 
              <>
              <label style = {{fontSize: "1.5rem", width: "100%", textAlign: "center"}} hmtlfor="card-element">Total: ${price}</label>
              <br />
              <CardElement options={CARD_OPTIONS} id = "card-element"/>
              </>
            }
           
          </div>
          <br />
          <button className = "green-button nav-link" style = {{cursor: "pointer"}} id = "sign-up-button" onClick={handleSignUp}>Sign Up</button>
         
        </form>
        <br />
      </section>
    </>
  )
}

export default Signup;