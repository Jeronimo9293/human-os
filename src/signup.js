import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = form['email'].value;
      const password = form['password'].value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
        alert('Signup successful!');
        form.reset();
      } catch (error) {
        console.error('Signup error:', error);
        alert(error.message);
      }
    });
  }
});
