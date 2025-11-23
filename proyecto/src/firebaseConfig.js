import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyADIQZJnbFq2gWmp3HJ9ywZDyaswFR4aVU",
authDomain: "pokeapi-19488.firebaseapp.com",
projectId: "pokeapi-19488",
storageBucket: "pokeapi-19488.firebasestorage.app",
messagingSenderId: "779073787096",
appId: "1:779073787096:web:b6eaf01f66afd86c99f3ad"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };