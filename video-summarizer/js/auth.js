import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
}

// Login Function
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
}