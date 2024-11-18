import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RandomImage from '../../../../common/RandomImage';

import './styles.css';
import useImage from '../../../../hooks/useImage';
import SliderSkeleton from './components/SliderSkeleton';

const sliderSettings = {
  dots: true,
  infinite: true,
  draggable: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="custom-dot" />,
};

const Slideshow: FC = () => {
  const page = Math.floor(Math.random() * 34) + 1;
  const { resources, hasError, isLoading } = useImage({ type: 'list', page, limit: 3 });

  return (
    <div className="slideshow-wrapper">
      {
        isLoading
          ? <SliderSkeleton />
          : (
            <div className="slider-container">
              <div className="title-overlay">
                <h1>Business Website</h1>
              </div>
              <Slider {...sliderSettings}>
                {
                  resources?.map((link, i) => (
                    <RandomImage
                      key={link}
                      link={link}
                      className="slide"
                      alt={`slide number ${i}`}
                      hasError={hasError}
                    />
                  ))
                }
              </Slider>
            </div>
          )
        }
    </div>
  );
};

export default Slideshow;
