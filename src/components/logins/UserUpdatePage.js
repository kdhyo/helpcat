import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const USER_PASSWORD_UPDATE_MUTATION = gql`
  mutation UserPasswordUpdateMutation($oldPwd: String!, $newPwd: String!) {
    editPwd(oldPassword: $oldPwd, newPassword: $newPwd)
  }
`;

class UserUpdatePage extends Component {
  state = {
    oldPwd: "",
    newPwd: "",
  };
  render() {
    const { oldPwd, newPwd } = this.state;
    return (
      <>
        <div className="login">
          <div className="loginform">
            <div className="loginInput">
              <div className="loginID">
                현재 비밀번호 :
                <input
                  value={oldPwd}
                  onChange={(e) => this.setState({ oldPwd: e.target.value })}
                  type="text"
                />
              </div>
              <div className="loginPW">
                새로운 비밀번호 :
                <input
                  value={newPwd}
                  onChange={(e) => this.setState({ newPwd: e.target.value })}
                  type="password"
                />
              </div>
              <Mutation
                mutation={USER_PASSWORD_UPDATE_MUTATION}
                variables={{ oldPwd, newPwd }}
                onCompleted={() => this._confirm()}
              >
                {(mutation) => (
                  <button className="signButton" onClick={mutation}>
                    수정하기
                  </button>
                )}
              </Mutation>
            </div>
          </div>
        </div>
      </>
    );
  }

  _confirm = async () => {
      this.props.history.push(`/`)
  };
}

export default UserUpdatePage;
