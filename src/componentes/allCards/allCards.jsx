import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../card/card';

export default function Cards() {
  const cities = useSelector(state => state.cities);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="api m-5">
      <Slider {...settings}>
        {cities.map(c => (
          <div className="carta">
            <Card
              key={c.id}
              id={c.id}
              max={c.max - 273}
              min={c.min - 273}
              temp={c.temp - 273}
              humidity={c.humidity}
              name={c.name}
              img={c.img}
              weather={c.weather}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
