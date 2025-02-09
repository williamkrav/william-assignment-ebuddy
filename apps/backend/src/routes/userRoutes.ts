import express from "express";
import { updateUserData, fetchUserData,getAllUsers } from "../controllers/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/update-user-data", authMiddleware, updateUserData);
router.get("/fetch-user-data", authMiddleware, getAllUsers);

// for testing
router.get("/get-all-user-data", getAllUsers);
router.get("/get-user-data/:id", fetchUserData);

export default router;
