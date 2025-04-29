# Project Setup and Development Guide

This guide outlines the steps to set up and start debugging the project, including backend (`CAPService`) and frontend (`HTML5Module`) components.

---

## 📦 Project Setup

\`\`\`bash
cd ./CAPService
npm install

cd ../HTML5Module
npm install

cd ..
npm run transferapidef
\`\`\`

---

## 🐞 Start Debugging

\`\`\`bash
cd CAPService
cds watch

cd ../HTML5Module
npm run dev
\`\`\`

---

## ✅ Notes

\`\`\`bash
# Install CDS CLI globally if not already installed
npm install -g @sap/cds
\`\`\`

- Ensure Node.js and npm are properly installed.
- The `transferapidef` script should be defined in your root `package.json`.

---

Thank you for reading my article on martin.jurran.org
