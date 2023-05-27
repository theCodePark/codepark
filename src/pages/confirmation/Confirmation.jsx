import {getFirestoreInstance} from '../../utils/Firebase';
import {getDoc, doc } from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {

  const [isConfirmed, setIsConfirmed] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    async function check() {
      const docRef = doc(getFirestoreInstance, "enrollments", id);
      const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        setIsConfirmed(true);
      } else {  
        setIsConfirmed(false);
      }
    }

    check();
  }, [id]);

  return(
    <section className="confirmation-section">
    {
      isConfirmed ?  
      <>
        <h1>CodePark Confirmation</h1>
        <h3>Welcome to <b style = {{color:" var(--secondary-color)"}}>CodePark</b> and thank you for signing up! Your information has been successfully submitted. We will email you shortly with a reciept and confirmation. If there is any issue please contact us at <b>atalwalkar719@gmail.com</b></h3>
      </>
      :
      <h1>This URL Does Not Exist</h1>
    }
  </section>
  )
}

export default Confirmation;