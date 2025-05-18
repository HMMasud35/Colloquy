
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtOo4BMJ1WD08S00kC0rwG6F7JL9e351Q",
  authDomain: "colloquy-65871.firebaseapp.com",
  projectId: "colloquy-65871",
  storageBucket: "colloquy-65871.firebasestorage.app",
  messagingSenderId: "807836272465",
  appId: "1:807836272465:web:e6611301bc11f90f35b570"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app}
export {auth}