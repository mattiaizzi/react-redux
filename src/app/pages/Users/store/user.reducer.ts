import { createReducer } from '@reduxjs/toolkit';
import User from 'src/app/model/user';
import { addUser, deleteUser, updateUser } from './users.actions';

export interface UserState {
  users: User[]
}

const initialState = {
  users: [{
    name: 'a',
    lastName: 'v',
    age: 1,
    id: 'asdasd',
  }],
} as UserState;

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => ({
      ...state,
      users: [...state.users, action.payload],
    }))
    .addCase(deleteUser, (state, action) => ({
      ...state,
      users: state.users.filter((user) => user.id !== action.payload.id),
    }))
    .addCase(updateUser, (state, action) => ({
      ...state,
      users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
    }));
});

export default userReducer;
