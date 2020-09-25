import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

const DELETE_SERVICE_BOARD = gql`
  mutation DeleteServiceBoard($id: Int!){
    serviceDelete(id:$id)
  }
`;

class BoardDetail extends Component {

  back(){
    window.history.go(-1)
  }

  render() {
    const serviceBoardData = this.props.location.serviceBoardData;
    const id = Number(serviceBoardData.id)
    return (
      <>
        <div className="writeform">
          <div className="writetitle">제목</div>
          <input
            className="writetitleinput" value={serviceBoardData.title} readOnly
          ></input>
          <div className="writecontent">내용</div>
          <textarea
            className="writecontentinput" value={serviceBoardData.contents} readOnly
          ></textarea>
          <div className="writecontent">가격</div>
          <input
            className="writetitleinput" value={serviceBoardData.price} readOnly
          ></input>
          <div className="writecontent">주소</div>
          <input
            className="writetitleinput" value={serviceBoardData.address} readOnly
          ></input>
          <form className="writeday" action="" method="">
            기간<br></br>
            <input
              value="2020-09-20T11:14"
              className="startday"
              type="datetime-local"
              readOnly
            >
            </input>
            <p>부터</p>
            <input
              value="2020-09-30T23:31"
              className="endday"
              type="datetime-local"
              readOnly
            ></input>
            <p>&nbsp;&nbsp;&nbsp;까지</p>
          </form>
          <a href="/board">
            <input className="writereset" type="reset" value="뒤로가기" readOnly></input>
          </a>
          <a href="/board">
            <Mutation
              mutation={DELETE_SERVICE_BOARD}
              variables={{id}}
            >
              {(mutation) => (
                <button className="writereset" onClick={mutation}>
                  삭제하기
                </button>
              )}
            </Mutation>
          </a>
          <Link to={{
            pathname: `/board/update/${serviceBoardData.id}`,
            serviceBoardData: serviceBoardData
          }}>
            <input className="writereset" type="reset" value="수정하기" readOnly></input>
          </Link>
        </div>
      </>
    );
  }

}

export default BoardDetail;