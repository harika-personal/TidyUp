# 🧹 TidyUp

TidyUp is a web application designed to help roommates manage and assign household chores efficiently.  
Each user can create or join a house, assign chores to members, track progress, and stay on top of weekly tasks with automated scheduling.

---

## 🚀 Features

- Create or join a shared **household group**
- Assign chores to one or multiple housemates
- Track **chore status** (Pending, Completed, etc.)
- Role-based membership (**Admin / Member**)
- Manage weekly schedules and completion records
- Built with **React, Node.js, Express, PostgreSQL (Neon), Prisma ORM**

---

## 🧱 Tech Stack

### **Frontend**

- React (Vite)
- Tailwind CSS
- Axios (for API requests)

### **Backend**

- Node.js + Express.js
- Prisma ORM + PostgreSQL (Neon)
- dotenv for environment config
- CORS + body-parser middleware

---

## 🗂️ Project Structure

###To-do

---

## 🧠 Database Schema (Final TidyUp Database Structure)

The backend uses **PostgreSQL** via **Prisma ORM**.

### Models

- **User**: registered roommate with login credentials
- **House**: represents a household or group
- **Housemates**: join table for user–house relationship
- **Chore**: task belonging to a house, created by one user
- **Assignment**: join table linking users and chores (many-to-many)

_(See `prisma/schema.prisma` for full definitions.)_

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/TidyUp.git
cd TidyUp
```

### 1️⃣ Install dependencies

#### Frontend

```bash
cd tidyup-backend
npm install
```

#### Backend

```bash
cd tidyup-backend
npm install
```

### 1️⃣Configure environment variables

DATABASE_URL="your_neon_postgres_connection_string"
PORT=5050

### 1️⃣ Initialize Prisma

```bash
npx prisma db push
```

### 1️⃣ Run servers

#### Frontend

```bash
npm run dev
```

#### Backend

```bash
npm run dev
```

## 🧑‍💻 Development Notes

Backend runs on http://localhost:5050

Frontend runs on http://localhost:5173

APIs follow REST conventions (/api/users, /api/houses, /api/chores)

Database hosted on Neon.tech

Deployment (future): Render (backend) + Netlify/Vercel (frontend)

---

## 🌟 Future Enhancements

Notifications & reminders for upcoming chores

OAuth login (Google)

Weekly leaderboards or streaks

AI-powered chore balancing

---

## 👨‍💻 Author

Harika Bale

🧹 “Share chores. Simplify living.”
