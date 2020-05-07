import React, {Component} from 'react';
import Slider from 'react-slick';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import first from '../../assets/image1.jpg';
import second from '../../assets/image2.jpg';
import third from '../../assets/image3.jpg';
import fourth from '../../assets/image4.jpeg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div id="slider-container">
        <Slider {...settings}>
          <div>
            <img src={first} className="img_slick" alt="Imagem logo"/>
          </div>
          <div>
          <img src={second} className="img_slick" alt="Imagem logo"/>
          </div>
          <div>
          <img src={third} className="img_slick" alt="Imagem logo"/>
          </div>
          <div>
          <img src={fourth} className="img_slick" alt="Imagem logo"/>
          </div>

        </Slider>
      </div>
    );
  }
}