import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const BOARD_UPDATE = gql`
  mutation BoardUpdate(
    $id : Int!
    $title: String!
    $contents: String!
    $price: Int
    $address: String
    $startAt: DateTime
    $endAt: DateTime
  ) {
    editService(
      id: $id
      title: $title
      contents: $contents
      price: $price
      address: $address
      startAt: $startAt
      endAt: $endAt
    )
  }
`;

class BoardUpdate extends Component {
  state = {
    title: "",
    contents: "",
    price: Number,
    address: "",
    startAt: Date,
    endAt: Date,
  };

  render() {
    const beforeData = this.props.location.serviceBoardData;
    console.log(beforeData)
    const { title, contents, price, address, startAt, endAt } = this.state;
    const id = Number(beforeData.id)
    console.log(id)
    return (
      <>
        <div className="writeform">
          <div className="writetitle">제목</div>
          <input
            className="writetitleinput"
            placeholder={beforeData.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          ></input>
          <div className="writecontent">내용</div>
          <textarea
            className="writecontentinput"
            placeholder={beforeData.contents}
            onChange={(e) => this.setState({ contents: e.target.value })}
          ></textarea>
          <div className="writecontent">가격</div>
          <input
            className="writetitleinput"
            placeholder={beforeData.price}
            onChange={(e) => this.setState({ price: Number(e.target.value) })}
          ></input>
          <div className="writecontent">주소</div>
          <input
            className="writetitleinput"
            placeholder={beforeData.address}
            onChange={(e) => this.setState({ address: e.target.value })}
          ></input>
          <form className="writeday" action="" method="">
            기간<br></br>
            <input
              className="startday"
              type="datetime-local"
              onChange={(e) => this.setState({ startAt: Date(e.target.value) })}
            ></input>
            <p>부터</p>
            <input
              className="endday"
              type="datetime-local"
              onChange={(e) => this.setState({ endAt: Date(e.target.value) })}
            ></input>
            <p>&nbsp;&nbsp;&nbsp;까지</p>
          </form>
          <form>
          <a href="/board">
            <Mutation
              mutation={BOARD_UPDATE}
              variables={{ id, title, contents, price, address}}
            >
              {(mutation) => (
                <input
                  className="writesubmit"
                  onClick={mutation}
                  value="제출"
                  readOnly
                >
                </input>
              )}
            </Mutation>
            </a>
            <input className="writereset" type="reset"></input>
          </form>
        </div>
      </>
    );
  }

}

export default BoardUpdate;
