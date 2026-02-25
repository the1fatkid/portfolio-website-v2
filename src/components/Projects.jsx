import { useState, useRef, useEffect } from 'react';
import projects from '../data/projects'
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const trackRef = useRef(null);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 700) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setCurrentIndex(0); // Reset to start when screen size changes
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);


   // Calculate translation based on card width
  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.querySelector('.project-card');
    if (!card) return 0;
    
    const cardWidth = card.offsetWidth;
    const gap = 20; // Match your CSS gap
    return -(currentIndex * (cardWidth + gap));
  };

  return (
    <div className="projects container" id="projects">
      <h2>-PROJECTS-</h2>

      <div className="carousel-wrapper">
        {/* Prev Button */}
        <button
          className="carousel-btn prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <MdKeyboardArrowLeft/>
        </button>

        {/* Carousel */}
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(${getTranslateX()}px)`
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <a href={project.url} target='_blank'> <FaExternalLinkAlt /></a>
                </div>
                <p>{project.description}</p>

                <h4>Technologies used:</h4>
                <div className="technologies">
                  {
                    project.techStack.map((tech, index) => (
                      <span key={index} className="tech-pill">{tech}</span>
                    ))
                  }
                </div>

              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <button
          className="carousel-btn next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
           <MdKeyboardArrowRight/>
        </button>
      </div>
    </div>
  );
}