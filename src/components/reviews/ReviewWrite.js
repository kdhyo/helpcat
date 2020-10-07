import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const REVIEW_WRITE_MUTATION = gql`
  mutation ReviewWriteMutation($serviceId: Int!, $rating: Int!, $review: String!) {
    addReview(serviceId: $serviceId, rating: $rating, review: $review) {
      id
      rating
      review
    }
  }
`;

const FINISH_SERVICE_BOARD_MUTATION = gql`
  mutation DeleteServiceBoardMutation($serviceId: Int!) {
    finishService(id: $serviceId)
  }
`;

class ReviewWrite extends Component {
  state = {
    rating: Number,
    review: "",
    reviewFinish: false,
  };
  setReviewFinish() {
    this.setState({
      reviewFinish: true,
    });
  }

  render() {
    const { rating, review } = this.state;
    const serviceId = Number(this.props.location.serviceBoardData.id);
    const serviceTitle = this.props.location.serviceBoardData.title;
    return (
      <>
        <div className="writeform5">
          <br></br><br></br><br></br>
          <div className="writetitle">제목
          <input
            value={serviceTitle}
            className="writetitleinput"
            readOnly
          ></input></div>
          
          <div className="writecontent">후기
          <textarea
            placeholder="후기를 입력해주세요"
            className="writecontentinput"
            onChange={(e) => this.setState({ review: e.target.value })}
          ></textarea></div>
          
          <div className="writecontent">평점
          <textarea
            placeholder="숫자로 입력해주세요"
            className="writecontentinput"
            onChange={(e) => this.setState({ rating: Number(e.target.value) })}
          ></textarea></div>
          
          {this.state.reviewFinish ? (
            <>
              <div className="center"><span className="colorblue">후기 작성이 완료되었습니다!</span></div>
              <Mutation
                mutation={FINISH_SERVICE_BOARD_MUTATION}
                variables={{ serviceId }}
              >
                {(mutation) => (
                <a href="/">
                  <button className="writereset5" onClick={mutation}>
                    심부름 완료
                  </button>
                </a>
                )}
              </Mutation>
            </>
          ) : (
            <>
              <Mutation
                mutation={REVIEW_WRITE_MUTATION}
                variables={{ serviceId, rating, review }}
                onCompleted={() => this._confirm()}
              >
                {(mutation) => (
                  <input
                    className="writereset5"
                    onClick={mutation}
                    readOnly
                    value="후기 작성"
                  ></input>
                )}
              </Mutation>
              <br></br>
              <button className="writereset6" onClick={this.reviewDontClear}>
                거래 완료
              </button>
            </>
          )}
        </div>
      </>
    );
  }
  reviewDontClear(){
    alert("리뷰를 먼저 작성해주세요!")
  }

  _confirm = async () => {
    this.setReviewFinish();
  };
}

export default ReviewWrite;
