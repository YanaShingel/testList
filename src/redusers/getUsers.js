import { handleActions } from 'redux-actions';
import { getUsersRequest, getUsersSuccess, getUsersFailure, removeUser } from '../actions/getUsers';
import { combineReducers } from 'redux';

const isLoading = handleActions(
  {
    [getUsersRequest.toString()]: () => true,
    [getUsersSuccess.toString()]: () => false,
    [getUsersFailure.toString()]: () => false,
  },
  false
);

const users = handleActions(
  {
    [getUsersSuccess.toString()]: (state, action) => action.payload,
    [removeUser.toString()]: (state, action) => {
      const userId = action.payload.id;
      const userIndex = state.findIndex((user) => user.id === userId);
      if (userIndex === -1) {
        return state;
      } else {
        const newState = state.slice(0, userIndex).concat(state.slice(userIndex + 1));
        return newState;
      }
    },
  },
  []
);

const error = handleActions(
  {
    [getUsersFailure.toString()]: (state, action) => action.payload,
  },
  null
);

export default combineReducers({
  isLoading,
  users,
  error,
});
