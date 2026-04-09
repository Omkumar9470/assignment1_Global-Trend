# 📝 Task Manager – Full Stack Application

## 📌 Project Overview
A **full-stack Task Manager application** built using Next.js and Node.js + Express.  
This project demonstrates the ability to design and integrate a frontend UI with a backend API while maintaining clean architecture and simplicity.

---

## 🚀 Key Features
- Create, update, and delete tasks  
- Mark tasks as completed  
- Real-time UI updates  
- Clean and structured API integration  
- Lightweight and fast (no database dependency)

---

## 🛠 Tech Stack
- **Frontend:** Next.js (React), Tailwind CSS, shadcn/ui  
- **Backend:** Node.js, Express.js  
- **Storage:** In-memory (no database)  

---

## 🧱 Architecture
- Modular backend with **routes and controllers**  
- Component-based frontend using **Next.js**  
- Clear separation between frontend and backend  
- RESTful API communication  

---

## 📂 Project Structure
```
task-manager/
├── backend/
│   ├── index.js
│   ├── controllers/
│   │   └── taskController.js
│   └── routes/
│       └── tasks.js
└── frontend/   # Next.js application
```

---

## ⚙️ Setup & Installation

### 🔹 Prerequisites
- Node.js (v18 or above)  
- npm  

---

### ▶️ Run Backend
```bash
cd backend
npm install
node index.js
```

Server runs at:  
👉 http://localhost:5000

---

### ▶️ Run Frontend
```bash
cd frontend
npm install
npm run dev
```

App runs at:  
👉 http://localhost:3000

---

### ⚠️ Note
Run **frontend and backend simultaneously** in separate terminals.

---

## 🔗 API Endpoints

| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| GET    | /tasks        | Fetch all tasks          |
| POST   | /tasks        | Create a new task        |
| PATCH  | /tasks/:id    | Update task              |
| DELETE | /tasks/:id    | Delete task              |

---

## 📊 Design Decisions
- Used **in-memory storage** for simplicity and faster setup  
- Focused on **functionality and clean code structure**  
- Followed **REST API principles**  
- UI generated using **v0.dev**, then customized and integrated  

---

## ⚠️ Limitations
- Data resets on server restart (no database)  
- No authentication (out of scope)  

---

## 🚀 Future Improvements
- Add database integration (MongoDB / PostgreSQL)  
- Implement authentication (JWT / OAuth)  
- Improve UI/UX and add animations  
- Add deployment (Vercel + Render)  

---

## 👨‍💻 Author
**Om Kumar**  
B.Tech CSE | Full Stack Developer  

---

## 📌 Note
This project was built to demonstrate full-stack development skills, including API design, frontend integration, and clean project structure.