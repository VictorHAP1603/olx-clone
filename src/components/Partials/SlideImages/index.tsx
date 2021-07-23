import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Container } from "./style";

interface ISlideImagesProps {
  images: string[];
}

export default function SlideImages({ images }: ISlideImagesProps) {
  const [slideActive, setSlideActive] = useState(0);
  const controlsList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const setControlsActive = () => {
      const controls = controlsList.current?.querySelectorAll("li");

      if (controls) {
        controls.forEach((li) => {
          li.classList.remove("active");
        });

        controls[slideActive].classList.add("active");
      }
    };
    setControlsActive();
  }, [slideActive]);

  const changeSlideImage = (imgActive: number, e: React.FormEvent) => {
    setSlideActive(imgActive);
  };

  const setSlideLeft = () => {
    if (slideActive > 0) {
      setSlideActive(slideActive - 1);
    }
  };

  const setSlideRight = () => {
    if (slideActive < images.length - 1) {
      setSlideActive(slideActive + 1);
    }
  };

  return (
    <Container transformSlide={slideActive}>
      <div className="controls-buttons">
        <div onClick={setSlideLeft} className="left">
          <FaChevronLeft />
        </div>

        <div onClick={setSlideRight} className="right">
          <FaChevronRight />
        </div>
      </div>

      <div className="controls-list">
        <ul ref={controlsList}>
          {images.map((_, index) => (
            <li
              onClick={(e) => changeSlideImage(index, e)}
              key={index * Math.random()}
            ></li>
          ))}
        </ul>
      </div>

      <div className="slide-area">
        {images.map((src, index) => (
          <div key={index * Math.random()} className="img-item">
            <img
              key={index + Math.random()}
              src={src}
              alt="Imagem do produto"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
