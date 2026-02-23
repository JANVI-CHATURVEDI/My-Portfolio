import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, skills, services } from "../../content_option";
import homeimg from "../../assets/images/profile.jpg";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-between ">
          <Col lg="8">
           
            <h1 className="display-4 mb-4">About</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <img
              src={homeimg}
              alt="About Me"
              className="img-fluid "
              style={{ maxWidth: "150px", maxHeight: "150px" }} 
            />
          </div>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 ">About Me</h3>
            
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="about-text mb-2">
                I am a <strong>full-stack developer</strong> with expertise in
                Python, Django, React, and modern CSS frameworks like Tailwind
                and Bootstrap. I design and develop end-to-end web applications
                — from intuitive UIs to robust backends and databases. I thrive
                on solving real-world problems, continuously improving my
                skills, and building scalable digital products with clean
                architecture and responsive design.
              </p>

              <p className="about-text">
                Outside of tech, I am a sports enthusiast who has won medals in Kho-Kho, and I enjoy listening to music and playing guitar in my free time. I am a lifelong learner , which keeps me inspired and creative.
              </p>
            </div>
          </Col>
        </Row>

        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              {dataabout.aboutme.map((line, index) => (
                <p key={index} style={{ marginBottom: "1rem" }} >{line}</p>
              ))}

            </div>
          </Col>
        </Row> */}

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <div
              className="skills-icons "
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "40px",
              }}
            >
              {skills.map((data, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {data.icon}
                  <span style={{ marginTop: "8px", fontSize: "14px" }}>
                    {data.name}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec pt-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ pt-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
