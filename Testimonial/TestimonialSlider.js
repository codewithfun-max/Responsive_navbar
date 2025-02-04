import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: "John Walker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lKnwSb1nKHZRUkxjPvmMxNHzMTvkjef9Tw&s",
    feedback: "This platform has made hiring incredibly easy. The interface is intuitive, and the candidates are top-notch. I was able to fill my open positions quickly and without hassle. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Adams",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtIx9PhkBZibxLS4sOQPaxWmWSjDeFhDssA&s",
    feedback: "I’ve been using this service for months now, and I couldn’t be more satisfied. The job posting process is straightforward, and the talent pool is fantastic. It’s the go-to platform for all my hiring needs.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Thompson",
    image: "https://s3.envato.com/files/470600562/6525b4d2138415723766e8fa_withmeta.jpg",
    feedback: "Finding the right talent has always been challenging, but with this platform, I’ve found great candidates in no time. It’s very user-friendly and effective, with plenty of filtering options to match candidates to the role.",
    rating: 5,
  },
  {id: 4,
    name: "Emily Davis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLmCgMvGHnZRHoKJv3jX0O0sTZGSmHvQi2w&s",
    feedback: "As a job seeker, this platform provided me with excellent opportunities. The application process was smooth, and I quickly found several jobs that matched my skills and experience. Truly a game-changer.",
    rating: 5,
  },
  {id: 5,
    name: "David Lee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOycyMCZFttfw7490IP6AOUPycSL7pLOmn3w&s",
    feedback: "Working with this platform has been fantastic. The talent I’ve hired is exceptional, and the user experience is top-tier. The ability to manage job listings and applicants from one dashboard is a huge time-saver.",
    rating: 4,
  },
  {id: 6,
    name: "Rachel Carter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrt4Y85IMpK7m1Gwj43dEnEmGiJMyvggfHEQ&s",
    feedback: "I used this site to find a freelance opportunity, and it was seamless. The process was clear, and the platform helped me connect with clients who valued my skills. It’s the best resource I’ve come across so far.",
    rating: 4,
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider-wrapper">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-card">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="testimonial-img"
            />
            <div className="testimonial-text">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].feedback}</p>
              <div className="rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                  <span key={index} className="star">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="prev" onClick={prevTestimonial}>
          &#10094;
        </button>
        <button className="next" onClick={nextTestimonial}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
