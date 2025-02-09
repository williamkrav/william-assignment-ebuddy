import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
