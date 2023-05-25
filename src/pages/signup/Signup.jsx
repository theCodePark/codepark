import './signup.css'
import * as workshopsJson from '../../data/workshops.json';
 
import {getFirestoreInstance} from '../../utils/Firebase';
import {collection, addDoc } from 'firebase/firestore';

import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  
    const addDocumentToFirebase = async(formData) => {
      try {
        document.getElementById('sign-up-button').disabled = true;
        const docRef = await addDoc(collection(getFirestoreInstance, 'enrollments'), formData);
        document.getElementById('sign-up-button').disabled = false;
        navigate(`/confirmation/${docRef.id}`);


      } catch (error) {
        console.error('Error writing document: ', error);
      }


    };
  
    const handleSignUp = (event) => {
      event.preventDefault();
  
      const nameParentInput = document.getElementById('name-parent');
      const nameChildInput = document.getElementById('name-child');
      const experienceInput = document.getElementById('experience');
      const emailInput = document.getElementById('email');
      const classSelect = document.getElementById('class');
      const enrollmentRadioButtons = document.getElementsByName('enrollment');
  
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
      };
  
      addDocumentToFirebase(formData);
    };

  return(
    <>
      <section className = "signup-section">
        <h1 className = "signup-heading">Sign Up for CodePark</h1>
        <br />
        <form className = "signup-form">
          <div className = "form-group">
            <label htmlFor="name-parent">Name of Parent:</label>
            <input type="text" id="name-parent" name="name-parent" required />
          </div>

          <div className = "form-group">
            <label htmlFor="name-child">Name of Child Enrolling:</label>
            <input type="text" id="name-child" name="name-child" required />
          </div>

          <div className = "form-group">
            <label htmlFor="experience">How experienced with programming are you (if you are enrolling in any secondary courses please specificy what preqrquiste skills you have):</label>
            <input type="text" id="experience" name="experience" required />
          </div>

          <div className = "form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className = "form-group">
            <label htmlFor="class">Class Selection:</label>
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
            <label htmlFor="enrollment">Enrollment Type:</label>
            <div className = "radio-group">
              <label htmlFor="enrollment-1on1">1 on 1</label>
              <input type="radio" id="enrollment-1on1" name="enrollment" value="1on1" required />
            </div>
            <div className = "radio-group">
              <label htmlFor="enrollment-group">Group</label>
              <input type="radio" id="enrollment-group" name="enrollment" value="group" required />
            </div>
          </div>
          <div className = "form-group">
            <label htmlFor="card-element">Credit Card Information:</label>
            <div id="card-element"></div>
            <div id="card-errors" role="alert"></div>
          </div>
          <br />
          <button className = "green-button nav-link" style = {{cursor: "pointer"}} id = "sign-up-button" onClick={handleSignUp}>Sign Up</button>
        </form>

      </section>
    </>
  )
}

export default Signup;