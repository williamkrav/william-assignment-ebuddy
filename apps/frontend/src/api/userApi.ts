import axiosInstance from './axiosInstance';
import { User } from "@monorepo/entities";

export const fetchUser = async (): Promise<User> => {
  const response = await axiosInstance.get<User>(`/fetch-user-data`);  
  return response.data;
};

export const updateUser = async (user:User): Promise<User> => {
  const response = await axiosInstance.post<User>(`/update-user-data`,user);  
  return response.data;
};