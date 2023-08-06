import React from "react";
import { Link } from "react-router-dom";
import PizzaLeft from "../assets/logo1.avif";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Login Page </h1>

        <form id="contact-form" method="POST">
          
          <label htmlFor="email">Email*</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="password">Password*</label>
          <input name="password" placeholder="Enter Password" type="password" />
          <Link to="/menu">
          <button> Login </button>
        </Link>
          
        <p>Don't Have an Account? <a href="/sign">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Contact;