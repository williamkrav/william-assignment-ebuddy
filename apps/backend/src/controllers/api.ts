import { Request, Response } from "express";
import { userRepository } from "../repository/userCollection";

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const { userId, name, totalAverageWeightRatings,numberOfRents,recentlyActive } = req.body;
    await userRepository.updateUser(userId, { name, totalAverageWeightRatings,numberOfRents,recentlyActive });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error:any) {
    res.status(500).json({ error: error?.message||'' });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const  userId = req?.params.id;
    const user = await userRepository.fetchUser(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json(user);
  } catch (error:any) {
    res.status(500).json({ error: error?.message||'' });
  }
};


export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const user = await userRepository.getAllUsers();

    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json(user);
  } catch (error:any) {
    res.status(500).json({ error: error?.message||'' });
  }
};
