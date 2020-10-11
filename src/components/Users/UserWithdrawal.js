import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { AUTH_TOKEN } from '../../constants'

const USER_DELETE_MUTATION = gql`
  mutation {
    removeUser
  }
`;

class UserWithdrawal extends Component {
  render() {
    return (
      <>
        <h2>회원 탈퇴</h2>
        <Mutation
          mutation={USER_DELETE_MUTATION}
          onCompleted={(data) => this._userDelete(data)}
        >
          {(mutation) => (
            <button className="pwdEditbutton" onClick={mutation}>
              회원 탈퇴하기
            </button>
          )}
        </Mutation>
      </>
    );
  }
  _userDelete = async data => {
    localStorage.removeItem(AUTH_TOKEN);
    window.location="/"
  };
}

export default UserWithdrawal;
