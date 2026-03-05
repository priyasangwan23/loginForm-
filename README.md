Login & Registration Form with MongoDB

A simple full-stack web application that allows users to submit their login/registration details through a stylish animated form. The data is sent from the frontend to the backend and stored securely in a cloud database.

This project demonstrates how a frontend interface communicates with a backend API and saves data in a database.

Features

Animated wave-style input labels

Clean and responsive UI

Frontend to backend communication using fetch

Data storage in MongoDB Atlas

Backend built using Express.js

Database interaction using Mongoose

Tech Stack

Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

Database

MongoDB Atlas

Mongoose

Project Structure
project
│
├── index.html      # Login/Register form
├── style.css       # Styling for the UI
├── script.js       # Form animation and API request
└── index.js        # Express server and database connection
How It Works

The user enters Name, Email, and Password in the form.

JavaScript captures the input values.

A POST request is sent to the backend server.

The server receives the data and stores it in MongoDB.

The database stores the user information for future use.

Installation & Setup

1️⃣ Clone the repository

git clone <https://github.com/priyasangwan23/loginForm-.git>

2️⃣ Install dependencies

npm install express mongoose cors

3️⃣ Start the server

node index.js

4️⃣ Open index.html in your browser and submit the form.

Learning Purpose

This project helps beginners understand:

How frontend forms send data to backend servers

How REST APIs work

How to connect Node.js with MongoDB

Basic full-stack application structure
