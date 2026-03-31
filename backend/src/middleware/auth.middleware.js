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

    const decoded = jwt.verify(token, "SECRET");

    const user = await User.findById(decoded.userId);

    if (!user.activeSession || user.activeSession.token !== token) {
      return res.status(401).json({
        message: "Session invalid"
      });
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};