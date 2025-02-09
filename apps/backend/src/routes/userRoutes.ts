import express from "express";
import { updateUserData, fetchUserData } from "../controllers/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/update-user-data", authMiddleware, updateUserData);
router.post("/fetch-user-data", authMiddleware, fetchUserData);
router.get("/fetch-user-data", authMiddleware, fetchUserData);

export default router;
