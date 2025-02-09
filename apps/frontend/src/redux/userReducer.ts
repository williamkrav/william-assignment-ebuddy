import { User } from "@monorepo/entities";
import { Actions } from "../models/base";
import UserState from "../states/user";
import { UPDATE_USER,SET_USERS } from "./userActionTypes";

const initialState:UserState = {
    users: undefined,
  };
  
  const userReducer: any= (state = initialState, action:Actions<User>) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          users: state.users?.map(e=>{
            if(e.id!=action.payload.id){
              return action.payload;
            }
            return e
          }),
        };
      case SET_USERS:
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  