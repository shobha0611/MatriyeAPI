import mongoose, { Schema } from "mongoose";

const User = new Schema(
  {
    fullName: { type: String, required: true },
    image: { type: String },
    phoneNumber: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    dob: { type: Date, required: true },
    position: { type: String },
    department: { type: String },
    crmUser: { type: String },
    role: { type: String },
    assignCallerId: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    address: { type: String },
    salaryInfo: {
      basis: { type: String },
      amt: { type: String },
      paymentType: { type: String },
    },
    prInfo: {
      contribution: { type: String },
      pfNumber: { type: String },
      employerpfRate: { type: String },
      employeradditionRate: { type: String },
      employeepfRate: { type: String },
      employeeadditionRate: { type: String },
    },
    esicInfo: {
      esicContribution: { type: String },
      esicNo: { type: String },
      esicrate: { type: String },
      additionalRate: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", User);
