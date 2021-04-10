import { createAction } from '@reduxjs/toolkit';
import User from 'src/app/model/user';
import { ADD_USER, DELETE_USER, UPDATE_USER } from './constants';

export const addUser = createAction<User, typeof ADD_USER>(ADD_USER);
export const deleteUser = createAction<User, typeof DELETE_USER>(DELETE_USER);
export const updateUser = createAction<User, typeof UPDATE_USER>(UPDATE_USER);
