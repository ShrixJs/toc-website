import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RandomImage from '../../../../common/RandomImage';

import './styles.css';

const SLIDES_CONFIG = [
  { width: '1200', height: '675', alt: 'Slide 1' },
  { width: '1400', height: '788', alt: 'Slide 2' },
  { width: '1600', height: '900', alt: 'Slide 3' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  draggable: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="custom-dot" />,
};

const Slideshow: FC = () => (
  <div className="slider-container">
    <div className="title-overlay">
      <h1>Business Website</h1>
    </div>
    <Slider {...sliderSettings}>
      {
        SLIDES_CONFIG.map((slide) => (
          <RandomImage
            className="slide"
            width={slide.width}
            height={slide.height}
            alt={slide.alt}
          />
        ))
      }
    </Slider>
  </div>
);

export default Slideshow;
