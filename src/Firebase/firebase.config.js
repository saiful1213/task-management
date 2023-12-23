import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwzMAlyaYnc8w5chV51w8GHVQJmV4t49o",
  authDomain: "task-management-ebe10.firebaseapp.com",
  projectId: "task-management-ebe10",
  storageBucket: "task-management-ebe10.appspot.com",
  messagingSenderId: "458525132584",
  appId: "1:458525132584:web:bd7308c56f7e18c293f21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;