import React from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { initAnimation } from "core/util/animate/animate";


const SectionVideo = () => {
  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="video">
      <div className="container">
        <div className="video__img" data-aos="fade-left" data-aos-duration="2000">
          <img className="video__img__el" src="asset/images/dummy/video.jpg" alt="video"/>
        </div>
        <div className="video__txt">
          <h3 className="video__title" data-aos="fade-right" data-aos-duration="1700">Let's hear about Kayla's success story</h3>
          <p className="video__desc" data-aos="fade-right" data-aos-duration="1800">See how well Alivio works in a real customer’s life.</p>
          <Link href="#" className="btn" data-aos="fade-up" data-aos-duration="2000">Let’s get started</Link>
        </div>
      </div>
    </div>
  )
}

export default SectionVideo
