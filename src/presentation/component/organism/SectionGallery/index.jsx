import React from 'react'
import { useEffect } from "react";

import { initAnimation } from "core/util/animate/animate";
import dataGallery from "./dataGallery";


const SectionGallery = () => {

  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__list">
          {dataGallery.map((item) => (
            <div className="gallery__item" key={item.id} data-aos="fade-up" data-aos-duration="2000">
              <div className="gallery__txt">
                <h3 className="gallery__title"><span>{item.title}</span></h3>
                <p className="gallery__desc">{item.description}</p>
                <img src={item.img} alt={item.title}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionGallery
