import axiosInstance from './axiosInstance';
import { parseCookies } from 'nookies';
import { User } from "@monorepo/entities";

export const fetchUser = async (): Promise<User[]> => {

  const cookies = parseCookies();
  const token = cookies.token;


  const response = await axiosInstance.get<User[]>(`/users/fetch-user-data`, {
    headers: {
      'Authorization': `Bearer ${token}`, 
    },
  });
  return response.data;
};

export const updateUser = async (user:User): Promise<User> => {
  const cookies = parseCookies();
  const token = cookies.token;
  
  const response = await axiosInstance.post<User>(`/users/update-user-data`,user, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};