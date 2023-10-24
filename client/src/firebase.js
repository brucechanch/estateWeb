// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'fortune-d9e7f.firebaseapp.com',
  projectId: 'fortune-d9e7f',
  storageBucket: 'fortune-d9e7f.appspot.com',
  messagingSenderId: '504209840335',
  appId: '1:504209840335:web:fbb06eb4f97970336b7fba',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
