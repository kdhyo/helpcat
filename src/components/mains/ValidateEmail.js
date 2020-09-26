import React, { Component } from "react";
import { AUTH_TOKEN } from "../../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const EMAIL_CHECK_MUTATION = gql`
  mutation EmailCheckMutation($validateEmailToken: String!) {
    validateEmail(validateEmailToken: $validateEmailToken) {
      token
      user{
        id
        email
      }
    }
  }
  `;

class ValidateEmail extends Component {
  state = {
    validateEmailToken: "",
  };

  getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(window.location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const validateEmailToken = this.getParameterByName("validateEmailToken")
    return (
      <>              <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>성공적으로 인증 되었습니다.!</div>
        <Mutation
          mutation={EMAIL_CHECK_MUTATION}
          variables={{validateEmailToken }}
          onCompleted={(data) => this._confirm(data)}
        >
          {(mutation) => (
            <button className="signButton" onClick={mutation}>
              <br></br>
              확인
            </button>
          )}
        </Mutation>
      </>
    );
  }

  _confirm = async data => {
    const token = data.validateEmail.token
    console.log(token)
      this._saveUserData(token)
      this.props.history.push(`/`)
  };

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default ValidateEmail;