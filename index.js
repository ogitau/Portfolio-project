const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/patient.model.js");
const patientRoute = require("./routes/patient.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/patients", patientRoute);

app.get("/", (req, res) => {
  res.send("this is fun fron node api");
});

mongoose
  .connect(
    "mongodb+srv://admin:qLT0fQ6eUuIRL0vT@mongo.v7if5pi.mongodb.net/CRUD_API?retryWrites=true&w=majority&appName=Mongo"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Could not connect to the Database");
  });
