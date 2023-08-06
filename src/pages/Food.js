import React, { useState } from "react";
import { Link } from "react-router-dom";
import PizzaLeft from "../assets/logo1.avif";
import "../styles/Contact.css";

function Contact() {
    const [donationOption, setDonationOption] = useState(""); // State to keep track of selected donation option
    const [pickupAddress, setPickupAddress] = useState("");
  const [ngoName, setNgoName] = useState("");
  const handleDonationChange = (event) => {
    setDonationOption(event.target.value);
  };

  const handlePickupAddressChange = (event) => {
    setPickupAddress(event.target.value);
  };

  const handleNgoNameChange = (event) => {
    setNgoName(event.target.value);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Donation Form </h1>

        <form id="contact-form" method="POST">
        <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter Name" type="name" />
          <label htmlFor="email">Email*</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="donationOption">Choose a donation option:</label>
          <select
            name="donationOption"
            value={donationOption}
            onChange={handleDonationChange}
          >
            <option value="">Select an option</option>
            <option value="Money">Money</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Toys">Toys</option>
            <option value="Educational Materials">Educational Materials</option>
            <option value="Others">Others</option>
          </select>

          <label htmlFor="pickupAddress">Pickup Address</label>
          <input
            name="pickupAddress"
            placeholder="Enter pickup address..."
            type="text"
            value={pickupAddress}
            onChange={handlePickupAddressChange}
          />

          <label htmlFor="ngoName">NGO Name</label>
          <input
            name="ngoName"
            placeholder="Enter NGO name..."
            type="text"
            value={ngoName}
            onChange={handleNgoNameChange}
          />

          
          <Link to="/certificatePage">
          <button> Donate </button>
        </Link>
        
        </form>
      </div>
    </div>
  );
}

export default Contact;