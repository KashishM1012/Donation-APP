import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/home.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1> Helping Hearts </h1>
        <h2> Empower with Your Donation! </h2>
        <p> CareConnect is an innovative platform  that addresses the challenges faced by children raised without parental supervision. It offers vital resources such as food, clothing, toys, money, and medicines, fostering collaborative action and promoting equitable access to assistance. By connecting with neighboring charitable organizations and community centers, CareConnect maximizes the impact of support and coordinates activities efficiently.</p>
        <Link to="/first">
          <button> Donate Now! </button>
        </Link>
          

      </div>
    </div>
  );
}

export default Home;