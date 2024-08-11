// src/components/Gallery.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Gallery.css';
import arrowRightIcon from '../assets/arrow-right.svg';
import arrowLeftIcon from '../assets/arrow-left.svg';

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
    <div className={`gallery-content ${className}`} style={{ width }}>
      <div className="gallery-slider" style={{ height, borderRadius: radius }}>
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} className="gallery-image" style={{ borderRadius: radius, width: '100%', height: '100%' }} />
        <button className="gallery-arrow gallery-arrow-left" onClick={handlePrevClick} disabled={currentIndex === 0}>
          <img src={arrowLeftIcon} alt="Previous" />
        </button>
        <button className="gallery-arrow gallery-arrow-right" onClick={handleNextClick} disabled={currentIndex === images.length - 1}>
          <img src={arrowRightIcon} alt="Next" />
        </button>
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
