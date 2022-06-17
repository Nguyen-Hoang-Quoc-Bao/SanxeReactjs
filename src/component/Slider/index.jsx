import React, { useEffect, useRef } from "react";
import ImgSlider1 from "../../img/logo2.png";
import ImgSlider2 from "../../img/winnerxx.jpg";
import ImgSlider3 from "../../img/ab1.jpg";
import ImgSlider4 from "../../img/r15-chinh.jpg";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const arrSlider = [ImgSlider1, ImgSlider2, ImgSlider3, ImgSlider4];
  const [count, setCount] = useState(0);
  const timeOut = useRef();

  useEffect(() => {
     timeOut.current = setTimeout(() => {
      if (count < arrSlider.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 5000);
  }, [count]);

  const handleLeft = () => {
    if(count <= arrSlider.length-1 && count >0){
      setCount( count -1) 
      clearTimeout(timeOut.current)
    }else{
      setCount(arrSlider.length-1)
      clearTimeout(timeOut.current)
    }
  }
  const handleRight = () => {
    if(count < arrSlider.length-1){
      setCount( count + 1)
      clearTimeout(timeOut.current)
    }else{
      setCount(arrSlider.length-4)
      clearTimeout(timeOut.current)
    }
}

const onClickRadio = (index) => {
  setCount(index)
  clearTimeout(timeOut.current)
}

  return (
    <div className="slider">
      {arrSlider.map((item, index) => ( 
          <img key={index}
            src={item}
            alt=""
            className={`${count === index ? "active" : "" }`} 
          />
      ))}
      <div className="btn-left-right">
        <IoIosArrowBack className="btn-slider" onClick={() => handleLeft() } />
        <IoIosArrowForward className="btn-slider" onClick={() => handleRight() } />
      </div>
      <div className="radio-btn">
           {arrSlider.map((item, index) =>
           <span key={index} className={`radio ${count === index ? "active-1" : "" }`} onClick={() => onClickRadio(index)}></span>
           )}
        </div>
    </div>
  );
};

export default Slider;
