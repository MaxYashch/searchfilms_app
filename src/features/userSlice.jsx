import { createSlice } from '@reduxjs/toolkit';
import { setUser, findUser } from '../utils/localStorageHelpers';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    user: null,
  },

  reducers: {
    signUp(state, action) {
      if (findUser(action.payload?.email)) {
        throw new Error('User is already created');
      } else {
        setUser(action.payload);
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
        state.user = user;
      }
    },

    signOut(state) {
      state.user = null;
    },
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
