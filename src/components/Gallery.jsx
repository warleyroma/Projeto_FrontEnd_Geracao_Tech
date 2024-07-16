// src/components/Gallery.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      <div className="gallery-slider" style={{ borderRadius: radius }}>
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} className="gallery-image" />
        {currentIndex > 0 && (
          <button className="gallery-arrow gallery-arrow-left" onClick={handlePrevClick}>
            <img src={arrowLeftIcon} alt="Previous" />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button className="gallery-arrow gallery-arrow-right" onClick={handleNextClick}>
            <img src={arrowRightIcon} alt="Next" />
          </button>
        )}
      </div>
      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index}`}
              className={`gallery-thumbnail ${currentIndex === index ? 'active' : ''}`}
              style={{ width: '117px', height: '95px', borderRadius: radius }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Gallery;
