import { addBlog } from "@controllers/blog.controller";
import { Router } from "express";

const router = Router();

router.post("/addBlog",addBlog);

export default router;