import React, { useEffect, useRef } from "react";
import { AD_FEATURES } from "../../constants/ad";
import AdCard from "../atoms/AdCard";

const AdCarousel = () => {
  const carouselRef = useRef();

  // 👉 Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;

      // scroll by one card width
      container.scrollBy({
        left: 240,
        behavior: "smooth"
      });

      // loop back to start
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 👉 Manual Controls
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 240, behavior: "smooth" });
  };

  return (
    <div className="ad-carousel-wrapper">
      
      {/* LEFT BUTTON */}
      <button className="nav-btn left" onClick={scrollLeft}>
        ◀
      </button>

      {/* CAROUSEL */}
      <div className="ad-carousel" ref={carouselRef}>
        {AD_FEATURES.map((item, index) => (
          <AdCard key={index} {...item} />
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button className="nav-btn right" onClick={scrollRight}>
        ▶
      </button>

    </div>
  );
};

export default AdCarousel;