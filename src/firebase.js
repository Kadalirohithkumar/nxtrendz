import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCs7C2YNTUAwkqWG-rjXulDSg9fMC0x2Jw",
    authDomain: "nxtrendz-ecommerce.firebaseapp.com",
    projectId: "nxtrendz-ecommerce",
    storageBucket: "nxtrendz-ecommerce.appspot.com",
    messagingSenderId: "85324575396",
    appId: "1:85324575396:web:bd1927d919e2b2679e2c31",
    measurementId: "G-JYQDZ090ZD"
  };

  export const app=firebase.initializeApp(firebaseConfig)
  export const db=firebase.firestore()