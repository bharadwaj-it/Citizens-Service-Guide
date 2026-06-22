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

    sampleFormat: `
INCOME CERTIFICATE APPLICATION (SAMPLE)

Applicant Name       : __________________

Father/Mother Name   : __________________

Address              : __________________

Occupation           : __________________

Annual Income        : __________________

Aadhaar Number       : __________________

Mobile Number        : __________________

Date                 : __________________

Applicant Signature  : __________________
`
},

caste:{
    theme: "orange",

    title:"Caste Certificate",

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

sampleFormat: `
CASTE CERTIFICATE APPLICATION (SAMPLE)

Applicant Name       : __________________

Father/Mother Name   : __________________

Caste                : __________________

Sub-Caste            : __________________

Address              : __________________

Aadhaar Number       : __________________

Mobile Number        : __________________

Date                 : __________________

Applicant Signature  : __________________
`
},

birth:{
    theme: "pink",

    title:"Birth Certificate",

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

sampleFormat: `
BIRTH CERTIFICATE APPLICATION (SAMPLE)

Child Name           : __________________

Date of Birth        : __________________

Place of Birth       : __________________

Father Name          : __________________

Mother Name          : __________________

Hospital Name        : __________________

Applicant Signature  : __________________
`
},

death:{
    theme:"gray",

    title:"Death Certificate",

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

    sampleFormat: `
DEATH CERTIFICATE APPLICATION (SAMPLE)

Deceased Name        : __________________

Date of Death        : __________________

Place of Death       : __________________

Applicant Name       : __________________

Relationship         : __________________

Address              : __________________

Signature            : __________________
`
},

residence:{
    theme: "indigo",

    title:"Residence Certificate",

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

    sampleFormat: `
RESIDENCE CERTIFICATE APPLICATION (SAMPLE)

Applicant Name       : __________________

Father/Mother Name   : __________________

Present Address      : __________________

Period of Residence  : __________________

Aadhaar Number       : __________________

Signature            : __________________
`
},

ration:{
    theme: "red",

    title:"Ration Card",

    documents:[
        "Aadhaar Card",
        "Income Proof",
        "Address Proof"
    ],

documentImages:[
    "images/aadhar.png",
    "images/income.png",
    "images/passport.png"
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

    sampleFormat: `
RATION CARD APPLICATION (SAMPLE)

Head of Family       : __________________

Address              : __________________

Family Members       : __________________

Aadhaar Numbers      : __________________

Mobile Number        : __________________

Category             : __________________

Signature            : __________________
`
},

aadhaar:{
    theme: "blue",

    title:"Aadhaar Update Guide",

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

    sampleFormat: `
AADHAAR UPDATE REQUEST (SAMPLE)

Aadhaar Number       : __________________

Name                 : __________________

Update Required      : __________________

Mobile Number        : __________________

Address              : __________________

Signature            : __________________
`
},

pension:{
    theme: "teal",

    title:"Pension Services",

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

    sampleFormat: `
PENSION APPLICATION (SAMPLE)

Applicant Name       : __________________

Age                  : __________________

Address              : __________________

Pension Type         : __________________

Bank Account Number  : __________________

Signature            : __________________
`
},

widow:{
    theme: "purple",

    title:"Widow Pension",

    documents:[
        "Aadhaar Card",
        "Death Certificate of Husband",
        "Bank Passbook"
    ],

documentImages:[
    "images/aadhar.png",
    "images/death.png",
    "images/bank.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Death Certificate of Husband → Confirms widow status.",
    "Bank Passbook → Pension transfer."
],
    eligibility:
        "Applicant must be a widow meeting government criteria.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Attach husband's death certificate.",
        "Verification process.",
        "Pension sanctioned."
    ],

    benefits:[
        "Monthly financial assistance.",
        "Social security support.",
        "Government welfare benefits."
    ],

    rejectionReasons:[
        "Invalid supporting documents.",
        "Eligibility criteria not met.",
        "Verification failure."
    ],

    tips:[
        "Carry original certificates.",
        "Ensure bank details are correct.",
        "Submit complete application."
    ],

    sampleFormat: `
WIDOW PENSION APPLICATION (SAMPLE)

Applicant Name       : __________________

Husband Name         : __________________

Date of Death        : __________________

Address              : __________________

Bank Details         : __________________

Signature            : __________________
`
},

oldage:{
    theme: "brown",

    title:"Old Age Pension",

    documents:[
        "Aadhaar Card",
        "Age Proof",
        "Bank Passbook"
    ],

documentImages:[
    "images/aadhar.png",
    "images/age.png",
    "images/bank.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Age Proof → Verifies age eligibility.",
    "Bank Passbook → Pension credit."
],
    eligibility:
        "Applicant must meet the prescribed age criteria.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit pension application.",
        "Provide age proof.",
        "Verification process.",
        "Pension approved."
    ],

    benefits:[
        "Monthly pension.",
        "Financial independence.",
        "Social welfare support."
    ],

    rejectionReasons:[
        "Insufficient age proof.",
        "Incomplete documents.",
        "Verification failure."
    ],

    tips:[
        "Carry original age proof.",
        "Provide correct bank details.",
        "Keep copies of documents."
    ],

    sampleFormat: `
OLD AGE PENSION APPLICATION (SAMPLE)

Applicant Name       : __________________

Age                  : __________________

Address              : __________________

Aadhaar Number       : __________________

Bank Details         : __________________

Signature            : __________________
`
},

disability:{
    theme: "violet",

    title:"Disability Pension",

    documents:[
        "Aadhaar Card",
        "Disability Certificate",
        "Bank Passbook"
    ],

    documentImages:[
    "images/aadhar.png",
    "images/disability.png",
    "images/bank.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Disability Certificate → Confirms disability eligibility.",
    "Bank Passbook → Pension transfer."
],
    eligibility:
        "Applicant must possess a valid disability certificate.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit pension application.",
        "Provide disability certificate.",
        "Verification process.",
        "Pension sanctioned."
    ],

    benefits:[
        "Monthly financial assistance.",
        "Social welfare support.",
        "Improved financial security."
    ],

    rejectionReasons:[
        "Invalid disability certificate.",
        "Incomplete documents.",
        "Verification failure."
    ],

    tips:[
        "Carry original disability certificate.",
        "Keep bank details ready.",
        "Bring photocopies."
    ],

    sampleFormat: `
DISABILITY PENSION APPLICATION (SAMPLE)

Applicant Name       : __________________

Disability Type      : __________________

Percentage           : __________________

Address              : __________________

Bank Details         : __________________

Signature            : __________________
`
},

marriage:{
    theme: "rose",

    title:"Marriage Certificate",

    documents:[
        "Bride Aadhaar",
        "Groom Aadhaar",
        "Marriage Proof"
    ],

documentImages:[
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

    sampleFormat: `
MARRIAGE CERTIFICATE APPLICATION (SAMPLE)

Bride Name           : __________________

Groom Name           : __________________

Date of Marriage     : __________________

Place of Marriage    : __________________

Witness Details      : __________________

Signature            : __________________
`
},

land:{
    theme: "brown",

    title:"Land Records",

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

    sampleFormat: `
LAND RECORD REQUEST (SAMPLE)

Applicant Name       : __________________

Survey Number        : __________________

Village              : __________________

Mandal               : __________________

District             : __________________

Signature            : __________________
`
},

encumbrance:{
    theme: "amber",

    title:"Encumbrance Certificate",

    documents:[
        "Property Details",
        "Aadhaar Card"
    ],

documentImages:[
    "images/property.png",
    "images/aadhar.png"
],

    documentPurpose:[
    "Property Details → Identifies the property.",
    "Aadhaar Card → Applicant identity verification."
],

    eligibility:
        "Property owner or authorized person.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide property details.",
        "Verification process.",
        "Certificate issued."
    ],

    benefits:[
        "Shows property transactions.",
        "Required for loans.",
        "Confirms ownership status."
    ],

    rejectionReasons:[
        "Incorrect property details.",
        "Incomplete application.",
        "Verification failure."
    ],

    tips:[
        "Carry accurate property details.",
        "Verify ownership records.",
        "Keep photocopies."
    ],

    sampleFormat: `
ENCUMBRANCE CERTIFICATE REQUEST (SAMPLE)

Applicant Name       : __________________

Property Details     : __________________

Survey Number        : __________________

Period Required      : __________________

Signature            : __________________
`
},

electricity:{
    theme: "yellow",

    title:"Electricity Connection",

    documents:[
        "Address Proof",
        "Aadhaar Card"
    ],

documentImages:[
    "images/address.png",
    "images/aadhar.png"
],

    documentPurpose:[
    "Address Proof → Confirms service location.",
    "Aadhaar Card → Identity verification."
],

    eligibility:
        "Applicant must own or occupy the property.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Apply for connection.",
        "Submit documents.",
        "Site inspection.",
        "Connection provided."
    ],

    benefits:[
        "Access to electricity.",
        "Improved living standards.",
        "Supports business activities."
    ],

    rejectionReasons:[
        "Invalid address proof.",
        "Site issues.",
        "Incomplete documents."
    ],

    tips:[
        "Keep property documents ready.",
        "Ensure correct address.",
        "Track application status."
    ],

    sampleFormat: `
NEW ELECTRICITY CONNECTION APPLICATION

Applicant Name       : __________________

Address              : __________________

Connection Type      : __________________

Load Requirement     : __________________

Mobile Number        : __________________

Signature            : __________________
`
},

water:{
    theme: "cyan",
    title:"Water Connection",

    documents:[
        "Address Proof",
        "Property Details"
    ],

documentImages:[
    "images/address.png",
    "images/property.png"
],

    documentPurpose:[
    "Address Proof → Confirms residence.",
    "Property Details → Identifies service location."
],

    eligibility:
        "Applicant must own or reside at the property.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide documents.",
        "Inspection process.",
        "Connection issued."
    ],

    benefits:[
        "Access to clean water.",
        "Improved sanitation.",
        "Convenience."
    ],

    rejectionReasons:[
        "Incorrect property details.",
        "Missing documents.",
        "Inspection failure."
    ],

    tips:[
        "Carry ownership documents.",
        "Verify details.",
        "Keep copies."
    ],

    sampleFormat: `
NEW WATER CONNECTION APPLICATION

Applicant Name       : __________________

Address              : __________________

Property Number      : __________________

Mobile Number        : __________________

Signature            : __________________
`
},

license:{
    theme:"slate",

    title:"Driving License Guide",

    documents:[
        "Learner License",
        "Aadhaar Card"
    ],

documentImages:[
    "images/learner.png",
    "images/aadhar.png"
],

    documentPurpose:[
    "Learner License → Confirms eligibility for permanent license.",
    "Aadhaar Card → Identity verification."
],

    eligibility:
        "Applicant must satisfy age requirements.",

    processingTime:
        "Usually 30 working days.",

    applicationProcess:[
        "Apply for driving test.",
        "Appear for test.",
        "Verification process.",
        "License issued."
    ],

    benefits:[
        "Legal authorization to drive.",
        "Accepted ID proof.",
        "Useful for employment."
    ],

    rejectionReasons:[
        "Failed driving test.",
        "Invalid documents.",
        "Incomplete application."
    ],

    tips:[
        "Practice driving.",
        "Carry original documents.",
        "Reach on time."
    ],

    sampleFormat: `
DRIVING LICENSE APPLICATION (SAMPLE)

Applicant Name       : __________________

Date of Birth        : __________________

Address              : __________________

License Type         : __________________

Mobile Number        : __________________

Signature            : __________________
`
},

voter:{
    theme:"violet",

    title:"Voter ID Services",

    documents:[
        "Aadhaar Card",
        "Address Proof"
    ],

documentImages:[
    "images/aadhar.png",
    "images/address.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Address Proof → Determines constituency eligibility."
],

    eligibility:
        "Indian citizen aged 18 years or above.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit voter application.",
        "Verification process.",
        "Approval.",
        "Voter ID issued."
    ],

    benefits:[
        "Right to vote.",
        "Identity proof.",
        "Participation in democracy."
    ],

    rejectionReasons:[
        "Age criteria not met.",
        "Incorrect details.",
        "Verification failure."
    ],

    tips:[
        "Provide correct address.",
        "Check eligibility.",
        "Carry originals."
    ],

    sampleFormat: `
VOTER ID APPLICATION (SAMPLE)

Applicant Name       : __________________

Date of Birth        : __________________

Address              : __________________

EPIC Number          : __________________

Mobile Number        : __________________

Signature            : __________________
`
},

pmkisan:{
    theme:"lime",

    title:"PM Kisan",

    documents:[
        "Aadhaar Card",
        "Land Records",
        "Bank Passbook"
    ],

documentImages:[
    "images/aadhar.png",
    "images/land.png",
    "images/bank.png"
],

    documentPurpose:[
    "Aadhaar Card → Farmer identification.",
    "Land Records → Verifies land ownership.",
    "Bank Passbook → Benefit transfer."
],

    eligibility:
        "Applicant must be an eligible farmer.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide land records.",
        "Verification process.",
        "Benefits credited."
    ],

    benefits:[
        "Financial assistance.",
        "Farmer welfare.",
        "Income support."
    ],

    rejectionReasons:[
        "Invalid land records.",
        "Incorrect bank details.",
        "Verification failure."
    ],

    tips:[
        "Keep bank details updated.",
        "Verify land records.",
        "Carry originals."
    ],

    sampleFormat: `
PM KISAN APPLICATION (SAMPLE)

Farmer Name          : __________________

Aadhaar Number       : __________________

Land Details         : __________________

Bank Account         : __________________

Mobile Number        : __________________

Signature            : __________________
`
},

health:{
    theme:"coral",

    title:"Health Card Services",

    documents:[
        "Aadhaar Card",
        "Income Certificate"
    ],

documentImages:[
    "images/aadhar.png",
    "images/incomecert.png"
],

    documentPurpose:[
    "Aadhaar Card → Beneficiary identification.",
    "Income Certificate → Confirms eligibility."
],
    eligibility:
        "Applicant must meet beneficiary criteria.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide documents.",
        "Verification process.",
        "Card issued."
    ],

    benefits:[
        "Healthcare support.",
        "Cashless treatment.",
        "Reduced medical expenses."
    ],

    rejectionReasons:[
        "Income criteria not met.",
        "Incomplete documents.",
        "Verification failure."
    ],

    tips:[
        "Carry income proof.",
        "Verify Aadhaar details.",
        "Keep photocopies."
    ],

    sampleFormat: `
HEALTH CARD APPLICATION (SAMPLE)

Applicant Name       : __________________

Aadhaar Number       : __________________

Family Members       : __________________

Address              : __________________

Signature            : __________________
`
},

scholarship:{
    theme: "lavender",

    title:"Scholarship Services",

    documents:[
        "Student ID",
        "Income Certificate"
    ],

documentImages:[
    "images/student.png",
    "images/incomecert.png",
],

    documentPurpose:[
    "Student ID → Verifies student status.",
    "Income Certificate → Determines eligibility."
],

    eligibility:
        "Applicant must be an eligible student.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit scholarship application.",
        "Attach certificates.",
        "Verification process.",
        "Scholarship approved."
    ],

    benefits:[
        "Financial support for education.",
        "Encourages higher studies.",
        "Reduces financial burden."
    ],

    rejectionReasons:[
        "Missing certificates.",
        "Income mismatch.",
        "Verification failure."
    ],

    tips:[
        "Apply before deadlines.",
        "Carry originals.",
        "Verify details carefully."
    ],

    sampleFormat: `
SCHOLARSHIP APPLICATION (SAMPLE)

Student Name         : __________________

Course               : __________________

Institution           : __________________

Income Details       : __________________

Bank Details         : __________________

Signature            : __________________
`
},

farmer:{
    theme: "emerald",

    title:"Farmer Services",

    documents:[
        "Land Records",
        "Aadhaar Card"
    ],

documentImages:[
    "images/land.png",
    "images/aadhar.png"
],

    documentPurpose:[
    "Land Records → Confirms farming activity.",
    "Aadhaar Card → Identity verification."
],
    eligibility:
        "Applicant must be a registered farmer.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit application.",
        "Provide land details.",
        "Verification process.",
        "Benefits approved."
    ],

    benefits:[
        "Agricultural support.",
        "Access to schemes.",
        "Financial assistance."
    ],

    rejectionReasons:[
        "Invalid land records.",
        "Incomplete documents.",
        "Verification failure."
    ],

    tips:[
        "Keep records updated.",
        "Carry originals.",
        "Check scheme eligibility."
    ],

    sampleFormat: `
FARMER SERVICE APPLICATION (SAMPLE)

Farmer Name          : __________________

Land Details         : __________________

Crop Details         : __________________

Aadhaar Number       : __________________

Bank Details         : __________________

Signature            : __________________
`
},

employment:{
    theme:"mint",

    title:"Employment Registration",

    documents:[
        "Aadhaar Card",
        "Educational Certificates"
    ],

documentImages:[
    "images/aadhar.png",
    "images/education.png"
],

    documentPurpose:[
    "Aadhaar Card → Identity verification.",
    "Educational Certificates → Qualification verification."
],
    eligibility:
        "Applicant must be seeking employment.",

    processingTime:
        "Usually 7 working days.",

    applicationProcess:[
        "Submit registration.",
        "Provide certificates.",
        "Verification process.",
        "Registration completed."
    ],

    benefits:[
        "Employment opportunities.",
        "Access to job notifications.",
        "Career support."
    ],

    rejectionReasons:[
        "Invalid certificates.",
        "Incomplete application.",
        "Verification failure."
    ],

    tips:[
        "Carry educational certificates.",
        "Keep contact details updated.",
        "Verify information."
    ],

    sampleFormat: `
EMPLOYMENT REGISTRATION (SAMPLE)

Applicant Name       : __________________

Qualification        : __________________

Address              : __________________

Mobile Number        : __________________

Email                : __________________

Signature            : __________________
`
},

grievance:{
    theme: "crimson",

    title:"Grievance Services",

    documents:[
        "Complaint Details",
        "Supporting Documents"
    ],

documentImages:[
    "images/complaint.png",
    "images/support.png"
],

    documentPurpose:[
    "Complaint Details → Describes the issue.",
    "Supporting Documents → Provides evidence."
],

    eligibility:
        "Any citizen can submit grievances.",

    processingTime:
        "Usually 15 working days.",

    applicationProcess:[
        "Submit grievance.",
        "Attach supporting documents.",
        "Review process.",
        "Resolution communicated."
    ],

    benefits:[
        "Citizen issue resolution.",
        "Transparency.",
        "Improved public services."
    ],

    rejectionReasons:[
        "Insufficient evidence.",
        "False information.",
        "Incomplete complaint."
    ],

    tips:[
        "Explain the issue clearly.",
        "Attach all evidence.",
        "Keep acknowledgement details."
    ],

    sampleFormat: `
GRIEVANCE APPLICATION (SAMPLE)

Applicant Name       : __________________

Department           : __________________

Complaint Details    : __________________

Address              : __________________

Mobile Number        : __________________

Signature            : __________________
`
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

    document.querySelector(".details")
    .classList.add(service.theme);

document.getElementById("service-title").innerText =
service.title;

    console.log(service);
console.log(service.documents);

    let docsHTML = "";

    service.documents.forEach(doc => {
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
    ${doc}
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

const sampleElement =
document.getElementById("sample-format");

if(sampleElement){

    sampleElement.innerText =
    service.sampleFormat;

}



const sampleCard =
document.getElementById("sample-card");

if(sampleCard){

    sampleCard.classList.add(
        `sample-${service.theme}`
    );

}

if(documentImagesContainer && service.documentImages){

    documentImagesContainer.innerHTML = "";

    service.documentImages.forEach(imagePath => {

        documentImagesContainer.innerHTML += `
            <div class="document-image-card">
                <img src="${imagePath}" alt="Document">
            </div>
        `;

    });

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