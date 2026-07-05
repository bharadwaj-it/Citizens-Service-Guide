# Sachivalayam Citizen Service Guide

## Community Service Project

The **Sachivalayam Citizen Service Guide** is a web-based platform developed as part of a **Community Service Project (CSP)**. It helps citizens understand various government services offered through Village/Ward Sachivalayams by providing eligibility criteria, required documents, application procedures, processing timelines, downloadable sample application forms, online application links, FAQs, and a digital feedback system.

---

# Problem Statement

Many citizens visit Sachivalayams without knowing the required documents, eligibility conditions, or application procedure for government services. This often results in repeated visits, delays, and inconvenience.

This project provides a single platform where citizens can:

- Understand service eligibility
- Prepare required documents
- View sample documents
- Download sample application forms
- Access official online application portals
- Track required document checklists
- Read FAQs before visiting the Sachivalayam

---

# Live Project Links

## Citizen Portal

**Website**

https://bharadwaj-it.github.io/Citizens-Service-Guide/

---

## Admin Feedback Dashboard

**Dashboard**

https://bharadwaj-it.github.io/Citizens-Service-Guide/admin-feedback.html

---

# Features

- Responsive Home Page
- Government Services Directory (10 Services)
- Dynamic Service Details Page
- Service Search with Suggestions
- Required Documents Checklist
- Checklist Progress Tracking
- Download Checklist
- Sample Document Reference Viewer
- Download Sample Application Forms (PDF)
- Official Online Application Links
- Processing Time Information
- Eligibility Criteria
- Benefits & Application Process
- Frequently Asked Questions
- Contact & Feedback Form
- Firebase Firestore Integration
- Admin Feedback Dashboard
- Responsive Design

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend (Backend as a Service)

- Firebase

## Database

- Cloud Firestore

---

# Government Services Included

1. Income Certificate
2. Caste Certificate
3. Birth Certificate
4. Death Certificate
5. Residence Certificate
6. Ration Card
7. Aadhaar Update Guide
8. Pension Services
9. Marriage Certificate
10. Land Records

---

# Project Structure

```text
Citizens-Service-Guide/
│
├── css/
│   └── style.css
│
├── documents/
│   ├── income-certificate.pdf
│   ├── caste-certificate.pdf
│   ├── birth-certificate.pdf
│   ├── death-certificate.pdf
│   ├── residence-certificate.pdf
│   ├── ration-card.pdf
│   ├── aadhaar-update.pdf
│   ├── pension-service.pdf
│   ├── marriage-certificate.pdf
│   └── land-records.pdf
│
├── images/
│
├── js/
│   ├── script.js
│   ├── firebase-config.js
│   └── admin-feedback.js
│
├── index.html
├── services.html
├── services-details.html
├── faq.html
├── contact.html
├── admin-feedback.html
├── document-viewer.html
├── README.md
```

---

# Feedback Workflow

```text
Citizen
      │
      ▼
GitHub Pages Website
      │
      ▼
Firebase Firestore
      │
      ▼
Admin Feedback Dashboard
```

---

# Sample Resources

The project includes:

- Sample Government Documents
- Sample Application Forms (PDF)
- Educational Document Viewer
- Downloadable Reference Documents

**Note:** These documents are provided only for educational purposes and are not official government-issued documents.

---

# Official Online Services

Each supported government service includes a direct link to the respective official online application portal whenever available, enabling citizens to proceed with online applications after understanding the process.

---

# Purpose

This project was developed as a **Community Service Project (CSP)** to improve public awareness and accessibility of government services through an easy-to-use digital platform.

---

# Team Project

Developed as a **team project** under the Community Service Project.

---

# Developed At

**Vignan's Institute of Information Technology**

Department of Information Technology

Academic Year **2025–2026**

---

# Disclaimer

This website is developed for educational and community service purposes only.

It is **not an official Government of Andhra Pradesh portal**.

Citizens should verify the latest information with their respective Village/Ward Sachivalayam or the official government portal before applying for any government service.

Sample documents and application forms are provided only for educational reference.

Feedback submitted through the website is securely stored in **Firebase Cloud Firestore** and displayed in the Admin Feedback Dashboard for demonstration purposes.