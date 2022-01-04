import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sneackersImg1 from "../assets/imgs/sneakers/photo_1.jpg";
import sneackersImg2 from "../assets/imgs/sneakers/photo_2.jpg";
import sneackersImg3 from "../assets/imgs/sneakers/photo_3.jpg";
import sneackersImg4 from "../assets/imgs/sneakers/photo_4.jpg";
import sneackersImg5 from "../assets/imgs/sneakers/photo_5.jpg";
import CardItem from "./CardItem";

export default function Carousel({ sneakersData }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <CardItem imgSrc={sneackersImg1} />
        <CardItem imgSrc={sneackersImg2} />
        <CardItem imgSrc={sneackersImg3} />
        <CardItem imgSrc={sneackersImg4} />
        <CardItem imgSrc={sneackersImg5} />
      </Slider>
    </div>
  );
}
