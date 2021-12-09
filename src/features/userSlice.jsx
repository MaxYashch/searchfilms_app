import { createSlice } from '@reduxjs/toolkit';
import {
  setUser,
  findUser,
  setSessionUser,
  getSessionUser,
} from '../utils/localStorageHelpers';

export const userSlice = createSlice({
  name: 'user',

  initialState: getSessionUser(),

  reducers: {
    signUp(state, action) {
      if (findUser(action.payload?.email)) {
        throw new Error('User is already created');
      } else {
        const newUser = {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          favorites: [],
          history: [],
        };
        setUser(newUser);
        setSessionUser(newUser.email);
        return newUser;
      }
    },

    signIn(state, action) {
      let newUser = findUser(action.payload.email);
      if (!newUser) {
        throw new Error('User is not found');
      } else if (newUser.password !== action.payload.password) {
        throw new Error('Password is incorrect');
      } else {
        setSessionUser(action.payload.email);
        return newUser;
      }
    },

    signOut(state) {
      setSessionUser(null);
      return null;
    },

    favoritesAdd(state, action) {
      if (state.favorites.indexOf(action.payload.imdbID) < 0) {
        const newUser = {
          ...state,
          favorites: [...state.favorites, action.payload.imdbID],
        };
        setUser(newUser);
        return newUser;
      }
      return state;
    },

    favoritesRemove(state, action) {
      let index = state.favorites.indexOf(action.payload.imdbID);
      if (index >= 0) {
        const newUser = {
          ...state,
        };
        newUser.favorites = [...newUser.favorites];
        newUser.favorites.splice(index, 1);
        setUser(newUser);
        return newUser;
      }
      return state;
    },

    historyAdd(state, action) {
      if (state.history.indexOf(action.payload.imdbID) < 0) {
        const newUser = {
          ...state,
          history: [...state.history, action.payload.imdbID],
        };
        setUser(newUser);
        return newUser;
      }
      return state;
    },

    historyRemove(state, action) {
      let index = state.history.indexOf(action.payload.imdbID);
      if (index >= 0) {
        const newUser = {
          ...state,
        };
        newUser.history = [...newUser.history];
        newUser.history.splice(index, 1);
        setUser(newUser);
        return newUser;
      }
      return state;
    },

    historyClear(state, action) {
      const newUser = {
        ...state,
        history: [],
      };
      setUser(newUser);
      return newUser;
    },
  },
});

export const {
  signUp,
  signIn,
  signOut,
  favoritesAdd,
  favoritesRemove,
  historyAdd,
  historyRemove,
  historyClear,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
