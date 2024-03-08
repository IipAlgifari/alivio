import React from 'react'
import { useEffect } from "react";

import { initAnimation } from "core/util/animate/animate";


const SectionGallery = () => {
  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__list">
          <div className="gallery__item" data-aos="fade-up" data-aos-duration="2000">
            <div className="gallery__txt">
              <h3 className="gallery__title"><span>Personalize</span></h3>
              <p className="gallery__desc">Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!</p>
              <img src="asset/images/dummy/gallery-1.jpg" alt="gallery1"/>
            </div>
          </div>
          <div className="gallery__item" data-aos="fade-up" data-aos-duration="2000">
            <div className="gallery__txt">
              <h3 className="gallery__title"><span>Write & Understand</span></h3>
              <p className="gallery__desc">Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</p>
              <img src="asset/images/dummy/gallery-2.jpg" alt="gallery2"/>
            </div>
          </div>
          <div className="gallery__item" data-aos="fade-up" data-aos-duration="2000">
            <div className="gallery__txt">
              <h3 className="gallery__title"><span>Alivio!</span></h3>
              <p className="gallery__desc">Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!</p>
              <img src="asset/images/dummy/gallery-3.jpg" alt="gallery3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionGallery
