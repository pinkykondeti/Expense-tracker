﻿# Expense-tracker
💸 Budget Manager App
A simple and interactive web-based application for managing personal transactions and visualizing income and expenses using charts. Users can register, log in, add transactions, filter them, and analyze their financial behavior with visual feedback.

🚀 Features
User registration and login

Add, filter, and list transactions (income/expense)

Real-time Chart.js visual representation

Responsive and clean UI

Powered by HTML, CSS, JavaScript, PHP, and Chart.js

🗂 Project Structure
```
budget-manager-app/
├── index.html
├── style.css
├── script.js
├── graphScript.js
├── new_register.php
├── fetch_data.php
├── add_transaction.php
├── get_transactions.php
├── users.json
├── data.json
└── README.md
```
🛠 Installation Instructions
Follow the steps below to run the project on your PC.

1. Prerequisites
PHP installed (use XAMPP/WAMP/LAMP for ease)
Modern web browser (Chrome, Firefox, etc.)

2. Setup Steps
📦 Option A: Using XAMPP (Windows/macOS)
i)Download and install XAMPP: https://www.apachefriends.org/
ii)Place the entire project folder (budget-manager-app) inside:
C:\xampp\htdocs\
iii)Launch XAMPP Control Panel and start the Apache server.
iv)In your browser, go to:
http://localhost/budget-manager-app/

📦 Option B: Using PHP CLI (Linux/macOS)
i)Open terminal
ii)Navigate to project directory:
cd path/to/budget-manager-app
iii)Start a local server:
php -S localhost:8000
iv)Open browser and go to:
http://localhost:8000/

📄 Files Overview
1. index.html — Main entry point of the web app.
2. style.css — Styling for the UI.
3. script.js — Handles login, registration, UI toggling, and transaction functions.
4. graphScript.js — Handles graph generation with Chart.js.
5. new_register.php — Handles registration logic (stores users in users.json).
6. fetch_data.php — Fetches filtered transactions.
7. add_transaction.php — Adds new transactions to data.json.
8. get_transactions.php — Retrieves all transaction data for a user.
9. users.json — Stores registered user credentials.
10. data.json — Stores transaction records.

🧪 How to Use
1.Launch the app on your local server.

2.Click on "Register here" to create a new account.

3.Use your credentials to log in.

4.Add transactions using the form.

5.Filter transactions by date or category.

6.View charts below your transactions list.

📊 Chart Features

1.Chart is generated after login automatically.

2.Chart displays total income vs expense dynamically.

3.Chart.js used for clean pie chart visualization.

🔐 Credentials Storage Note
1.User credentials are stored in JSON for simplicity (not recommended for production).
2.For real-world usage, use a database and hashed passwords.

🧼 Reset Data (optional)
1.To clear all user and transaction data:
2.Open users.json and data.json
3.Remove the contents or delete the files to reset app state.

👩‍💻 Author
Created by Pinky

For personal finance management demo and experimentation.
