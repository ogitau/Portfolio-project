const express = require("express");
const router = express.Router();
const Patient = require('../models/patient.model.js');
const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient.controller.js");

router.get("/", getPatients);

router.get("/:id", getPatient);
router.post("/", createPatient);

//update a patient
router.put("/:id", updatePatient);

// delete a patient
router.delete("/:id", deletePatient);

module.exports = router;
