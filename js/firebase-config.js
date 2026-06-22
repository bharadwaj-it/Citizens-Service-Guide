import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9-y3-b33stb0fKX37f-qc7AxOCGstARA",
  authDomain: "sachivalayam-citizen-guide.firebaseapp.com",
  projectId: "sachivalayam-citizen-guide",
  storageBucket: "sachivalayam-citizen-guide.firebasestorage.app",
  messagingSenderId: "623726674995",
  appId: "1:623726674995:web:0bb8a79c48b19362244f46"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  serverTimestamp
};