import React, {useEffect} from 'react';
import * as images from '../Assets/images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function OwlCarouselComponent() {

  return (
  <OwlCarousel
    className="owl-carousel owl-theme"
    id="mobile-element"
    items={1}
    loop={true}
    items={1}
    responsiveClass={true}
    margin={10}
    autoplay={true}
    autoplayTimeout={2500}
    autoplayHoverPause={true}
  >
    <div className="item" id="item1">
      <div className="upper-half ">
        <img id="slide1-pic1" src={images.slide1Pic1} alt=""/>
        <img id="slide1-pic2" src={images.slide1Pic2} alt=""/>
      </div>
      <div className="lower-half">
        <h1>ABC1</h1>
        <h2>This is some sample text for ABC1</h2>
        <h2>CASE STUDY -</h2>
        <button type="button" name="button">Coming Soon</button>
      </div>
    </div>
    <div className="item" id="item2">
      <div className="upper-half ">
        <img src={images.slide3Pic1} id="slide2-pic1"/>
        <img src={images.slide3Pic2} id="slide2-pic2"/>
        <img src={images.slide3Pic6} id="slide2-pic3"/>
        <img src={images.slide3Pic7} id="slide2-pic4"/>
        <img src={images.slide3Pic4} id="slide2-pic5"/>
        <img src={images.slide3Pic5} id="slide2-pic6"/>
        <img src={images.slide3Pic3} id="slide2-pic7"/>
      </div>
      <div className="lower-half">
        <h1>ABC2</h1>
        <h2>This is some sample text for ABC2</h2>
        <h2>View Case Study</h2>
        <button type="button" name="button"><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
    <div className="item" id="item3">
      <div className="upper-half ">
        <img src={images.slide3allPics} id="slide3-pic"/>
      </div>
      <div className="lower-half">
        <h1>ABC3</h1>
        <h2>This is some sample text for ABC3</h2>
        <h2>View Case Study</h2>
        <button type="button" name="button"><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
    <div className="item" id="item4">
      <div className="upper-half ">
        <img src={images.slide6Pic2} id="slide4-pic"/>
      </div>
      <div className="lower-half">
        <h1>ABC4</h1>
        <h2>This is some sample text for ABC4</h2>
        <h2>View Case Study</h2>
        <button type="button" name="button"><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
    <div className="item" id="item5">
      <div className="upper-half ">
        <img src={images.slide5allPics} id="slide5-pic"/>
      </div>
      <div className="lower-half">
        <img src={images.slide2Pic3} id="slide5-pic3"/>
        <h1>ABC5</h1>
        <h2>This is some sample text for ABC4</h2>
        <h2>View Case Study</h2>
        <button type="button" name="button"><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
    <div className="item" id="item6">
      <div className="upper-half ">
        <img src={images.slide6allPics} id="slide6-pic"/>
      </div>
      <div className="lower-half">
        <h1>ABC5</h1>
        <h2>This is some sample text for ABC4</h2>
        <h2>CASE STUDY -</h2>
        <button type="button" name="button">Coming Soon</button>
      </div>
    </div>
    <div className="item" id="item7">
      <div className="upper-half ">
        <img src={images.slide7allPics} id="slide7-pic"/>
      </div>
      <div className="lower-half">
        <img src={images.slide7Pic3} id="slide7-pic3"/>
        <h1>ABC5</h1>
        <h2>This is some sample text for ABC4</h2>
        <h2>CASE STUDY -</h2>
        <button type="button" name="button">Coming Soon</button>
      </div>
    </div>

  </OwlCarousel>)
}

export default OwlCarouselComponent
