# 🎵 SoundStream - MERN Music Streaming App

SoundStream is a **MERN-based music streaming platform** with an **admin panel** for managing songs and albums. Admins can **upload, manage, and view songs and albums**, while users can stream music seamlessly.

## 🚀 Features

✅ **Music Streaming** – Users can play and listen to songs  
✅ **Admin Panel** – Admins can **add** and **manage** songs and albums  
✅ **Cloudinary Integration** – Secure **media storage**  
✅ **Multer for File Uploads** – Handles song and album cover uploads  
✅ **React Toastify** – User-friendly notifications  
✅ **MongoDB & Mongoose** – Stores music metadata  
✅ **Express.js & Node.js** – Backend API  
✅ **React.js & React Router** – Frontend UI  

---

## 📌 Technologies Used

- **Frontend:** React.js, React Router, React Toastify, Axios  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Storage:** Cloudinary, Multer  
- **Other:** Dotenv, CORS  

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
# Clone the repository
git clone https://github.com/Shahid8389/soundstream.git

# Navigate to the project directory
cd soundstream
```

### 2️⃣ Backend Setup
1. Navigate to the `backend` folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Set Up Backend Environment Variables:
```bash
CLOUDINARY_NAME = "your_cloudinary_cloud_name"
CLOUDINARY_API_KEY = "your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY = "your_cloudinary_secret_key"
MONGODB_URI = "your_mongodb_uri"
```
4. Start the backend server with Node.js:
```bash
# Make sure your Node.js version is 18.11.0 or higher.
node --watch server.js
```

Or, you can also use **Nodemon** for Automatic Server Restarts.

### 3️⃣ Frontend Setup
1. Navigate to the `frontend` folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the React frontend:
```bash
npm run dev
```
4. Open your browser and visit:
```bash
http://localhost:5173
```

### 4️⃣ Admin Panel Setup
1. Navigate to the `admin panel` folder:
```bash
cd admin panel
```
2. Install dependencies:
```bash
npm install
```
3. Start the React admin panel:
```bash
npm run dev
```
4. Open your browser and visit:
```bash
http://localhost:5174
```

---

### 📝 Contributing
Contributions are welcome! Follow these steps:

1. Fork the repository

2. Create a new branch:
```bash
git checkout -b feature-branch
```
3. Make your changes and commit:
```bash
git commit -m "Describe your changes"
```
3. Push to your branch:
```bash
git push origin feature-branch
```
4. Open a Pull Request