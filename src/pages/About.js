import React from "react";
import "../styles/About.css";
import Food from "../assets/Slider4.jpg";
import Clothes from "../assets/Slider2.jpg";
import Toys from "../assets/Slider1.jpg";
import Education from "../assets/Slider3.jpg";
import Others from "../assets/Slider6.jpg";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="about">
      <div class="carousel">
        <div class="carousel-inner">
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked" />
          <div class="carousel-item">
            <img src={Food} alt="" />
          </div>
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item">
            <img src={Clothes} alt="" />
          </div>
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item">
            <img src={Toys} alt="" />
          </div>
          <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item">
            <img src={Education} alt="" />
          </div>
          <input class="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="true" />
          <div class="carousel-item">
            <img src={Others} alt="" />
          </div>
          <label for="carousel-5" class="carousel-control prev control-1">‹</label>
          <label for="carousel-4" class="carousel-control next control-3">›</label>
          <label for="carousel-3" class="carousel-control prev control-4">‹</label>
          <label for="carousel-2" class="carousel-control next control-1">›</label>
          <label for="carousel-1" class="carousel-control prev control-2">‹</label>
          <label for="carousel-5" class="carousel-control next control-4">›</label>
          <label for="carousel-4" class="carousel-control prev control-5">‹</label>
          <label for="carousel-3" class="carousel-control next control-2">›</label>
          <label for="carousel-2" class="carousel-control prev control-3">‹</label>
          <label for="carousel-1" class="carousel-control next control-5">›</label>
          <ol class="carousel-indicators">
            <li>
              <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
              <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
              <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
            <li>
              <label for="carousel-4" class="carousel-bullet">•</label>
            </li>
            <li>
              <label for="carousel-5" class="carousel-bullet">•</label>
            </li>
          </ol>
        </div>
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          CareConnect is an innovative platform  that addresses the challenges faced by children raised without parental supervision. It offers vital resources such as food, clothing, toys, money, and medicines, fostering collaborative action and promoting equitable access to assistance. By connecting with neighboring charitable organizations and community centers, CareConnect maximizes the impact of support and coordinates activities efficiently.
        </p>
        <Link to="/first">
          <button> Donate Now! </button>
        </Link>
      </div>
    </div>
  );
}

export default About;