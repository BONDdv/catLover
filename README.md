# Web Cat Lover App 🐱

เว็บสำหรับคนรักแมว พัฒนาโดยใช้ **Express.js + React.js + Node.js**  
ผู้ใช้สามารถเข้าสู่ระบบด้วย username และ password ที่กำหนดไว้ใน `backend/data/users.js`  
มีค่าตั้งต้นดังนี้:  
```js
{ username: "user1", password: "123456" },
{ username: "user2", password: "abcdef" }
```
เมื่อเข้าสู่ระบบแล้ว ผู้ใช้สามารถดูภาพแมวแบบสุ่มจาก API และแสดงความคิดเห็นใต้ภาพได้

## 📂 โครงสร้างโฟลเดอร์

project-root/
│
├── backend/                       # ฝั่งเซิร์ฟเวอร์ (Node.js + Express)
│   ├── controller/                 # Logic ของแต่ละ endpoint
│   ├── data/                        # Mock data เช่น users.js, comments.js
│   ├── middleware/                  # Middleware ตรวจสอบ JWT
│   ├── routes/                      # Routing ของ API
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js                    # จุดเริ่มต้นของ backend
│
├── frontend/                       # ฝั่ง client (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx   # ป้องกัน Route ถ้าไม่ login
│   │   ├── pages/
│   │   │   ├── CatPage.jsx          # หน้าแสดงภาพแมว + คอมเมนต์
│   │   │   └── Login.jsx            # หน้าเข้าสู่ระบบ
│   │   ├── App.jsx                  # กำหนดเส้นทางหลัก
│   │   ├── index.css                # CSS หลัก
│   │   └── main.jsx                 # จุดเริ่มต้นของ React
│   ├── public/
│   ├── node_modules/
│   ├── package-lock.json
│   └── package.json
│
└── README.md

---

## 🛠️ การติดตั้งและรันโปรเจค
### 1️⃣ Clone Repository  
```bash
git clone 
 
```
### 2️⃣ Install Dependencies for Back and Frontend
Backend
```bash
cd backend
npm install
```
Frontend
```bash
cd Frontend
npm install
```


### 3️⃣ Run Server for Back and Frontend

Backend
```bash
npm run dev
```
Frontend
```bash
npm run dev
```
จากนั้นเปิดเบราว์เซอร์ไปที่:
Frontend: http://localhost:5173
Backend API: http://localhost:8010
