# 🚨 RecoverAI
### AI-Powered Lost Smartphone Recovery Platform

> **RecoverAI** is an AI-powered platform designed to simplify the smartphone recovery process by combining invoice OCR, AI-assisted FIR generation, and a secure case management system into a single user-friendly application.

---

## 🏆 ChatGPT Codex India Hackathon 2026

RecoverAI is built as a documentation-first, production-oriented project with a strong focus on clean architecture, security, scalability, and maintainability.

---

# ✨ Features

## 🔐 Authentication
- Email & Password Authentication
- Google Sign-In
- Password Reset
- Protected Routes
- Firebase Authentication

## 📱 Recovery Management (Planned)
- Create Recovery Case
- Device Details Management
- IMEI Validation
- Recovery Dashboard

## 📄 Invoice OCR (Planned)
- Upload Invoice
- Automatic IMEI Extraction
- Invoice Information Parsing

## 🤖 AI Features (Planned)
- AI FIR Draft Generator
- AI Recovery Assistant
- Case Summarization
- Smart Guidance

## ☁ Backend
- Firebase Authentication
- Firestore Database
- Firebase Storage

---

# 🏗 Tech Stack

| Technology | Usage |
|------------|-------|
| Next.js 15 | Frontend |
| React 19 | UI |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui | Components |
| Firebase | Backend |
| Firestore | Database |
| Firebase Auth | Authentication |
| Firebase Storage | File Storage |
| OpenRouter | AI Layer (Planned) |
| Tesseract.js | OCR (Planned) |
| Google Vision API | Future Upgrade |

---

# 📁 Project Structure

```
app/
components/
features/
services/
hooks/
lib/
types/
utils/
constants/
styles/
docs/
tests/
```

---

# 🧠 Architecture

RecoverAI follows a Feature-Based Modular Architecture.

```
UI
│
▼
Hooks
│
▼
Feature Services
│
▼
Repository
│
▼
Firebase / AI / OCR
```

---

# 📚 Documentation

The project follows Documentation-First Development.

```
00_PROJECT_OVERVIEW.md
01_PRD.md
02_SYSTEM_ARCHITECTURE.md
03_DESIGN_SYSTEM.md
04_MDS.md
05_AI_AGENT_PLAYBOOK.md
06_SPRINT_BOARD.md
07_CHANGELOG.md
```

---

# 🚀 Getting Started

## Install

```bash
npm install
```

## Environment Variables

Create

```
.env.local
```

Example

```env
NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

## Run

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

# 📌 Current Status

✅ Foundation Complete

✅ Authentication Module

🚧 Recovery Module

🚧 OCR Integration

🚧 AI Integration

🚧 Dashboard

---

# 🎯 Future Roadmap

- Invoice OCR
- AI FIR Generator
- Recovery Dashboard
- CEIR Integration
- Google Maps Support
- Push Notifications

---

# 👨‍💻 Developer

**Rishabh Poddar**

BCA Student | AI/ML Enthusiast

GitHub:
https://github.com/Rishabhp22

---

# 📄 License

This project is developed for the **ChatGPT Codex India Hackathon 2026**.

---

⭐ If you like this project, consider giving it a star!