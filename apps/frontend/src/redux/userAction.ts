import { fetchUser, updateUser } from '../api/userApi';
import { User } from "@monorepo/entities";
import { SET_USER } from './userActionTypes';

export const setUser = (user:User) => ({
  type: SET_USER,
  payload: user,
});


export const fetchUserAsync = ():any => async (dispatch:any) => {
  try {
    const response:User = await fetchUser();
    dispatch(setUser(response));
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

export const updateUserAsync = (user:User):any => async (dispatch:any) => {
  try {
    const response:User = await updateUser(user);
    dispatch(setUser(response));
  } catch (error) {
    console.error('Error update user:', error);
  }
};
