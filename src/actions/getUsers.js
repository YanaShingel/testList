import { createActions } from 'redux-actions';

const { getUsersRequest, getUsersSuccess, getUsersFailure, removeUser } = createActions(
  'GET_USERS_REQUEST',
  'GET_USERS_SUCCESS',
  'GET_USERS_FAILURE',
  'REMOVE_USER'
);

export { getUsersRequest, getUsersSuccess, getUsersFailure, removeUser };
