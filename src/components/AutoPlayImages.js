import React from 'react'
import LadyImg from "../img/lady_shopping4.webp";
import MaleImg from "../img/male_shopping.webp";
import ChildImg from "../img/male_shopping1.webp";
import LadyTwoImg from "../img/lady_shopping2.webp";
import LadyThreeImg from "../img/lady_shopping3.webp";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../styles/autoplayImages.css"


const AutoPlayImages = () => {
 const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img className="" src={LadyImg} alt="lady shopping" />
        </div>
        <div className="embla__slide">
          <img className="" src={MaleImg} alt="lady shopping" />
        </div>
        <div className="embla__slide">
          <img className="" src={ChildImg} alt="lady shopping" />
        </div>
        <div className="embla__slide">
          <img className="" src={LadyTwoImg} alt="lady shopping" />
        </div>
        <div className="embla__slide">
          <img className="" src={LadyThreeImg} alt="lady shopping" />
        </div>
      </div>
    </div>
  );
}

export default AutoPlayImages