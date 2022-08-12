import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGym6M7Lmt2hsaKvXfY59U3B_08WNbCuU",
  authDomain: "clone-2c4e1.firebaseapp.com",
  projectId: "clone-2c4e1",
  storageBucket: "clone-2c4e1.appspot.com",
  messagingSenderId: "100124338745",
  appId: "1:100124338745:web:b3a76a6c985fcc29cefbe8",
  measurementId: "G-R5N05DWFLE"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};