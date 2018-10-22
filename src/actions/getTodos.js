import { createActions } from 'redux-actions';

const { getTodosRequest, getTodosSuccess, getTodosFailure, removeTodo } = createActions(
  'GET_TODOS_REQUEST',
  'GET_TODOS_SUCCESS',
  'GET_TODOS_FAILURE',
  'REMOVE_TODO'
);

export { getTodosRequest, getTodosSuccess, getTodosFailure, removeTodo };
