import React, { Component } from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import Moment from 'react-moment';

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
    const startAt = new Date(serviceBoardData.startAt);
    const endAt = new Date(serviceBoardData.endAt);
    console.log(serviceBoardData.startAt)
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
          <div className="writecontent">시작일</div>
          <Moment format="YYYY년MM월DD일 hh시mm분">{startAt}</Moment>
          <div className="writecontent">종료일</div>
          <Moment format="YYYY년MM월DD일 hh시mm분">{endAt}</Moment>
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