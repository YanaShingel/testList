import { combineReducers } from 'redux';
import getUsers from './getUsers';
import getTodos from './getTodos';

export default combineReducers({
  getUsers,
  getTodos,
});
