import React from "react";
import "../styles/about.css";
import Header from "../components/Layout/Header";
import Ankur from "../Assests/ankur2.jpeg";
import Kundan from "../Assests/kundan.jpeg";
import Salman from "../Assests/salman.jpeg";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div class="container">
        <div class="section-title">
          <h1>Our Team Page</h1>
        </div>

        <div class="row">
          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={Kundan} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Kundan Kumar</h2>
                <h3>Web Designer</h3>
                <p>I am a web designer. and i make very nice designs</p>
                <h4>kundankumar@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-tw">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-yt">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={Salman} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Salman Ali</h2>
                <h3>Frontend Developer</h3>
                <p>
                  I am a frontend developer And I create the structure and
                  layout of the website
                </p>
                <h4>salmanali23@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-tw">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-yt">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={Ankur} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Ankur Agarwal</h2>
                <h3>Backend Developer</h3>
                <p>i am a backend developer and i work on server side</p>
                <h4>frost.ankur019@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-tw">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-yt">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
