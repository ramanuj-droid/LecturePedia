import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";

import authRoutes from "./modules/auth/auth.routes.js";
import barberRoutes from "./modules/barber/barber.routes.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import barberServiceRoutes from "./modules/barberService/barberService.routes.js";
import shopRoutes from "./modules/shop/shop.route.js";
import orderRoutes from "./modules/order/order.route.js";
import notificationRoutes from "./modules/notification/notification.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import mapRoutes from "./modules/map/map.routes.js"; // ✅ NEW

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/barber", barberRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/services", barberServiceRoutes);
app.use("/api/v1/shop", shopRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/map", mapRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorMiddleware);

export default app;