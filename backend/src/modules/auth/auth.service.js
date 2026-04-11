import User from "./auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (data) => {
  const { name, department, email, password } = data;

  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    department,
    email,
    password: hashed
  });

  return user;
};

export const loginUser = async ({ email, password, deviceId }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // 🚫 Single device restriction
  if (
    user.activeSession &&
    user.activeSession.deviceId !== deviceId
  ) {
    throw new Error("Account already in use on another device");
  }

  // ✅ Use ENV variable
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  user.activeSession = {
    token,
    deviceId,
    loginTime: new Date()
  };

  await user.save();

  return { token };
};

export const logoutUser = async (userId) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  user.activeSession = null;
  await user.save();
};