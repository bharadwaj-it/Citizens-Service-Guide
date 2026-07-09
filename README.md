# Sachivalayam Citizen Service Guide

## Community Service Project

The **Sachivalayam Citizen Service Guide** is a web-based platform developed as part of a **Community Service Project (CSP)**. It helps citizens understand various government services offered through Village/Ward Sachivalayams by providing eligibility criteria, required documents, application procedures, processing timelines, downloadable sample application forms, reference documents, official application links, FAQs, and a digital feedback system.

---

# Problem Statement

Many citizens visit Village/Ward Sachivalayams without knowing the required documents, eligibility conditions, or application procedure for government services. This often results in repeated visits, delays, and inconvenience.

This project provides a single platform where citizens can:

- Understand service eligibility
- Check required documents
- Download document checklists
- View sample application forms
- Access reference documents
- Visit official government application portals
- Read FAQs before visiting the Sachivalayam
- Submit feedback and suggestions

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
- Service Search with Auto Suggestions
- Required Documents Checklist
- Checklist Progress Tracking
- Checklist Download
- Document Purpose Information
- Sample Application Form Download (PDF)
- Sample Supporting Documents
- Educational Document Viewer
- Official Online Application Links
- Eligibility Information
- Application Process
- Processing Time
- Benefits of Each Service
- Common Reasons for Rejection
- Tips Before Visiting Sachivalayam
- Frequently Asked Questions
- FAQ Search
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
Firebase Cloud Firestore
      │
      ▼
Admin Feedback Dashboard
```

---

# Sample Resources

This project provides educational reference materials including:

- Sample Government Documents
- Sample Application Forms (PDF)
- Downloadable Reference Documents
- Educational Document Viewer

> **Note:** These documents are provided only for educational purposes and are not official government-issued documents.

---

# Official Online Application

Each supported government service includes a direct link to the respective official online application portal (where available), allowing citizens to continue the application process after understanding the required procedure and documentation.

---

# Purpose

The objective of this project is to improve public awareness of government services by providing clear, organized, and easily accessible information before citizens visit the Village/Ward Sachivalayam.

---

# Team Project

This website was developed as a **Community Service Project (CSP)** by a student team under the guidance of the Department of Information Technology.

---

# Developed At

**Vignan's Institute of Information Technology (Autonomous)**

Department of Information Technology

Academic Year **2025–2026**

---

# Disclaimer

This website is developed for educational and community service purposes only.

It is **not an official Government of Andhra Pradesh portal**.

Citizens should verify the latest information with their respective Village/Ward Sachivalayam or the official government websites before applying for any government service.

Sample documents and application forms are provided only for educational reference.

Feedback submitted through the website is securely stored in **Firebase Cloud Firestore** and displayed in the **Admin Feedback Dashboard** for demonstration purposes.