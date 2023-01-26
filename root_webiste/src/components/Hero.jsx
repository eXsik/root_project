import { sliderData } from "../constants";
import styles from "../style";
import Button from "./Button";

import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { AiOutlineArrowRight, AiOutlineMessage } from 'react-icons/ai';
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }
  
    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if(timeout.current) {
        clearTimeout(timeout.current);
      }
    }
  }, [current, length]);
  

  const nextSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if(!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} relative max-h-[1100px] h-[calc(100vh_-_98.95px)] bg-primary`}>

      {sliderData.map((slide, index) => (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center" key={`slide-${index}`}>
          {index === current && (
            <>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[2]`} >
                <div className="flex flex-row justify-between items-center w-full">
                  <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    {slide.title}
                  </h2>
                </div>

                <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                  {slide.paragraph}
                </p>

                <div className="flex mt-5 z-[2]">
                  <Button styles={'mt-4 mr-4 bg-transparent text-secondary hover:bg-secondary hover:text-primary'} text={`Więcej`} scrollTo={`${slide.scrollTo}`} icon={<AiOutlineArrowRight />} />
                  <Button styles={'mt-4 hover:bg-transparent hover:text-secondary'} text={'Kontakt'} scrollTo={'#contact'} icon={<AiOutlineMessage />} />
                </div>

              </div>
              <div className="z-[1]">
                <img className="absolute sm:right-[50px] xl:right-0 top-[75px] max-w-[749px] max-h-[490px] z-[1] object-cover" src={slide.image} alt={slide.alt} />
              </div>
            </>
          )}
        </div>
      ))}

      <div className="flex absolute bottom-[50px] right-[50px] xl:right-0 z-[2]">
        <IoArrowBack className="arrow_icons" onClick={prevSlide} />
        <IoArrowForward className="arrow_icons" onClick={nextSlide} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      </div>

    </section>
  )
};
;

export default Hero;
