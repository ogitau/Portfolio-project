const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter patient name"],
    },
    date_of_birth: {
      type: Date,
      required: true,
      default: 2000,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    contact: {
      type: Number,
      minlength: 10,
      required: true,
    },
    prescription: {
      type: String,
      required: true,
    },
    medication: {
      type: Array,
      of: { type: String },
    },
    total_charges: {
      type: Number,
      required: false,
    },
    amount_paid: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
