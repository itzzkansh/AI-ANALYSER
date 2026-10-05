# 🤖 AI ATS Resume Analyzer

An AI-powered ATS Resume Analyzer built using the **MERN Stack**. The application allows users to securely upload PDF resumes, manage their resume history, and receive AI-based ATS analysis to improve resume quality.

---

## ✨ Features

### Authentication
- Secure User Registration
- User Login
- JWT Authentication
- Protected Routes

### Resume Management
- Upload PDF Resume
- Extract Resume Text
- View Uploaded Resume History
- View Individual Resume Analysis
- Delete Resume

### User Interface
- Responsive Dashboard
- Tailwind CSS UI
- Resume Upload Page
- ATS Analysis Result Page

---

# 🛠 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Vite

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- PDF-Parse

---

# 📁 Project Structure

```
AI-ATS-Resume-Analyzer
│
├── client
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── ...
│   └── ...
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/itzzkansh/AI-ATS-Resume-Analyzer.git
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables


PORT=5000

MONGO_URI=********************

JWT_SECRET=*******************

GEMINI_API_KEY=***************

---

# 📚 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Resume

| Method | Endpoint |
|---------|----------|
| POST | /api/resume/upload |
| GET | /api/resume/history |
| GET | /api/resume/:id |
| DELETE | /api/resume/:id |

---

# 🔒 Security

- JWT Authentication
- Protected API Routes
- Password Hashing using bcrypt
- Input Validation
- Secure File Upload using Multer

---

# 👨‍💻 Author

**Yash Jangid**

B.Tech Student | NIT Jalandhar

GitHub: https://github.com/itzzkansh

LinkedIn: https://linkedin.com/in/yash-jangid-63936932b/



## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
