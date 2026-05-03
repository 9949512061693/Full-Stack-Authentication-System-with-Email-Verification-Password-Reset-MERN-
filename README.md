# 🔐 Full Stack Authentication System (MERN)

A production-ready authentication system built using the MERN stack, featuring secure user authentication, email verification, password recovery, and modern UI/UX practices. This project demonstrates real-world backend architecture, state management, and API integration.

---

## 🚀 Features

### 🔑 Authentication

* User Signup & Login
* JWT-based authentication with HTTP-only cookies
* Protected routes with role-based access logic

### 📧 Email Integration

* Email verification with OTP
* Password reset via secure token link
* Welcome email after successful verification
* Gmail SMTP integration using Nodemailer

### 🔐 Security

* Password hashing with bcrypt
* Token expiration handling
* Secure cookie storage
* Input validation and error handling

### ⚡ Frontend (React + Vite)

* Responsive UI with Tailwind CSS
* Animations using Framer Motion
* Toast notifications using React Hot Toast
* Zustand for state management (to be migrated to Redux)

### 🧠 State Management

* Centralized auth state using Zustand
* Handles loading, error, and authentication state efficiently

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Zustand (State Management)
* React Router DOM
* Framer Motion
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* Nodemailer (Gmail SMTP)

---

## 📂 Project Structure

```
client/
  ├── components/
  ├── pages/
  ├── store/
  ├── App.jsx
  └── main.jsx

server/
  ├── controllers/
  ├── routes/
  ├── models/
  ├── config/
  ├── service/
  └── utils/
```

---

## ⚙️ Environment Variables

Create a `.env` file in the server:

```
PORT=3000
MONGO_URI=your_mongodb_connection
MY_SECRET_KEY=your_jwt_secret

EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
```

---

## ▶️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/auth-system.git
cd auth-system
```

### 2️⃣ Install dependencies

#### Backend

```
cd server
npm install
```

#### Frontend

```
cd client
npm install
```

---

### 3️⃣ Run the application

#### Start backend

```
npm run dev
```

#### Start frontend

```
npm run dev
```

---

## 🔄 API Endpoints

| Method | Endpoint                          | Description       |
| ------ | --------------------------------- | ----------------- |
| POST   | `/api/auth/signup`                | Register user     |
| POST   | `/api/auth/login`                 | Login user        |
| POST   | `/api/auth/logout`                | Logout user       |
| POST   | `/api/auth/verify-user`           | Verify email      |
| POST   | `/api/auth/forgot-password`       | Send reset link   |
| POST   | `/api/auth/reset-password/:token` | Reset password    |
| GET    | `/api/auth/check-auth`            | Check auth status |

---

## 🧠 Key Highlights

* Clean separation of concerns (Controller, Service, Routes)
* Scalable architecture for production
* Secure authentication flow
* Email-based verification system
* Real-world state management patterns
* API proxy integration with Vite

---

## 📈 Future Improvements

* Migrate Zustand → Redux Toolkit
* Add rate limiting for OTP & login attempts
* Implement refresh tokens
* Add role-based authorization
* Deploy using Docker + CI/CD pipeline

---

## 🙌 Acknowledgment

This project was built as part of a hands-on learning journey focused on mastering backend systems, authentication flows, and full-stack development.

---

## 📬 Contact

Feel free to connect for collaboration or feedback.

---

⭐ If you found this project useful, consider giving it a star!
