import firebase from 'firebase/app'
import "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCarw5U1c1cg69fDDpCRPcM-aRUK5NasRo",
    authDomain: "covidhomemanagement.firebaseapp.com",
    projectId: "covidhomemanagement",
    storageBucket: "covidhomemanagement.appspot.com",
    messagingSenderId: "558800904528",
    appId: "1:558800904528:web:b4c405163a644e6c9d0c55",
    measurementId: "G-N0EXPHJQCV"
  };

  const app=firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();

  export default app;