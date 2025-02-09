import { fetchUser, updateUser } from '../api/userApi';
import { User } from "@monorepo/entities";
import { UPDATE_USER,SET_USERS } from './userActionTypes';

export const setUpdatedUser = (user:User) => ({
  type: UPDATE_USER,
  payload: user,
});

export const setUsers = (users:User[]) => ({
  type: SET_USERS,
  payload: users,
});

export const fetchUserAsync = ():any => async (dispatch:any) => {
  try {
    const response:User[] = await fetchUser();
    dispatch(setUsers(response));
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

export const updateUserAsync = (user:User):any => async (dispatch:any) => {
  try {
    const response:User = await updateUser(user);
    dispatch(setUpdatedUser(response));
  } catch (error) {
    console.error('Error update user:', error);
  }
};
