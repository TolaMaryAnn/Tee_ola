// import firebase from "./firebase";

// import "./firebase/firestore";

// import firebase from "./firebase/compat/app";
// import "./firebase/compat/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAz51bT-8-B0FbraNxM-3WseV6GR45xpxg",
//   authDomain: "contact-me-form-de232.firebaseapp.com",
//   projectId: "contact-me-form-de232",
//   storageBucket: "contact-me-form-de232.appspot.com",
//   messagingSenderId: "540249351587",
//   appId: "1:540249351587:web:434b4272b6099a1d06e616"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// export { db };

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAz51bT-8-B0FbraNxM-3WseV6GR45xpxg",
//   authDomain: "contact-me-form-de232.firebaseapp.com",
//   projectId: "contact-me-form-de232",
//   storageBucket: "contact-me-form-de232.appspot.com",
//   messagingSenderId: "540249351587",
//   appId: "1:540249351587:web:434b4272b6099a1d06e616",
// });

// var db = firebaseApp.firestore();

// export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAz51bT-8-B0FbraNxM-3WseV6GR45xpxg",
  authDomain: "contact-me-form-de232.firebaseapp.com",
  projectId: "contact-me-form-de232",
  storageBucket: "contact-me-form-de232.appspot.com",
  messagingSenderId: "540249351587",
  appId: "1:540249351587:web:434b4272b6099a1d06e616"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// export { db };