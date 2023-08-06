import React from 'react';
import img1 from "../assets/QR.png";

function Payment() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Set the container height to fill the viewport
    
      }}
    >
      <p style={{ marginBottom: "10px", fontSize: "40px", fontWeight: "bold" }}>
        Scan and Pay
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <img
          src={img1}
          alt=""
          style={{
            maxWidth: "50%", // Set the maximum width of the image to 50% of its container
            height: "auto", // Maintain the aspect ratio of the image
          }}
        />
      </div>
    </div>
  );
}

export default Payment;
