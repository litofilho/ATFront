import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhm-rqYfn679RH62kyjpZ9cGqjXlNnvl4",
  authDomain: "atfront-infnet.firebaseapp.com",
  projectId: "atfront-infnet",
  storageBucket: "atfront-infnet.appspot.com",
  messagingSenderId: "977350873165",
  appId: "1:977350873165:web:4aab7ec2d91b8d59498c04",
  measurementId: "G-C84CEZYJZ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
