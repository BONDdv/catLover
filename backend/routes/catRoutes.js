import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { getCat } from "../controllers/getCatController.js";


const router = express.Router();



router.get("/cat", auth, getCat);

export default router;
