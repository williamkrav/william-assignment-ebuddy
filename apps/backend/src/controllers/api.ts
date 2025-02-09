import { Request, Response } from "express";
import { userRepository } from "../repository/userCollection";

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const { userId, name, email } = req.body;
    await userRepository.updateUser(userId, { name, email });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error:any) {
    res.status(500).json({ error: error?.message||'' });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await userRepository.fetchUser(userId);

    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json(user);
  } catch (error:any) {
    res.status(500).json({ error: error?.message||'' });
  }
};
