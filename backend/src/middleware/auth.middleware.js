import jwt from "jsonwebtoken";
import User from "../modules/auth/auth.model.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    // ✅ Use ENV secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    // ✅ Check if user exists
    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    // ✅ Validate session
    if (
      !user.activeSession ||
      user.activeSession.token !== token
    ) {
      return res.status(401).json({
        message: "Session invalid"
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }
};