import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from '../constants'

class AllLink extends Component {
  render() {
    console.log(this.props.history)
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">

        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Hacker News</div>
          <Link to="/link" className="ml1 no-underline black">
            new
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline black">
                submit
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push(`/link`);
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/logintest" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>

      </div>
    );
  }
}

export default withRouter(AllLink);
