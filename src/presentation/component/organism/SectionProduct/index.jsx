import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAnimation } from 'core/util/animate/animate';
import productData from './productData'; // Impor data produk

const SectionProduct = () => {
  // --- onScroll
  useEffect(() => {
    initAnimation();
  }, []);

  return (
    <div className="product">
      <div className="container">
        <div className="product__txt" data-aos="fade-left" data-aos-duration="2300">
          <h6 className="product__subtitle">{productData.subtitle}</h6>
          <h3 className="product__title">{productData.title}</h3>
          <p className="product__desc">{productData.description}</p>
          <Link to="#" className="btn">{productData.buttonText}</Link>
        </div>
        <div className="product__wrapper">
          <div className="product__img" >
            <img className="product__img__el" src={productData.thumbnail.imgSrc} data-aos="fade-up" data-aos-duration="1700" alt={productData.thumbnail.altText} />
          </div>
          <div className="product__thumbnail" data-aos="fade-up-right" data-aos-duration="18000">
            <h4 className="thumbnail-title">{productData.thumbnail.title}</h4>
            <img className="thumbnail-img" src={productData.thumbnail.imgSrc} alt={productData.thumbnail.altText} />
            <h5 className="thumbnail-name">{productData.thumbnail.name}</h5>
            <div>
              <h3 className="thumbnail-subtitle">{productData.thumbnail.subtitle}</h3>
              <ul className="thumbnail-list">
                {productData.thumbnail.list.map((item, index) => (
                  <li key={index} className="thumbnail-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProduct;