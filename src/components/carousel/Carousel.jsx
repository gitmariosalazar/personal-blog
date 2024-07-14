import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = ({ images }) => {
  return (
    <div className="carousel">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        centerMode
        showThumbs={false}
        thumbWidth={25}
        swipeable={false}
      >
        {/* Utiliza un return explícito dentro del map para retornar cada elemento */}
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
