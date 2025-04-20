import { auth, signInWithEmailAndPassword } from './firebase.js';

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "index.html"; // Adjust if you want a different landing page
  } catch (error) {
    alert(`Login error: ${error.message}`);
  }
});
