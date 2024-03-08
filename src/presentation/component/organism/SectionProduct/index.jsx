import React from 'react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { initAnimation } from "core/util/animate/animate";


const SectionProduct = () => {
  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="product">
      <div className="container">
        <div className="product__txt" data-aos="fade-left" data-aos-duration="2300">
          <h6 className="product__subtitle">our product</h6>
          <h3 className="product__title">You tell us your stress, We make your diary</h3>
          <p className="product__desc">Everyone experiences it, and in different ways.<br/>Let Alivio guide
           you, in a personalized journal experience, to overcome your stress.</p>
          <Link href="#" className="btn">Find Your Way</Link>
        </div>
        <div className="product__wrapper">
          <div className="product__img" >
            <img className="product__img__el" src="asset/images/dummy/Image1.jpg" data-aos="fade-up" data-aos-duration="1700" alt="image"/>
          </div>
          <div className="product__thumbnail" data-aos="fade-up-right" data-aos-duration="18000">
            <h4 className="thumbnail-title">Customized For</h4>
            <img className="thumbnail-img" src="asset/images/dummy/Image1.jpg" alt="image"/>
            <h5 className="thumbnail-name">Mikayla</h5>
            <div>
              <h3 className="thumbnail-subtitle">Your custom contents</h3>
              <ul className="thumbnail-list">
                <li className="thumbnail-list-item">Understand Your Stress</li>
                <li className="thumbnail-list-item">Ang er Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProduct
