# 🚖 Vizag Rides

Vizag Rides is a simple ride-booking / cab service web application built using **Flask, HTML, CSS, JavaScript, MySQL**, and **user authentication** features.

This project is designed to provide a basic platform where users can visit the homepage, sign up, log in, and interact with the ride-booking website.

---

## 📌 Features

- 🏠 Homepage for Vizag Rides
- 🔐 User Signup Authentication
- 🔑 User Login Authentication
- 🔒 Password Hashing for security
- 🗄️ MySQL Database Integration
- 👤 Session Handling after Signup/Login
- 🎨 Frontend built using HTML, CSS, JavaScript
- ⚙️ Backend built using Flask (Python)

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Database
- MySQL

### Authentication / Security
- Flask Sessions
- Password Hashing (`werkzeug.security`)

---

## 📂 Project Structure

```bash
Vizag-Rides/
│
├── static/
│   ├── images/
│   ├── homepage.css
│   └── homepage.js
│
├── templates/
│   └── vizagrides.html
│
├── app.py
├── README.md
└── requirements.txt
```

---

## 🚀 How to Run This Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Vizag-Rides.git
cd Vizag-Rides
```

---

### 2️⃣ Create Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate it:

#### On Windows
```bash
venv\Scripts\activate
```

#### On Mac/Linux
```bash
source venv/bin/activate
```

---

### 3️⃣ Install Required Packages

```bash
pip install -r requirements.txt
```

If you don't have `requirements.txt`, install manually:

```bash
pip install flask flask-mysqldb werkzeug
```

---

### 4️⃣ Setup MySQL Database

Create a MySQL database:

```sql
CREATE DATABASE vizagrides;
```

Use the database:

```sql
USE vizagrides;
```

Create the `users` table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

---

### 5️⃣ Configure Database in `app.py`

Make sure your MySQL configuration in `app.py` looks like this:

```python
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
app.config['MYSQL_DB'] = 'vizagrides'
```

Also set a secret key:

```python
app.secret_key = 'your_secret_key'
```

---

### 6️⃣ Run the Flask App

```bash
python app.py
```

Then open in browser:

```bash
http://127.0.0.1:5000/
```

---

## 🔐 Authentication Flow

### Signup
- User enters:
  - Username
  - Phone Number
  - Email
  - Password
- Password is securely hashed before storing in database.
- User session is created after successful signup.

### Login
- User enters:
  - Email
  - Password
- System checks credentials from MySQL database.
- If valid, user is logged in successfully.

---

## 📸 Screenshots

You can add screenshots here after uploading images to your GitHub repo.

Example:

```md
## 📸 Screenshots

### Homepage
![Homepage](C:\Users\rajit\OneDrive\Pictures\Screenshots\signup.png)

### Signup/Login
![Signup/Login](static/images/login.png)
```

---

## 📈 Future Improvements

- 🚕 Ride booking form
- 📍 Pickup and drop location system
- 💳 Payment integration
- 🧾 Booking history
- 👨‍✈️ Driver dashboard
- 📱 Responsive mobile design
- 📧 Email verification
- 🔄 Forgot password feature

---

## 🎯 Learning Outcomes

This project helped in learning:

- Flask routing
- HTML/CSS/JS integration with backend
- MySQL database connection
- User authentication system
- Password hashing
- Session management
- Full-stack web development basics

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a pull request

---

## 📄 License

This project is for **learning and educational purposes**.

---

## 👨‍💻 Author

**Rajith Kumar**

- GitHub: [your-github-username](https://github.com/your-github-username)

---

## ⭐ If you like this project

Give it a **star** on GitHub ⭐
