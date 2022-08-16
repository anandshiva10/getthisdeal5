// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyCEhW9jzlZ2CK1hNeuWljoYX2gCo1xohFs",
//   authDomain: "fir-2660e.firebaseapp.com",
//   projectId: "fir-2660e",
//   storageBucket: "fir-2660e.appspot.com",
//   messagingSenderId: "773431946962",
//   appId: "1:773431946962:web:64a40abfbc5e6b6895870b"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBrLht_u9aOkIN2kAvIY6anowUWFMxXoss",
  authDomain: "getthisdeal-d5e71.firebaseapp.com",
  projectId: "getthisdeal-d5e71",
  storageBucket: "getthisdeal-d5e71.appspot.com",
  messagingSenderId: "660055214726",
  appId: "1:660055214726:web:ce932750d10f7371099f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestore= getFirestore(app)