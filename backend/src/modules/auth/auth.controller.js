import {
  registerUser,
  loginUser,
  logoutUser
} from "./auth.service.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);

    // 🍪 Set cookie
    res.cookie("token", data.token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
      success: true,
      message: "Login successful"
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    await logoutUser(req.user._id);

    res.clearCookie("token");

    res.json({
      success: true,
      message: "Logged out"
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
};