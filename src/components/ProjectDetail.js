import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ProjectDetail = () => {
  const { id } = useParams();
  
  // You can create an object with detailed information for each project
  const projectDetails = {
    'bverse': {
      title: "BVerse",
      fullDescription: "Detailed description of BVerse project...",
      technologies: ["Tech1", "Tech2", "Tech3"],
      challenges: "Description of challenges faced...",
      solutions: "How challenges were overcome...",
      outcomes: "Project outcomes and achievements..."
    },
    'healthcare-fraud': {
      title: "Healthcare Fraud Detection System",
      fullDescription: "Detailed description of Healthcare Fraud Detection System...",
      technologies: ["ML Algorithm", "Python", "TensorFlow"],
      challenges: "Description of challenges faced...",
      solutions: "How challenges were overcome...",
      outcomes: "Project outcomes and achievements..."
    },
    'brawler': {
      title: "Brawler Game",
      fullDescription: "Detailed description of Brawler Game...",
      technologies: ["Unity", "C#", "Game Design"],
      challenges: "Description of challenges faced...",
      solutions: "How challenges were overcome...",
      outcomes: "Project outcomes and achievements..."
    }
  };

  const project = projectDetails[id];

  return (
    <section className="project-detail">
      <Container>
        <Row>
          <Col>
            <h1>{project.title}</h1>
            <div className="project-content">
              <h3>Overview</h3>
              <p>{project.fullDescription}</p>
              
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              
              <h3>Challenges</h3>
              <p>{project.challenges}</p>
              
              <h3>Solutions</h3>
              <p>{project.solutions}</p>
              
              <h3>Outcomes</h3>
              <p>{project.outcomes}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};