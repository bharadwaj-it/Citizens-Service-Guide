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

const feedbackBody =
document.getElementById("feedbackBody");

const q = query(
    collection(db,"feedback"),
    orderBy("createdAt","desc")
);

onSnapshot(
    collection(db,"feedback"),
    (snapshot)=>{

        feedbackBody.innerHTML = "";

        snapshot.forEach((doc)=>{

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

    }
);

const searchInput =
document.getElementById("feedbackSearch");

searchInput.addEventListener("keyup", ()=>{

    const value =
    searchInput.value.toLowerCase();

    const rows =
    document.querySelectorAll("#feedbackBody tr");

    rows.forEach((row)=>{

        const text =
        row.innerText.toLowerCase();

        if(text.includes(value)){

            row.style.display = "";

        }
        else{

            row.style.display = "none";

        }

    });

});

loadFeedback();