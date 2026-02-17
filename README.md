# 🚀 PrimeTrade – Full Stack Task Management App

A production-ready full-stack MERN application with authentication, protected routes, and complete CRUD functionality.

Live Demo:
Frontend → [https://primetrade-fullstack-app.vercel.app](https://primetrade-fullstack-app.vercel.app)
Backend → [https://primetrade-backend-yzin.onrender.com](https://primetrade-backend-yzin.onrender.com)

---

# 📌 Project Overview

PrimeTrade is a secure task management application built using the MERN stack.

It includes:

* User Authentication (JWT)
* Protected API routes
* Full CRUD operations
* MongoDB Atlas integration
* Production deployment (Vercel + Render)
* Portfolio-level UI

---

# 🛠 Tech Stack

Frontend:

* React (Vite)
* Axios
* React Router
* Tailwind CSS

Backend:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt

Deployment:

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

# 🔐 Features

✅ Register & Login
✅ JWT Authentication
✅ Protected Dashboard
✅ Create Task
✅ Read Tasks
✅ Update Task
✅ Delete Task
✅ Completed Toggle
✅ Search & Filter
✅ Secure backend validation
✅ Production deployment

---

# 🧠 Architecture

Frontend (Vercel)
↓
Backend API (Render)
↓
MongoDB Atlas (Cloud Database)

---

# 🏗 How We Built This Project (Step-by-Step)

## 1️⃣ Backend Development

### Step 1 – Setup Express Server

* Initialized Node project
* Installed express, mongoose, dotenv
* Connected MongoDB Atlas

### Step 2 – Authentication System

Created:

* User Model
* Auth Controller
* Auth Routes
* JWT Middleware

Implemented:

* Register endpoint
* Login endpoint
* Token generation
* Protected route middleware

### Step 3 – Task System

Created:

* Task Model
* Task Controller
* Task Routes

Implemented:

* POST /tasks (Create)
* GET /tasks (Read)
* PUT /tasks/:id (Update)
* DELETE /tasks/:id (Delete)

All routes protected with JWT middleware.

---

## 2️⃣ Frontend Development

### Step 1 – Setup React (Vite)

Created pages:

* Login.jsx
* Register.jsx
* Dashboard.jsx

### Step 2 – Authentication Flow

* Stored token in localStorage
* Attached token in Axios headers
* Protected Dashboard using useEffect
* Redirected unauthenticated users

### Step 3 – Dashboard Features

Implemented:

* Fetch tasks on load
* Add task
* Delete task
* Update task
* Completed toggle
* Search functionality
* Clean responsive UI

---

# 🚨 Problems We Faced & How We Solved Them

## ❌ Problem 1 – ERR_CONNECTION_REFUSED

Cause:
Backend was not running.

Solution:
Started backend server using:

```
npm run dev
```

---

## ❌ Problem 2 – 401 Unauthorized (No Token Provided)

Cause:
Authorization header missing.

Solution:
Added:

```
headers: { Authorization: `Bearer ${token}` }
```

---

## ❌ Problem 3 – MongoDB Atlas Connection Error

Error:
MongooseServerSelectionError

Cause:
IP not whitelisted.

Solution:

* Went to MongoDB Atlas
* Network Access
* Added 0.0.0.0/0

---

## ❌ Problem 4 – MongoDB Authentication Failed

Cause:
Wrong username/password in connection string.

Solution:

* Reset database user password
* Updated .env MONGO_URI

---

## ❌ Problem 5 – Git Push Rejected

Error:
remote contains work that you do not have locally

Solution:

```
git pull origin main --rebase
git push origin main
```

---

## ❌ Problem 6 – GitHub Pages 404

Cause:
React app is not static-only backend app.

Solution:
Used:

* Vercel for frontend
* Render for backend

---

# 🌍 Deployment Guide

## 🔵 Backend Deployment (Render)

1. Connect GitHub repository
2. Set:

   * Root directory → backend
   * Build command → npm install
   * Start command → npm start
3. Add Environment Variables:

   * MONGO_URI
   * JWT_SECRET
   * PORT
4. Deploy

Result:
Live backend URL generated.

---

## 🟣 Frontend Deployment (Vercel)

1. Import GitHub repository
2. Root directory → frontend
3. Build command → vite build
4. Output directory → dist
5. Add Environment Variable:
   VITE_API_URL = [https://your-render-url.onrender.com/api](https://your-render-url.onrender.com/api)
6. Deploy

Frontend successfully connected to live backend.

---

# 🔒 Security Considerations

* Password hashing using bcrypt
* JWT token-based authentication
* Protected routes
* User-specific task filtering
* Environment variables for secrets

---

# 📁 Folder Structure

```
primetrade-fullstack-app
│
├── backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── api.js
│   │   └── App.jsx
```

---

# 📈 What Makes This Portfolio Ready?

* Production deployment
* Real authentication
* Secure backend
* Clean UI
* Cloud database
* Environment variable usage
* Git workflow
* Real-world error handling

---

# 🧑‍💻 Author

Ashwanth Reddy
Full Stack Developer (MERN)

---

# 🚀 Future Improvements

* Role-based access
* Pagination
* Real PrimeTrade trading dashboard
* WebSockets
* Analytics dashboard
* Stripe integration
* Docker containerization
