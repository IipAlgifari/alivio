import React from 'react'
import { useEffect } from "react";

import { initAnimation } from "core/util/animate/animate";


const SectionWorks = () => {
  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="works">
      <div className="container">
        <div className="works__left" data-aos="fade-right" data-aos-duration="2000">
          <h5 className="works__sub__title">how it works</h5>
          <h3 className="works__title">Understand & Release the stress in 3 steps</h3>
        </div>
        <div className="works__right" data-aos="fade-left" data-aos-duration="2000">
          <p className="works__desc">Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionWorks
