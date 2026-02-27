import { addBlog } from "@modules/blog/controllers/blog.controller";
import { Router } from "express";

const router = Router();

router.post("/addBlog",addBlog);

export default router;