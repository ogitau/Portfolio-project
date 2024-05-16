MERN Stack Project
This project is a simple MERN (MongoDB, Express, React, Node.js) stack application that allows users to create and manage patient records. The application consists of a React frontend and a Node.js/Express backend, with MongoDB used as the database.

Features
Create new patient records with fields for name, date of birth, and contact information
View a list of all patient records
Edit existing patient records
Delete patient records

Tech Stack
MongoDB: A document-oriented NoSQL database used to store patient data
Express: A Node.js web application framework used to build the backend API
React: A JavaScript library for building user interfaces used to build the frontend
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine used to run the backend server

Prerequisites
Node.js installed
MongoDB installed and running
A text editor such as Visual Studio Code or Atom
A web browser such as Google Chrome or Mozilla Firefox

Getting Started
Clone the repository
Navigate to the backend directory and run npm install to install the backend dependencies
Navigate to the frontend directory and run npm install to install the frontend dependencies
In the backend directory, create a .env file and add the following environment variables:
MONGODB_URI: The connection string for your MongoDB database
PORT: The port number for the backend server (default is 5000)
In the frontend directory, open the src/config.js file and update the API_BASE_URL variable with the URL of the backend server (default is http://localhost:5000/api)
Start the backend server by running npm start in the backend directory
Start the frontend server by running npm start in the frontend directory
Open your web browser and navigate to http://localhost:3000 to view the application
Usage
To create a new patient record, click the "Create Patient" button and enter the patient's information in the form fields. Click the "Submit" button to save the record.
To view a list of all patient records, click the "Patients" link in the navigation bar.
To edit a patient record, click the "Edit" button next to the record in the list. Update the form fields and click the "Submit" button to save the changes.
To delete a patient record, click the "Delete" button next to the record in the list. Confirm the deletion by clicking the "Delete" button in the confirmation dialog.




