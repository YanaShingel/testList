import React, { Component } from 'react';
import styled from 'styled-components';
import User from '../User';
import Todo from '../Todo';
import { getUsersLoading, getUsersError, getUsers } from '../../selectors/getUsersSelectors';
import { getTodosLoading, getTodosError, getTodos } from '../../selectors/getTodosSelectors';
import { getUsersRequest } from '../../actions/getUsers';
import { getTodosRequest } from '../../actions/getTodos';
import { removeUser } from '../../actions/getUsers';
import { removeTodo } from '../../actions/getTodos';

import { connect } from 'react-redux';

class App extends Component {
  handleClickUsers = () => {
    const { getUsersRequest } = this.props;
    getUsersRequest('users');
  };

  handleClickTodos = () => {
    const { getTodosRequest } = this.props;
    getTodosRequest('todos');
  };

  updateUsers = (id) => {
    const { removeUser, users } = this.props;
    const removeId = users.findIndex((user) => user.id === id);
    const remove = users[removeId];
    removeUser(remove);
  };

  updateTodos = (id) => {
    const { removeTodo, todos } = this.props;
    const removeId = todos.findIndex((todo) => todo.id === id);
    const remove = todos[removeId];
    removeTodo(remove);
  };

  render () {
    const { users, isLoading, error, todos, isLoadingTodos, errorTodos } = this.props;
    if (isLoading || isLoadingTodos) {
      return <p>Выполняется поиск</p>;
    }
    if (error || errorTodos) {
      return <p>Произошла сетевая ошибка</p>;
    }
    return (
      <div className="App">
        <ContainerButton>
          <Button onClick={this.handleClickUsers}>Получить users</Button>
          <Button onClick={this.handleClickTodos}>Получить todos</Button>
        </ContainerButton>
        <UserList>
          {users.map((user, i) => <User key={user.id} {...user} update={this.updateUsers} />)}
        </UserList>
        <TodosList>
          {todos.map((todo, i) => <Todo key={todo.id} {...todo} update={this.updateTodos} />)}
        </TodosList>
      </div>
    );
  }
}

const Button = styled.button`margin: 0 10px;`;

const UserList = styled.div`
  position: absolute;
  top: 70px;
`;

const TodosList = styled.div`
  position: absolute;
  top: 70px;
  left: 405px;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  top: 30px;
  position: relative;
`;

const mapStateToProps = (state) => ({
  isLoading: getUsersLoading(state),
  users: getUsers(state),
  error: getUsersError(state),
  isLoadingTodos: getTodosLoading(state),
  errorTodos: getTodosError(state),
  todos: getTodos(state),
});

const mapDispatchToProps = {
  getUsersRequest,
  getTodosRequest,
  removeUser,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
