import React from "react";
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
        <h1> Sign Up </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name*</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email*</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="password">Password*</label>
          <input name="password" placeholder="Enter Password" type="password" />
          
          <button type="submit">Sign Up</button>
          <p>Already a User? <a href="/first">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Contact;