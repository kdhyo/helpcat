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
            <div style={{ backgroundImage: `url(${slideImages[i]})` }}>
              <div className="slidetext">
                게시자: {review.rating_reqUser.nickName}
                제목: {review.service.title}
                후기: {review.review}
                <span> 평점: {review.rating}</span>
              </div>
            </div>
          </div>
        );
      } else {
      }
    };

    return (
      <>
        <Query query={REVIEW_ALL_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <></>;
            if (error) {
              return <></>;
            }
            if (data) {
              return (
                <div className="review">
                  <Slide easing="ease">
                    {data.seeReviews.map((review, i) => {
                      return <>{mapToComponent(review, i)}</>;
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