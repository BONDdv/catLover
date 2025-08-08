import express from "express"
import { auth } from "../middleware/authMiddleware.js";
import { getComments,postComment } from "../controllers/commentController.js";

const router = express.Router();

router.get("/comments", auth, getComments);
router.post("/comments", auth, postComment);

export default router;