import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
});
