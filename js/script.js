import {
  db,
  collection,
  addDoc,
  serverTimestamp
} from "./firebase-config.js";
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

  samplePdf: "documents/income-certificate.pdf",

  guidePage:"guide.html?id=income",

  mode:"Online / MeeSeva",
  officialWebsite:"https://ap.meeseva.gov.in/"
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

    samplePdf: "documents/caste-certificate.pdf",

    guidePage:"guide.html?id=caste",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"
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

    samplePdf: "documents/birth-certificate.pdf",

    guidePage:"guide.html?id=birth",

    mode:"Online / MeeSeva",

    officialWebsite:"https://ap.meeseva.gov.in/"

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

    samplePdf: "documents/death-certificate.pdf",

    guidePage:"guide.html?id=death",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"

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

    samplePdf: "documents/residence-certificate.pdf",

    guidePage:"guide.html?id=residence",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"

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

    samplePdf: "documents/ration-card.pdf",

    guidePage:"guide.html?id=ration",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"

},

aadhaar:{
    theme: "blue",

    title:"Aadhaar Update Guide",

    applyLink:"https://myaadhaar.uidai.gov.in/",

    documents:[
        "Aadhaar Card",
        "Address Proof",
    ],


    documentPurpose:[
    "Aadhaar Card → Existing Aadhaar reference.",
    "Address Proof → Verifies updated information."
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

    samplePdf: "documents/aadhar-update.pdf",

    guidePage:"guide.html?id=aadhaar",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"

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

    samplePdf: "documents/pension-service.pdf",

    guidePage:"guide.html?id=pension",

    mode:"Online / MeeSeva",
    officialWebsite:"https://ap.meeseva.gov.in/"

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

    samplePdf: "documents/marriage-certificate.pdf",

    mode:"Online / MeeSeva",
    guidePage:"guide.html?id=marriage",

    officialWebsite:"https://ap.meeseva.gov.in/"

},

land:{
    theme: "brown",

    title:"Land Records",

    applyLink:"https://meebhoomi.ap.gov.in/",

    documents:[
        "Survey Number",
        "Aadhaar Card"
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

    samplePdf: "documents/land-records.pdf",

    mode:"Online / MeeSeva",

    guidePage:"guide.html?id=land",

    officialWebsite:"https://ap.meeseva.gov.in/"

},


};

const serviceList = Object.entries(services);

const params = new URLSearchParams(window.location.search);

const serviceId = params.get("id");

const service = services[serviceId];

const detailsSection = document.querySelector(".details");

if (detailsSection && !service) {
    detailsSection.innerHTML = `
        <h2>Service Not Found</h2>
        <p>The requested service could not be found. Please go back to <a href="services.html">Services</a> or <a href="index.html">Home</a>.</p>
    `;
}

if(service && service.theme){
    document.body.classList.add(`theme-${service.theme}`);
}

const documentImageMap = {
    "Aadhaar Card": "images/aadhar.png",
    "Ration Card": "images/ration.png",
    "Passport Photo": "images/passport.png",
    "Community Proof": "images/community.png",
    "Hospital Record": "images/hospital.png",
    "Parents Aadhaar": "images/aadhar.png",
    "Address Proof": "images/address.png",
    "Bank Passbook": "images/bank.png",
    "Income Certificate": "images/incomecert.png",
    "Survey Number": "images/survey.png",
    "Marriage Proof": "images/marriage.png",
    "Death Report": "images/dreport.png",
    "Electricity Bill": "images/electricity.png"
};

if(service){ 

    const applyBtn = document.getElementById("applyBtn");

if(applyBtn){

    applyBtn.href = service.applyLink;

}

    if(detailsSection){
        detailsSection.classList.add(service.theme);
    }

document.getElementById("service-title").innerText =
service.title;

    let docsHTML = "";

    service.documents.forEach((doc, index) => {
       const checkboxId =
`${serviceId}-${doc}`;

const isChecked =
localStorage.getItem(checkboxId) === "true";

const docImage = documentImageMap[doc] || "images/aadhar.png";

docsHTML += `
<li class="doc-item doc-${service.theme}">
    <input
        type="checkbox"
        data-id="${checkboxId}"
        ${isChecked ? "checked" : ""}
    >

    <a
        href="document-viewer.html?image=${encodeURIComponent(docImage)}&title=${encodeURIComponent(doc)}&service=${serviceId}"
        class="document-link"
    >
        ${doc}
    </a>

</li>
`;
    });

    const documentsEl = document.getElementById("documents");
    if (documentsEl) {
        documentsEl.innerHTML = docsHTML;
    }

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
const officialBtn = document.getElementById("officialBtn");
    if (officialBtn) {
        officialBtn.href = service.officialWebsite;
    }

    const eligibilityEl = document.getElementById("eligibility");
    if (eligibilityEl) {
        eligibilityEl.innerText = service.eligibility;
    }

    const processingTimeEl = document.getElementById("processing-time");
    if (processingTimeEl) {
        processingTimeEl.innerText = service.processingTime;
    }

const processList =
document.getElementById("application-process");

if (processList) {
    processList.innerHTML = "";

    service.applicationProcess.forEach(step => {

        processList.innerHTML += `
            <li>${step}</li>
        `;

    });
}

const benefitsList = document.getElementById("benefits");
if (benefitsList && service.benefits) {
    benefitsList.innerHTML = service.benefits.map(item => `<li>${item}</li>`).join("");
}

const rejectionList = document.getElementById("rejection-reasons");
if (rejectionList && service.rejectionReasons) {
    rejectionList.innerHTML = service.rejectionReasons.map(item => `<li>${item}</li>`).join("");
}

const tipsList = document.getElementById("tips");
if (tipsList && service.tips) {
    tipsList.innerHTML = service.tips.map(item => `<li>${item}</li>`).join("");
}

const samplePdfBtn =
document.getElementById("samplePdfBtn");

if(samplePdfBtn){

    samplePdfBtn.href = service.samplePdf;

    const guideBtn = document.getElementById("guideBtn");

    if(guideBtn){

        guideBtn.href =
        service.guidePage;

    }

}



// Thumbnail feature removed: document images are no longer injected for services.

const sampleCard =
document.getElementById("sample-card");

if(sampleCard){

    sampleCard.classList.add(
        `sample-${service.theme}`
    );

}

}

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

if(searchBtn){

    const searchForm =
document.getElementById("searchForm");

    

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            searchBtn.click();
        });
    }

    searchBtn.addEventListener("click", () => {

        const keyword =
        searchInput.value.toLowerCase().trim();

        searchResults.innerHTML = "";

        if (keyword.length === 0) {
            searchResults.innerHTML = `
                <p>Please enter a service name to search.</p>
            `;
            return;
        }

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
// `searchInput` and `suggestions` are declared earlier

if(searchInput){
    searchInput.setAttribute("autocomplete", "off");
    suggestions?.setAttribute("aria-expanded", "false");

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        suggestions.innerHTML = "";

        if(value.length === 0){
            suggestions.setAttribute("aria-expanded", "false");
            return;
        }

        const matches = serviceList.filter(([key, service]) => {
            const title = service.title;
            return title.toLowerCase().includes(value);
        });

        if (matches.length === 0) {
            suggestions.innerHTML = `
                <li class="suggestion-item suggestion-empty" role="option">
                    No matching services found.
                </li>
            `;
            suggestions.setAttribute("aria-expanded", "false");
        } else {
            suggestions.setAttribute("aria-expanded", "true");
            matches.forEach(([key, service]) => {
                const item = document.createElement("li");
                item.classList.add("suggestion-item");
                item.setAttribute("role", "option");
                item.setAttribute("tabindex", "0");
                item.innerText = service.title;

                item.addEventListener("click", () => {
                    window.location.href = `services-details.html?id=${key}`;
                });

                item.addEventListener("keydown", (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        item.click();
                    }
                });

                suggestions.appendChild(item);
            });
        }
    });
}
const faqs = [
    {
        question: "How many days does Income Certificate take?",
        answer: "Usually 7 working days.",
        category: "Processing"
    },
    {
        question: "Is Aadhaar Card mandatory?",
        answer: "Yes, Aadhaar is required for most services.",
        category: "Certificates"
    },
    {
        question: "Can I apply online?",
        answer: "Some services can be applied online, while others require visiting Sachivalayam.",
        category: "Applications"
    },
    {
        question: "Can someone else apply on my behalf?",
        answer: "Yes, an authorized person can apply with proper documents.",
        category: "Support"
    },
    {
        question: "What should I do if my application is rejected?",
        answer: "Visit the concerned Sachivalayam office and inquire about the reason.",
        category: "Support"
    },
    {
        question: "How can I track my application status?",
        answer: "You can contact the Sachivalayam office or use the official tracking facility if available.",
        category: "Support"
    },
    {
        question: "What documents are generally required?",
        answer: "Aadhaar Card, photographs, address proof and service-specific documents.",
        category: "Certificates"
    },
    {
        question: "Can I submit photocopies?",
        answer: "Carry photocopies along with original documents for verification.",
        category: "Certificates"
    },
    {
        question: "Can I edit my submitted application?",
        answer: "Contact the concerned office immediately after submission.",
        category: "Applications"
    },
    {
        question: "Are services free?",
        answer: "Some services are free while others may have government-prescribed fees.",
        category: "Support"
    },
    {
        question: "What if I lose my acknowledgement receipt?",
        answer: "Visit the office and provide your application details.",
        category: "Support"
    },
    {
        question: "Can senior citizens get assistance?",
        answer: "Yes, Sachivalayam staff assist senior citizens whenever possible.",
        category: "Support"
    },
    {
        question: "Do processing times vary?",
        answer: "Yes, timelines may differ depending on the service.",
        category: "Processing"
    }
];
const faqContainer =
document.getElementById("faqContainer");
const faqSearch =
document.getElementById("faqSearch");
const faqCategories =
document.getElementById("faqCategories");
let selectedFaqCategory = "All";

function renderFaqItems(){
    if(!faqContainer){
        return;
    }

    const keyword =
    faqSearch?.value.toLowerCase().trim() || "";

    faqContainer.innerHTML = "";

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory =
            selectedFaqCategory === "All" ||
            faq.category === selectedFaqCategory;

        const matchesKeyword =
            keyword.length === 0 ||
            (`${faq.question} ${faq.answer}`.toLowerCase())
            .includes(keyword);

        return matchesCategory && matchesKeyword;
    });

    if(filteredFaqs.length === 0){
        faqContainer.innerHTML = `
            <div class="faq-no-results">
                No FAQs match your search or selected category.
            </div>
        `;
        return;
    }

    filteredFaqs.forEach((faq, index) => {
        const item = document.createElement("article");
        item.className = "faq-item";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "faq-question";
        button.setAttribute("aria-expanded", "false");
        const answerId = `faq-answer-${index}`;
        button.setAttribute("aria-controls", answerId);
        button.innerText = `▶ ${faq.question}`;

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.id = answerId;
        answer.hidden = true;
        answer.innerText = faq.answer;

        item.appendChild(button);
        item.appendChild(answer);
        faqContainer.appendChild(item);
    });
}

if(faqCategories){
    const categoryButtons =
        faqCategories.querySelectorAll(".faq-category-card");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectedFaqCategory = button.dataset.category || "All";
            categoryButtons.forEach(btn => btn.classList.toggle("active", btn === button));
            renderFaqItems();
        });
    });
}

if(faqSearch){
    faqSearch.addEventListener("input", renderFaqItems);
}

if(faqContainer){
    renderFaqItems();
}

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("faq-question")){
        const button = event.target;
        const answer = document.getElementById(button.getAttribute("aria-controls"));
        if(!answer){
            return;
        }

        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        button.innerText = button.innerText.replace(/^▶ /, expanded ? "▶ " : "▼ ");
        answer.hidden = expanded;
    }
});

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