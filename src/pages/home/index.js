import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";
import { About } from "../about";
import { Experience } from "../Journey";
import Footer from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100  "
              style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-6">{introdata.description}</p>

                  <p className="mt-2 mb-6   items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Currently looking for{" "}
                    <span className="font-semibold text-[#9942ea]">
                      remote opportunities
                    </span>
                    . If you have an opportunity where I can add value, let’s
                    talk.
                  </p>

                  <div className="intro_btn-action pb-5">
                    <a
                      href="https://drive.google.com/file/d/1g0GwPBHDKujaJC139ezyFvS5kRWNYGq1/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div id="button_p" className="ac_btn btn ">
                        My Resume
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HelmetProvider>

      <div className=" sec ">
        <Experience />
      </div>

      <div className=" sec ">
        <Portfolio />
      </div>

      <div className=" sec ">
        <About />
      </div>

      <div className=" sec ">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
};
