import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bv3.jpg";
import projImg2 from "../assets/img/hc1.png";
import projImg3 from "../assets/img/br1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BVerse",
      description: "Simulation",
      imgUrl: projImg1,
    },
    {
      title: "Healthcare Fraud Detection System",
      description: "Machine Learning",
      imgUrl: projImg2,
    },
    {
      title: "Brawler Game",
      description: "Gaming",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here’s a showcase of my journey through diverse and innovative projects. 
                  Each of these reflects my passion for technology and creativity, 
                  from immersive simulations to cutting-edge machine learning solutions and engaging game design. 
                  Dive in to explore the skills, dedication, and problem-solving mindset that I bring to every project!</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
