// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhm-rqYfn679RH62kyjpZ9cGqjXlNnvl4",
  authDomain: "atfront-infnet.firebaseapp.com",
  projectId: "atfront-infnet",
  storageBucket: "atfront-infnet.appspot.com",
  messagingSenderId: "977350873165",
  appId: "1:977350873165:web:4aab7ec2d91b8d59498c04",
  measurementId: "G-C84CEZYJZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);