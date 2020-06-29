import React from "react";
import Title from "../components/Title";
import petersPix from "../images/peter-nh.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-center">
        <Title title="about" />
        <div className="about-me">
          <div className="about-img-div">
            <div className="about-img-container">
              <img
                src={petersPix}
                // width="300px"
                // height="350px"
                alt="peter ihimire"
                className="about-pix"
              />
            </div>
          </div>
          <div className="about-text-div">
            <p>
              Based in Nigeria, I am a seasoned front-end web developer,
              passionate about building excellent softwares that make a
              difference. I specialize in creating unique, market-centric
              websites and applications that put my clients above their
              competitors, ranging from individuals and small businesses all the
              way to large enterprice corporations.
            </p>

            <p>
              I approach every project with an attention to detail and
              determination to exceed my clients expectations. My process is
              very collaborative. I like to involve my clients closely in every
              stage of the project, listening and fully understanding their
              requirements so as to deliver an online solution that meets their
              business goals.
            </p>

            <p>
              When am not programming, you'll find me in my home studio cooking
              up some youtube tech videos, where I share my thoughts about
              mobile technologies. Click to download my
              <a
                href="https://drive.google.com/file/d/192ritcuRCLA7GOuRuGPPLdETuGzGmO5b/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="resume"
              >
                resume
              </a>{" "}
              , for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
