import { createSlice } from '@reduxjs/toolkit';
import {
  setUser,
  findUser,
  setSessionUser,
  getSessionUser,
} from '../utils/localStorageHelpers';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    user: getSessionUser(),
  },

  reducers: {
    signUp(state, action) {
      if (findUser(action.payload?.email)) {
        throw new Error('User is already created');
      } else {
        setUser(action.payload);
        setSessionUser(action.payload.email);
        state.user = action.payload;
      }
    },

    signIn(state, action) {
      let user = findUser(action.payload.email);
      if (!user) {
        throw new Error('User is not found');
      } else if (user.password !== action.payload.password) {
        throw new Error('Password is incorrect');
      } else {
        setSessionUser(action.payload.email);
        state.user = user;
      }
    },

    signOut(state) {
      setSessionUser(null);
      state.user = null;
    },
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
