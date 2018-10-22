import { handleActions } from 'redux-actions';
import { getTodosRequest, getTodosSuccess, getTodosFailure, removeTodo } from '../actions/getTodos';
import { combineReducers } from 'redux';

const isLoadingTodos = handleActions(
  {
    [getTodosRequest.toString()]: () => true,
    [getTodosSuccess.toString()]: () => false,
    [getTodosFailure.toString()]: () => false,
  },
  false
);

const todos = handleActions(
  {
    [getTodosSuccess.toString()]: (state, action) => action.payload,
    [removeTodo.toString()]: (state, action) => {
      const todoId = action.payload.id;
      const todoIndex = state.findIndex((user) => user.id === todoId);
      if (todoIndex === -1) {
        return state;
      } else {
        const newState = state.slice(0, todoIndex).concat(state.slice(todoIndex + 1));
        return newState;
      }
    },
  },
  []
);

const isErrorTodos = handleActions(
  {
    [getTodosFailure.toString()]: (state, action) => action.payload,
  },
  null
);

export default combineReducers({
  isLoadingTodos,
  todos,
  isErrorTodos,
});
