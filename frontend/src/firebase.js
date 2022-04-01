import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxqsM5mwshHa-I30L4JX6w3K17rRcYAYM",
  authDomain: "zomato-clone-88fd7.firebaseapp.com",
  projectId: "zomato-clone-88fd7",
  storageBucket: "zomato-clone-88fd7.appspot.com",
  messagingSenderId: "971056559664",
  appId: "1:971056559664:web:1229af100dec15ec3b5ff5",
  measurementId: "G-QSP77KV86J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
