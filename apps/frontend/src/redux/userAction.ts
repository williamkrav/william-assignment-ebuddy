import { fetchUser, updateUser } from '../api/userApi';
import { User } from "@monorepo/entities";
import { UPDATE_USER,UPDATE_USER_ERR,SET_USERS } from './userActionTypes';
import { Logout } from '../utils/auth';

export const setUpdatedUser = (user:User) => ({
  type: UPDATE_USER,
  payload: user,
});

export const setUpdatedUserErr = (error: string) => ({
  type: UPDATE_USER_ERR,
  payload: error,
});


export const setUsers = (users:User[]) => ({
  type: SET_USERS,
  payload: users,
});

export const fetchUserAsync = ():any => async (dispatch:any) => {
  try {
    const response:User[] = await fetchUser();
    dispatch(setUsers(response));
  } catch (error:any) {
    console.error('Error fetching user:', error);
    if(error.status === 403){
      Logout()
    }
  }
};

export const updateUserAsync = (user:User):any => async (dispatch:any) => {
  try {
    await updateUser(user);
    dispatch(setUpdatedUser(user));
  } catch (error:any) {
    dispatch(setUpdatedUserErr(error.error));
  }
};
