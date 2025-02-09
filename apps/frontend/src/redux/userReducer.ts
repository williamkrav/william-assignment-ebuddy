import { User } from "@monorepo/entities";
import { Actions } from "../models/base";
import UserState from "../states/user";
import { SET_USER } from "./userActionTypes";

const initialState:UserState = {
    user: undefined,
  };
  
  const userReducer: any= (state = initialState, action:Actions<User>) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  