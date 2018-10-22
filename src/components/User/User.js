import React, { PureComponent } from 'react';
import styled from 'styled-components';

class User extends PureComponent {
  delete = () => {
    this.props.update(this.props.id);
  };
  render () {
    const { name, username, email, address, phone, website, company, id } = this.props;
    return (
      <UserShow>
        <H3>
          <Label>Name: </Label>
          {name}
        </H3>
        <ul>
          <List>Id: {id}</List>
          <List>Name: {name}</List>
          <List>Username: {username}</List>
          <List>Email: {email}</List>
          <List>Phone: {phone} </List>
          <List>Website: {website} </List>
          <List>
            <label>Address:</label>
            <ul>
              <li>street: {address.street}</li>
              <li>suite: {address.suite}</li>
              <li>city: {address.city}</li>
              <li>zipcode: {address.zipcode}</li>
              <li>
                <label>Geo</label>
                <ul>
                  <li>lat: {address.geo.lat}</li>
                  <li>lat: {address.geo.lng}</li>
                </ul>
              </li>
            </ul>
          </List>
          <List>
            <label>Company:</label>
            <ul>
              <li>name: {address.name}</li>
              <li>catchPhrase: {address.catchPhrase}</li>
              <li>bs: {address.bs}</li>
            </ul>
          </List>
        </ul>
        <Button onClick={this.delete}>delete</Button>
      </UserShow>
    );
  }
}

const List = styled.li`text-align: left;`;

const UserShow = styled.div``;

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

export default User;
