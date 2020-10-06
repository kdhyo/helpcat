import React, { Component } from "react"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

const slideImages = [
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg"
];

class MainPageReview extends Component {
  render() {
    return (
      <>
      <div className="review">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{"backgroundImage": `url(${slideImages[0]})`}}>
            <div className="slidetext">슬라이더 <span>1</span></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{"backgroundImage": `url(${slideImages[1]})`}}>
              <div className="slidetext">슬라이더 <span>2</span></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{"backgroundImage": `url(${slideImages[2]})`}}>
            <div className="slidetext">슬라이더 <span>3</span></div>
            </div>
          </div>
        </Slide>
      </div>
      </>
    )
  }
};

export default MainPageReview;