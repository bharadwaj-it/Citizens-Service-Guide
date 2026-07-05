import {
  db,
  collection,
  addDoc,
  serverTimestamp
} from "./firebase-config.js";
console.log("Script Loaded");
const services = {

income:{
    theme: "green",

    title:"Income Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Aadhaar Card",
        "Ration Card",
        "Passport Photo"
    ],

    documentImages:[
    "images/aadhar.png",
    "images/ration.png",
    "images/passport.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Ration Card → Family and residence proof.",
    "Passport Photo → Used for official certificate records."
],
    eligibility:
        "Applicant must be a resident of Andhra Pradesh.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Visit Sachivalayam.",
        "Submit required documents.",
        "Verification process.",
        "Certificate issued."
    ],

    benefits:[
        "Useful for scholarships.",
        "Required for fee reimbursement.",
        "Needed for welfare schemes."
    ],

    rejectionReasons:[
        "Incomplete documents.",
        "Incorrect income details.",
        "Verification failure."
    ],

    tips:[
        "Carry original documents.",
        "Bring photocopies.",
        "Verify Aadhaar details."
    ],

  samplePdf: "documents/income-certificate.pdf"
},

caste:{
    theme: "orange",

    title:"Caste Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Aadhaar Card",
        "Community Proof",
        "Passport Photo"
    ],

    documentImages:[
    "images/aadhar.png",
    "images/community.png",
    "images/passport.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Community Proof → Verifies the applicant's caste/community.",
    "Passport Photo → Used for official records."
],
    eligibility:
        "Applicant must belong to the specified community.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Visit Sachivalayam.",
        "Submit community documents.",
        "Verification process.",
        "Certificate issued."
    ],

    benefits:[
        "Reservation benefits.",
        "Scholarship eligibility.",
        "Government schemes."
    ],

    rejectionReasons:[
        "Insufficient proof.",
        "Incorrect information.",
        "Verification failure."
    ],

    tips:[
        "Carry original certificates.",
        "Bring photocopies.",
        "Check details carefully."
    ],

    samplePdf: "documents/caste-certificate.pdf"
},

birth:{
    theme: "pink",

    title:"Birth Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Hospital Record",
        "Parents Aadhaar",
        "Address Proof"
    ],

documentImages:[
    "images/hospital.png",
    "images/aadhar.png",
    "images/address.png"
],

    documentPurpose:[
    "Hospital Record → Confirms birth details.",
    "Parents Aadhaar → Parent identity verification.",
    "Address Proof → Confirms residence details."
],
    eligibility:
        "Birth must be registered.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit birth details.",
        "Provide supporting documents.",
        "Verification by authorities.",
        "Certificate issued."
    ],

    benefits:[
        "Proof of age and identity.",
        "Required for school admissions.",
        "Needed for passports and government schemes."
    ],

    rejectionReasons:[
        "Incomplete information.",
        "Missing hospital records.",
        "Verification failure."
    ],

    tips:[
        "Carry original documents.",
        "Ensure correct spelling of names.",
        "Submit application early."
    ],

    samplePdf: "documents/birth-certificate.pdf"

},

death:{
    theme:"gray",

    title:"Death Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Death Report",
        "Aadhaar Card",
        "Address Proof"
    ],

documentImages:[
    "images/dreport.png",
    "images/aadhar.png",
    "images/address.png"
],

    documentPurpose:[
    "Death Report → Confirms the death event.",
    "Aadhaar Card → Identity verification.",
    "Address Proof → Residence confirmation."
],
    eligibility:
        "Death must be officially registered.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit death report.",
        "Provide supporting documents.",
        "Verification process.",
        "Certificate issued."
    ],

    benefits:[
        "Required for legal procedures.",
        "Useful for insurance claims.",
        "Needed for pension transfer."
    ],

    rejectionReasons:[
        "Missing medical records.",
        "Incorrect details.",
        "Verification failure."
    ],

    tips:[
        "Carry original records.",
        "Check all information carefully.",
        "Keep extra photocopies."
    ],

    samplePdf: "documents/death-certificate.pdf"

},

residence:{
    theme: "indigo",

    title:"Residence Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Aadhaar Card",
        "Ration Card",
        "Electricity Bill"
    ],

documentImages:[
    "images/aadhar.png",
    "images/ration.png",
    "images/electricity.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Ration Card → Family residence proof.",
    "Electricity Bill → Proof of address."
],
    eligibility:
        "Applicant must reside in Andhra Pradesh.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide address proof.",
        "Verification of residence.",
        "Certificate issued."
    ],

    benefits:[
        "Proof of residence.",
        "Useful for admissions.",
        "Required for government schemes."
    ],

    rejectionReasons:[
        "Invalid address proof.",
        "Incomplete application.",
        "Verification failure."
    ],

    tips:[
        "Carry recent utility bills.",
        "Ensure address consistency.",
        "Bring originals and copies."
    ],

    samplePdf: "documents/residence-certificate.pdf"

},

ration:{
    theme: "red",

    title:"Ration Card",

    applyLink:"https://vswsonline.ap.gov.in/",

    documents:[
        "Aadhaar Card",
        "Income Proof",
        "Address Proof"
    ],

documentImages:[
    "images/aadhar.png",
    "images/income.png",
    "images/address.png"
],

    documentPurpose:[
    "Aadhaar Card → Family member identification.",
    "Income Proof → Determines eligibility category.",
    "Address Proof → Confirms household residence."
],
    eligibility:
        "Applicant must belong to an eligible household.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Attach required documents.",
        "Household verification.",
        "Card issued."
    ],

    benefits:[
        "Subsidized food grains.",
        "Government welfare schemes.",
        "Identity proof."
    ],

    rejectionReasons:[
        "Incorrect income details.",
        "Duplicate application.",
        "Verification failure."
    ],

    tips:[
        "Provide accurate family details.",
        "Carry original documents.",
        "Double-check income proof."
    ],

    samplePdf: "documents/ration-card.pdf"

},

aadhaar:{
    theme: "blue",

    title:"Aadhaar Update Guide",

    applyLink:"https://myaadhaar.uidai.gov.in/",

    documents:[
        "Aadhaar Card",
        "Supporting Document"
    ],

documentImages:[
    "images/aadhar.png",
    "images/support.png"
],

    documentPurpose:[
    "Aadhaar Card → Existing Aadhaar reference.",
    "Supporting Document → Verifies updated information."
],
    eligibility:
        "Applicant must possess an Aadhaar number.",

    processingTime:
        "Usually 7–10 working days.",

    applicationProcess:[
        "Visit Aadhaar center.",
        "Submit update request.",
        "Biometric verification.",
        "Updated Aadhaar generated."
    ],

    benefits:[
        "Updated personal information.",
        "Smooth access to services.",
        "Avoid authentication issues."
    ],

    rejectionReasons:[
        "Invalid documents.",
        "Biometric mismatch.",
        "Incomplete request."
    ],

    tips:[
        "Carry original supporting documents.",
        "Check details before submission.",
        "Keep acknowledgement slip."
    ],

    samplePdf: "documents/aadhaar-update.pdf"

},

pension:{
    theme: "teal",

    title:"Pension Services",

    applyLink:"https://vswsonline.ap.gov.in/",

    documents:[
        "Aadhaar Card",
        "Bank Passbook",
        "Income Certificate"
    ],

documentImages:[
    "images/aadhar.png",
    "images/bank.png",
    "images/incomecert.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Bank Passbook → Pension amount transfer.",
    "Income Certificate → Eligibility verification."
],
    eligibility:
        "Applicant must satisfy pension criteria.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide supporting documents.",
        "Verification process.",
        "Pension approved."
    ],

    benefits:[
        "Financial support.",
        "Social security.",
        "Monthly assistance."
    ],

    rejectionReasons:[
        "Income exceeds limit.",
        "Incomplete documents.",
        "Verification failure."
    ],

    tips:[
        "Carry bank details.",
        "Provide accurate income proof.",
        "Keep photocopies."
    ],

    samplePdf: "documents/pension-service.pdf"

},


marriage:{
    theme: "rose",

    title:"Marriage Certificate",

    applyLink:"https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",

    documents:[
        "Bride Aadhaar",
        "Groom Aadhaar",
        "Marriage Proof"
    ],

documentImages:[
    "images/aadhar.png",
    "images/aadhar.png",
    "images/marriage.png"
],

    documentPurpose:[
    "Bride Aadhaar → Bride identity verification.",
    "Groom Aadhaar → Groom identity verification.",
    "Marriage Proof → Confirms marriage details."
],
    eligibility:
        "Marriage must be legally solemnized.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit application.",
        "Attach marriage proof.",
        "Verification process.",
        "Certificate issued."
    ],

    benefits:[
        "Legal proof of marriage.",
        "Useful for passports.",
        "Required for various schemes."
    ],

    rejectionReasons:[
        "Insufficient proof.",
        "Incorrect information.",
        "Verification failure."
    ],

    tips:[
        "Carry photographs.",
        "Bring witnesses if required.",
        "Verify spellings."
    ],

    samplePdf: "documents/marriage-certificate.pdf"

},

land:{
    theme: "brown",

    title:"Land Records",

    applyLink:"https://meebhoomi.ap.gov.in/",

    documents:[
        "Survey Number",
        "Aadhaar Card"
    ],

    documentImages:[
    "images/survey.png",
    "images/aadhar.png"
],

    documentPurpose:[
    "Survey Number → Identifies the land parcel.",
    "Aadhaar Card → Applicant identification."
],
    eligibility:
        "Applicant must be owner or authorized representative.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit request.",
        "Provide land details.",
        "Verification process.",
        "Records issued."
    ],

    benefits:[
        "Proof of ownership.",
        "Useful for loans.",
        "Helps resolve disputes."
    ],

    rejectionReasons:[
        "Incorrect survey number.",
        "Missing documents.",
        "Verification failure."
    ],

    tips:[
        "Carry previous records.",
        "Verify survey details.",
        "Bring ID proof."
    ],

    samplePdf: "documents/land-records.pdf"

},


};

const serviceList = Object.entries(services);

const params = new URLSearchParams(window.location.search);

const serviceId = params.get("id");

const service = services[serviceId];

const documentImagesContainer =
document.getElementById("document-images-container");

if(service && service.theme){
    document.body.classList.add(`theme-${service.theme}`);
}

if(service){

    const applyBtn = document.getElementById("applyBtn");

if(applyBtn){

    applyBtn.href = service.applyLink;

}

    document.querySelector(".details")
    .classList.add(service.theme);

document.getElementById("service-title").innerText =
service.title;

    console.log(service);
console.log(service.documents);

    let docsHTML = "";

    service.documents.forEach((doc, index) => {
       const checkboxId =
`${serviceId}-${doc}`;

const isChecked =
localStorage.getItem(checkboxId) === "true";

docsHTML += `
<li class="doc-item doc-${service.theme}">
    <input
        type="checkbox"
        data-id="${checkboxId}"
        ${isChecked ? "checked" : ""}
    >

    <a
        href="document-viewer.html?image=${encodeURIComponent(service.documentImages[index])}&title=${encodeURIComponent(doc)}&service=${serviceId}"
        class="document-link"
    >
        ${doc}
    </a>

</li>
`;
    });

    document.getElementById("documents").innerHTML =
    docsHTML;

    const purposeList =
document.getElementById("document-purpose");

if(purposeList && service.documentPurpose){

    purposeList.innerHTML = "";

    service.documentPurpose.forEach(item => {

        purposeList.innerHTML += `
            <li>${item}</li>
        `;

    });

}


    document.getElementById("eligibility").innerText =
service.eligibility;

document.getElementById("processing-time").innerText =
service.processingTime;

const processList =
document.getElementById("application-process");

processList.innerHTML = "";

service.applicationProcess.forEach(step => {

    processList.innerHTML += `
        <li>${step}</li>
    `;

});

const benefitsList =
document.getElementById("benefits");

benefitsList.innerHTML = "";

service.benefits.forEach(item => {

    benefitsList.innerHTML += `
        <li>${item}</li>
    `;

});

const rejectionList =
document.getElementById("rejection-reasons");

rejectionList.innerHTML = "";

service.rejectionReasons.forEach(item => {

    rejectionList.innerHTML += `
        <li>${item}</li>
    `;

});

const tipsList =
document.getElementById("tips");

tipsList.innerHTML = "";

service.tips.forEach(item => {

    tipsList.innerHTML += `
        <li>${item}</li>
    `;

});

const samplePdfBtn =
document.getElementById("samplePdfBtn");

if(samplePdfBtn){

    samplePdfBtn.href = service.samplePdf;

}



const sampleCard =
document.getElementById("sample-card");

if(sampleCard){

    sampleCard.classList.add(
        `sample-${service.theme}`
    );

}




}

const searchBtn =
document.getElementById("searchBtn");

if(searchBtn){

    const searchInput =
    document.getElementById("searchInput");

    const searchResults =
    document.getElementById("searchResults");

    console.log("Search Initialized");

    searchBtn.addEventListener("click", () => {

        const keyword =
        searchInput.value.toLowerCase();

        console.log(keyword);

        searchResults.innerHTML = "<h2>TEST WORKING</h2>";

searchResults.innerHTML = "";

let found = false;

for(const key in services){

    const title =
    services[key].title;

    if(
        title.toLowerCase().includes(keyword)
    ) {

        found = true;

        searchResults.innerHTML += `
            <div class="search-result">
                <a href="services-details.html?id=${key}">
                    ${title}
                </a>
            </div>
        `;
    }
}

if(!found){

    searchResults.innerHTML = `
        <p>No services found. Please try another keyword.</p>
    `;
}

    });
    searchInput.addEventListener("keypress", (event) => {

    if(event.key === "Enter"){

        searchBtn.click();

    }

});

}

function updateProgress(){

    const checkboxes =
    document.querySelectorAll(".checklist input");

    const checked =
    document.querySelectorAll(
        ".checklist input:checked"
    );

    const progress =
    document.getElementById("doc-progress");

    if(progress){

        progress.innerText =
        `Documents Ready: ${checked.length} / ${checkboxes.length}`;
    }

    const message =
document.getElementById("ready-message");

if(message){

    if(
        checkboxes.length > 0 &&
        checked.length === checkboxes.length
    ){

        message.innerText =
        "✅ All required documents are ready. You can visit Sachivalayam.";

    }else{

        message.innerText = "";
    }
}
}

document.addEventListener("change",(event)=>{

    if(event.target.matches(".checklist input")){

        const checkboxId =
        event.target.dataset.id;

        localStorage.setItem(
            checkboxId,
            event.target.checked
        );

        updateProgress();
    }
});

setTimeout(updateProgress,100);

const downloadBtn =
document.getElementById("downloadBtn");

if(downloadBtn){

    downloadBtn.addEventListener("click", () => {

        const title =
        document.getElementById("service-title")
        .innerText;

        const docs =
        document.querySelectorAll(
            ".checklist li"
        );

        let content =
        `${title} Checklist\n\n`;

        docs.forEach(doc => {

            const checked =
            doc.querySelector("input").checked
            ? "✓"
            : "☐";

            content +=
            `${checked} ${doc.innerText}\n`;
        });

        const blob =
        new Blob([content],{
            type:"text/plain"
        });

        const link =
        document.createElement("a");

        link.href =
        URL.createObjectURL(blob);

        link.download =
        `${title}-Checklist.txt`;

        link.click();
    });

}
const searchInput =
document.getElementById("searchInput");

const suggestions =
document.getElementById("suggestions");

if(searchInput){

    searchInput.addEventListener("input", () => {

        const value =
        searchInput.value.toLowerCase();

        suggestions.innerHTML = "";

        if(value.length === 0){
            return;
        }

const matches = serviceList.filter(
    ([key, service]) => {

const title =
service.title;

        return title.toLowerCase().includes(value);

    }
);

       matches.forEach(([key, service]) => {

    const div =
    document.createElement("div");

    div.classList.add("suggestion-item");

div.innerText =
service.title;

    div.addEventListener("click", () => {

        window.location.href =
        `services-details.html?id=${key}`;

    });

    suggestions.appendChild(div);

});
    });
}
const faqs = [

    {
        question: "How many days does Income Certificate take?",
        answer: "Usually 7 working days."
    },

    {
        question: "Is Aadhaar Card mandatory?",
        answer: "Yes, Aadhaar is required for most services."
    },

    {
        question: "Can I apply online?",
        answer: "Some services can be applied online, while others require visiting Sachivalayam."
    },

    {
        question: "Can someone else apply on my behalf?",
        answer: "Yes, an authorized person can apply with proper documents."
    },

    {
        question: "What should I do if my application is rejected?",
        answer: "Visit the concerned Sachivalayam office and inquire about the reason."
    },

    {
        question: "How can I track my application status?",
        answer: "You can contact the Sachivalayam office or use the official tracking facility if available."
    },

    {
    question:"What documents are generally required?",
    answer:"Aadhaar Card, photographs, address proof and service-specific documents." 
},

{
    question:"Can I submit photocopies?",
    answer:"Carry photocopies along with original documents for verification."
},

{
    question:"Can I edit my submitted application?",
    answer:"Contact the concerned office immediately after submission."
},

{
    question:"Are services free?",
    answer:"Some services are free while others may have government-prescribed fees."
},

{
    question:"What if I lose my acknowledgement receipt?",
    answer:"Visit the office and provide your application details."
},

{
    question:"Can senior citizens get assistance?",
    answer:"Yes, Sachivalayam staff assist senior citizens whenever possible."
},

{
    question:"Do processing times vary?",
    answer:"Yes, timelines may differ depending on the service."
},

];
const faqContainer =
document.getElementById("faqContainer");

if(faqContainer){

    faqs.forEach(faq => {

        faqContainer.innerHTML += `
            <div class="faq-item">

                <button class="faq-question">
                   ▶ ${faq.question}
                </button>

                <div class="faq-answer">
                    ${faq.answer}
                </div>

            </div>
        `;
    });

}

document.addEventListener("click", (event) => {

    if(event.target.classList.contains("faq-question")){

        const answer =
        event.target.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }
    }

});

const faqSearch =
document.getElementById("faqSearch");

if(faqSearch){

    faqSearch.addEventListener("input", () => {

        const keyword =
        faqSearch.value.toLowerCase();

        const faqItems =
        document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {

            const question =
            item.querySelector(".faq-question")
            .innerText
            .toLowerCase();

            if(question.includes(keyword)){

                item.style.display = "block";

            }else{

                item.style.display = "none";

            }

        });

    });

}

const sendBtn = document.getElementById("sendBtn");

if(sendBtn){

sendBtn.addEventListener("click", async () => {

    const name =
    document.getElementById("contactName").value;

    const email =
    document.getElementById("contactEmail").value;

    const subject =
    document.getElementById("contactSubject").value;

    const message =
    document.getElementById("contactMessage").value;

    const successMessage =
    document.getElementById("successMessage");

    if(
        !name ||
        !email ||
        !subject ||
        !message
    ){

        successMessage.innerText =
        "Please fill all fields.";

        return;
    }

    try{

        await addDoc(
            collection(db,"feedback"),
            {
                name,
                email,
                subject,
                message,
                createdAt: serverTimestamp()
            }
        );

        successMessage.innerText =
        "Feedback submitted successfully!";

        document.getElementById("contactName").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactSubject").value = "";
        document.getElementById("contactMessage").value = "";

    }
    catch(error){

        console.error(error);

        successMessage.innerText =
        "Failed to submit feedback.";

    }

});

}
document.addEventListener("click", (event) => {

    if(
        suggestions &&
        !event.target.closest("#searchInput") &&
        !event.target.closest("#suggestions")
    ){

        suggestions.innerHTML = "";

    }

});