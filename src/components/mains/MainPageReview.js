import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg",
];

const REVIEW_ALL_QUERY = gql`
  query {
    seeReviews(orderBy: desc) {
      id
      rating_reqUser {
        nickName
      }
      rating
      review
      service {
        title
      }
    }
  }
`;

class MainPageReview extends Component {
  render() {
    const mapToComponent = (review, i) => {
      if (i < 5) {
        console.log(review, " 나오는 곳");
        return (
          <div className="each-slide">
              <div className="slidetext">
                <div className="sliderr">
                <span className="colorblue3">{review.review}</span>
                <div style={{ backgroundImage: `url(${slideImages[i]})` }}>
                  <br></br>
                <span className="colorblue4">의뢰인</span> {review.rating_reqUser.nickName}&nbsp;&nbsp;&nbsp;
                <span className="colorblue4">평점</span> {review.rating}점
                </div>
              </div>
            </div>
          </div>
      );
    };

    return (
      <>
        <Query query={REVIEW_ALL_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <></>;
            if (error) {
              return <></>;
            }
            console.log(data)
            if (data) {
              return (
                <div className="review">
                  <Slide easing="ease">
                    {data.seeReviews.map((review, i) => {
                      if(i<5){
                        return mapToComponent(review, i);
                      }
                    })}
                  </Slide>
                </div>
              );
            }
          }}
        </Query>
      </>
    );
  }
}

export default MainPageReview;