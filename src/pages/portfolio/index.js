import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="Portfolio-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio  </h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <h2>Projects that shaped my learning journey.</h2>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.slice(0, 3).map((data, i) => {
            return (
              <div key={i} className="po_item border-2 border-gray-300 ">
                <div className="relative">
                  <img src={data.img} alt="" />

                  {/* Tag badge if project is in progress */}
                  {data.status === "in-progress" && (
                    <span className="status-badge">In Progress</span>
                  )}
                </div>


                <div className="content ">

                  <p className="font-bold text-lg mb-0">{data.name}</p>
                  <p className="mb-2">{data.description}</p>

                  <p className="font-medium text-sm">Technologies used :</p>

                  <ul className="tags flex flex-wrap gap-2 mb-12">
                    {data.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="tag"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>



                  <div className="flex gap-2 justify-between absolute bottom-1 left-0 w-full px-4">
                    <a href={data.link} className="underline">Live</a>
                    <a href={data.github} className="underline" >Github</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link to="/portfolio" className="explore">
          Explore More
        </Link>

      </Container>
    </HelmetProvider>
  );
};

