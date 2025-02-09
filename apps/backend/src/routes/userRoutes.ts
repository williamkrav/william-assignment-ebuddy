import express from "express";
import { updateUserData,getAllUsers } from "../controllers/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/update-user-data", authMiddleware, updateUserData);
router.get("/fetch-user-data", authMiddleware, getAllUsers);

export default router;
