import { Request, Response } from "express";
import { userRepository } from "../repository/userCollection";

export const updateUserData = async (req: Request, res: Response) => {

    const { id, name, totalAverageWeightRatings,numberOfRents } = req.body;
    let err = ""
    if (!id) err = "ID is required"
    if (!name) err = "name is required"
    if (totalAverageWeightRatings < 0 || totalAverageWeightRatings > 5) err = "weight is invalid"
    if (numberOfRents < 0) err = "number of rent is invalid"
    if(err){
      res.status(500).json({ error: err||'' });
      return
    }
    

  try {
    const { id, name, totalAverageWeightRatings,numberOfRents } = req.body;
    await userRepository.updateUser(id, { name, totalAverageWeightRatings,numberOfRents });
    res.status(200).json({ message: "User updated successfully" });
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
