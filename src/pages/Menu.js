import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menuContent">
        <div className="column">
          <h1>Donate Amount</h1>
          <p>Transforming Lives through Your Generosity!
Our "Donate Amount" feature empowers you to choose the exact value of your contribution, allowing you to customize your support to match your personal commitment and financial capacity.</p>
<Link to="/payment">
          <button> Proceed </button>
        </Link>
        </div>
        <div className="column">
          <h1>Donate Resources</h1>
          <p> Empowering Change through Tangible Contributions!
 Our "Donate Resources" feature offers you the opportunity to contribute tangible items that directly enhance the well-being and quality of life for individuals who require assistance. </p>
 <Link to="/new">
          <button> Proceed </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
