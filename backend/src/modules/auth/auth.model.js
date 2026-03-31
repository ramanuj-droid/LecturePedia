import mongoose from "mongoose";

const activeSessionSchema = new mongoose.Schema({
  token: String,
  deviceId: String,
  loginTime: Date
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    department: String,
    email: { type: String, unique: true },
    password: String,

    activeSession: activeSessionSchema
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);