from flask_cors import CORS

from flask import Flask, render_template, request, redirect, session
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
from flask import session


app = Flask(__name__)
CORS(app)
app.secret_key = "your_secret_key"
app.secret_key = "secret123"

# MySQL config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@Rajith@123'
app.config['MYSQL_DB'] = 'car_booking'

mysql = MySQL(app)

# Home page
@app.route('/')
def home():
    return render_template('vizagrides.html')

# SIGNUP
@app.route('/signup', methods=['POST'])
def signup():
    username = request.form.get('username')
    phone = request.form.get('phone')
    email = request.form.get('email')
    password = generate_password_hash(request.form.get('password'))

    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO users(username, phone, email, password) VALUES(%s,%s,%s,%s)",
        (username, phone, email, password)
    )
    mysql.connection.commit()
    cur.close()

    # 🔥 ADD THIS (VERY IMPORTANT)
    session['username'] = username

    return "Signup Successful"


# LOGIN
@app.route('/login', methods=['POST'])
def Login():
    email = request.form.get('email')
    password = request.form.get('password')

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cur.fetchone()

    if user:
        from werkzeug.security import check_password_hash

        if check_password_hash(user[4], password):
            session['username'] = user[1]   # 👈 store username
            return "Login Successful"

    return "Invalid Credentials"

@app.route('/get_user')
def get_user():
    if 'username' in session:
        return session['username']
    return "Not Logged In"

@app.route('/logout')
def logout():
    session.pop('username', None)
    return "Logged out"

if __name__ == "__main__":
    app.run(debug=True)

