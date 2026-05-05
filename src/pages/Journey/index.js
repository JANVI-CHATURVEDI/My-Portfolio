import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import { FiArrowRight } from "react-icons/fi"; // Optional: for a nice arrow icon
import { meta } from "../../content_option";

const experiences = [
  {
    title: "Backend Developer Intern (Django)",
    company: "Ayursh",
    date: "Mar 2026 – Present",
    points: [
      "Designed, integrated, and tested API endpoints in a production environment, focusing on scalability and maintainability.",
      "Implemented dynamic filters and new features from scratch, translating complex requirements into functional, production-grade code.",
      "Diagnosed and resolved bugs across the application stack while collaborating via Git in a professional team workflow.",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "Zulip · CircuitVerse · wger · bugOpsX",
    date: "2025 – Present",
    points: [
      "Delivered 6+ open/merged pull requests across production-scale repositories, strengthening backend data integrity through model-level validations and access control.",
      "Resolved UI/UX defects including layout overflow issues, authentication flow refinements, and navigation enhancements.",
      "Successfully navigated structured code reviews during Hacktoberfest 2025 in open-source workflows.",
    ],
    // Add these fields
    internalLink: "/opensource", 
    linkText: "View my live PRs here"
  },
  {
    title: "UI/UX Contributor",
    company: "LearnAxis",
    date: "July 2025",
    points: [
      "Collaborated with a senior-led team to design UI/UX for a school/college management system.",
      "Improved usability by refining navigation flow, workflow clarity, and interface consistency.",
      "Received a Certificate of Recognition for design contribution and team collaboration."
    ],
  },
];

export const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
        </Helmet>
        <Row className="title mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Journey</h3>
          </Col>
          <Col lg="7">
            {experiences.map((data, i) => (
              <div className="experience_item py-4" key={i}>
                <div className="d-flex justify-content-between align-items-baseline">
                  <h5 className="exp_title">{data.title}</h5>
                  <span className="exp_date">{data.date}</span>
                </div>
                <h6 className="exp_company mb-3">{data.company}</h6>
                <ul className="exp_list">
                  {data.points.map((point, idx) => (
                    <li key={idx} className="exp_point">{point}</li>
                  ))}
                  
                  {/* Conditional Link Rendering */}
                  {data.internalLink && (
                    <li className="mt-3" style={{ listStyleType: 'none' }}>
                      <Link to={data.internalLink} className="view_pr_link">
                        {data.linkText} <FiArrowRight className="ms-1" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};