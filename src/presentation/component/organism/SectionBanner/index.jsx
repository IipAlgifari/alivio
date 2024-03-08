import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { initAnimation } from "core/util/animate/animate";

// Impor data yang diperlukan
import data from "./data";

const SectionBanner = () => {
  let settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false
  };
  // Ambil data banner pertama dari array data
  const bannerData = data[0];

    // --- onScroll
    useEffect(() => {
      initAnimation();
    }, []);

  return (
    <div className="banner">
      <div className="banner__item">
        <Slider {...settings}>
          {/* Gunakan gambar yang diberikan oleh data */}
          <div>
            <img src={bannerData.img1} alt={bannerData.subtitle} className="banner__img__el" data-aos="fade" data-aos-duration="2000"/>
          </div>

          <div>
            <img src={bannerData.img2} alt={bannerData.subtitle} className="banner__img__el"/>
          </div>
          <div>
            <img src={bannerData.img3} alt={bannerData.subtitle} className="banner__img__el"/>
          </div>
        </Slider>
        <div className="banner__text">
          <div className="container">
            <div className="banner__desc">
              <h1 className="banner__title" data-aos="fade-right" data-aos-duration="2000">{bannerData.title}</h1>
              <p className="banner__desc__desc" data-aos="fade-left" data-aos-duration="2000">Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
              {/* Gunakan "to" alih-alih "href" untuk react-router-dom */}
              <Link to="#" className="btn" data-aos-duration="2000">Find Your Way</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
