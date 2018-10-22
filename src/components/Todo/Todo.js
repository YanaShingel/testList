import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Todo extends PureComponent {
  delete = () => {
    this.props.update(this.props.id);
  };
  render () {
    const { id, userId, title, completed } = this.props;
    return (
      <TodoShow>
        <H3>
          <Label>Title:</Label> {title}
        </H3>
        <ul>
          <List>Id: {id}</List>
          <List>UserId: {userId}</List>
          <List>Completed: {completed} </List>
        </ul>
        <Button onClick={this.delete}>delete</Button>
      </TodoShow>
    );
  }
}

const List = styled.li`text-align: left;`;

const TodoShow = styled.div``;

const H3 = styled.h3`
  text-align: left;
  position: relative;
  margin-left: 23px;
`;

const Button = styled.button`
  position: relative;
  left: 22px;
`;

const Label = styled.label`font-weight: normal;`;

export default Todo;
