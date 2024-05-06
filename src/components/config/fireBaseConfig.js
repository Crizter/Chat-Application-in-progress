import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD528n9-XTrAMG53huxQIuqd57iH5i8gDM",
  authDomain: "react-chat-application-98ed1.firebaseapp.com",
  databaseURL: "https://react-chat-application-98ed1-default-rtdb.firebaseio.com",
  projectId: "react-chat-application-98ed1",
  storageBucket: "react-chat-application-98ed1.appspot.com",
  messagingSenderId: "487678922268",
  appId: "1:487678922268:web:2f75c241d8354a71bc59d9",
  measurementId: "G-1SMB8JW6L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app ; 


