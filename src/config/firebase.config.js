// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6m4AASCim6wOcDxZYX88EiGi4ktsfEwI",
  authDomain: "edu-sync-90d14.firebaseapp.com",
  projectId: "edu-sync-90d14",
  storageBucket: "edu-sync-90d14.appspot.com",
  messagingSenderId: "1056862199911",
  appId: "1:1056862199911:web:03bfad306f212aac3bb4c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
