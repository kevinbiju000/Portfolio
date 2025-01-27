import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

const skillLevels = {
  
  HTML : 90,
  CSS : 90,
  JavaScript: 85,
  Java : 80,
  Python : 75
  
};

export const Skills = () => {
  const [progress, setProgress] = useState({
    JavaScript: 0,
    HTML : 0,
    CSS : 0,
    Java : 0,
    Python : 5
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skillLevels);
    }, 500); // delay to trigger animation effect

    return () => clearTimeout(timer);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Leveraging a diverse skill set in Web Development, UI/UX Design, and Mobile App Development to create innovative, user-centric digital solutions.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {Object.keys(skillLevels).map((skill, index) => (
                  <div key={index} className="item">
                    <div className="meter">
                      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`gradient-${skill}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#AA367C" />
                            <stop offset="100%" stopColor="#4A2FBD" />
                          </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="90" stroke="#ddd" strokeWidth="15" fill="none" />
                        <circle
                          cx="100"
                          cy="100"
                          r="90"
                          stroke={`url(#gradient-${skill})`}
                          strokeWidth="15"
                          fill="none"
                          strokeDasharray="565"
                          strokeDashoffset={(1 - progress[skill] / 100) * 565}
                          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                        />
                        <text x="50%" y="50%" textAnchor="middle" stroke="#4A2FBD" strokeWidth="1px" dy=".3em" fontSize="30">{progress[skill]}%</text>
                      </svg>
                    </div>
                    <h5>{skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
