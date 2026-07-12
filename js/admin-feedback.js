import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    query,
    orderBy,
    onSnapshot
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyA9-y3-b33stb0fKX37f-qc7AxOCGstARA",

    authDomain:
    "sachivalayam-citizen-guide.firebaseapp.com",

    projectId:
    "sachivalayam-citizen-guide",

    storageBucket:
    "sachivalayam-citizen-guide.firebasestorage.app",

    messagingSenderId:
    "623726674995",

    appId:
    "1:623726674995:web:0bb8a79c48b19362244f46"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const feedbackBody = document.getElementById("feedbackBody");
const feedbackSearch = document.getElementById("feedbackSearch");
const feedbackQuery = query(collection(db, "feedback"), orderBy("createdAt", "desc"));

if (feedbackBody) {
    onSnapshot(feedbackQuery, (snapshot) => {
        feedbackBody.innerHTML = "";

        snapshot.forEach((doc) => {
            const data = doc.data();
            feedbackBody.innerHTML += `
            <tr>
                <td>${data.name || ""}</td>
                <td>${data.email || ""}</td>
                <td>${data.subject || ""}</td>
                <td>${data.message || ""}</td>
            </tr>
            `;
        });
    }, (error) => {
        console.error("Failed to load feedback:", error);
    });
}

if (feedbackSearch) {
    feedbackSearch.addEventListener("input", () => {
        const value = feedbackSearch.value.toLowerCase();
        const rows = document.querySelectorAll("#feedbackBody tr");

        rows.forEach((row) => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(value) ? "" : "none";
        });
    });
}