import { auth, createUserWithEmailAndPassword } from './firebase.js';

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
  } catch (error) {
    alert(`Signup error: ${error.message}`);
  }
});
