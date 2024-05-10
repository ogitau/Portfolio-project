const mongoose = require("mongoose");


const PatientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter patient name"],
    },
    year_of_birth: {
      type: Date,
      required: true,
      default: 2000,
    },

    contact: {
      type: Number,
      minlength: 10,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;
