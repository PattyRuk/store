import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/banner.css'
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: 'https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg',
    title: 'Summer Collection drops tomorrow',
    subtitle: 'Get up to 40% off on all new season arrivals.',
    btnText: 'Shop New Arrivals'
  },
  {
    id: 2,
    image: 'https://t4.ftcdn.net/jpg/03/13/65/17/360_F_313651795_OUrd7HrFYuxo9LXuuREFvRyIPeEfVSLj.jpg',
    title: 'Elevate Your Daily Style Essentials',
    subtitle: 'Discover premium clothing designed for modern comfort.',
    btnText: 'Explore Collection'
  },
  {
    id: 3,
    image: 'https://img.magnific.com/premium-photo/photo-realistic-shopping-icon-with-copy-space-business-presentations-modern-design-retail_980716-271880.jpg?semt=ais_hybrid&w=740&q=80',
    title: 'Tech Gadgets & Accessoires',
    subtitle: 'Limited quantities available on audio and work gear.',
    btnText: 'View Clearance'
  }
];

export default function SlideBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const slideInterval = setInterval(() => {
      handleNext();
    }, 5000); // Transitions automatically every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SLIDES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === SLIDES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div 
      className="hero-banner-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Wrapper */}
      <div 
        className="banner-slider-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div 
            key={slide.id} 
            className="banner-slide-item"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }}
          >
            <div className="banner-slide-content">
              <h1 className="banner-slide-title">{slide.title}</h1>
              <p className="banner-slide-subtitle">{slide.subtitle}</p>
              <Link to="/gallery">
              <button className="banner-slide-action-btn">{slide.btnText}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button onClick={handlePrev} className="banner-nav-arrow arrow-left" aria-label="Previous Slide">
        <FaChevronLeft />
      </button>
      <button onClick={handleNext} className="banner-nav-arrow arrow-right" aria-label="Next Slide">
        <FaChevronRight />
      </button>

      {/* Position Indicators */}
      <div className="banner-dots-indicators">
        {SLIDES.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`banner-dot ${currentIndex === slideIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
