import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { userReducer, usersStoreName } from 'Pages';

const reducer = combineReducers({
  [usersStoreName]: userReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
