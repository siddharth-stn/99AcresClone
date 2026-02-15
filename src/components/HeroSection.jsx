import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroImage from "../assets/images/hero.webp";


const placeholderTexts = ['Search "Ats Pristine"', 'Search "New Projects in Noida"', 'Search "Sector 150 Noida"', 'Search "3 BHK Flats in Noida"'];

export default function HeroSection() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === placeholderTexts.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <figure className="hero w-full overflow-hidden h-55">
        <img
          src={heroImage}
          alt="hero"
          className="h-full object-cover w-full"
        />
      </figure>
      <div
        className="focus-within:shadow-blue-300 -mt-5.5 bg-white relative shadow-xl shadow-gray-300 m-auto w-[90%] border border-blue-400 rounded-md px-8 py-3.5 text-[14px]"
      >
        <div className="absolute left-2">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div className="absolute right-2">
          <FontAwesomeIcon icon="fa-solid fa-microphone" />
        </div>
        <input
          id="search-input"
          type="text"
          placeholder={placeholderTexts[currentIndex]}
          className="placeholder-[rgba(1,12,31,1.00)] outline-none w-full"
        />
      </div>
    </section>
  )
}
