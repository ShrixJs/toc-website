import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RandomImage from '../../../../common/RandomImage';

import './styles.css';
import SliderSkeleton from './components/SliderSkeleton';
import useFetchImages from '../../../../hooks/useFetchImages';

const sliderSettings = {
  dots: true,
  infinite: true,
  draggable: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  customPaging: () => <div className="custom-dot" />,
};

const Slideshow: FC = () => {
  const { images, isLoading, error } = useFetchImages({ width: 2500, height: 1667, count: 3 });

  return (
    <div className="slideshow-wrapper">
      {
        isLoading
          ? <SliderSkeleton />
          : (
            <div className="slider-container">
              <div className="title-overlay">
                <h1><FormattedMessage id="businessWebsite" /></h1>
              </div>
              <Slider {...sliderSettings}>
                {
                  images.map((link, i) => (
                    <RandomImage
                      key={link}
                      link={link}
                      className="slide"
                      alt={`slide number ${i}`}
                      hasError={error}
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
