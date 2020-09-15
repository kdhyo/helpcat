import React, { Component } from 'react'
import '../../css/reset.css';
import '../../css/main.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../../css/path.css';


const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

class Slider extends Component {
  render() {
    return (
      <>
      <div className="review">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <div className="slidetext">Slide 1</div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <div className="slidetext">Slide 2</div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <div className="slidetext">Slide 3</div>
            </div>
          </div>
        </Slide>
      </div>
      </>
    )
  }
};
  

export default Slider;