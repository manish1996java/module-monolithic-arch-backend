import { Router } from "express";
import authRoutes from "./auth.routes";
import chatRoutes from "./chat.routes";
import userRoutes from "./user.routes";
import blogRoutes from "./blog.routes";

const router = Router();

router.use("/blog", blogRoutes)
router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);
router.use("/users", userRoutes);

export default router;