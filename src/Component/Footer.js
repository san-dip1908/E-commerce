import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "300px",
          backgroundColor: "  #0F1111",
          color: "darkgray",
        }}
      >
        <div>
          About
          <div style={{marginTop:"10px", color:"white"}}>
            <p>Contact us</p>
            <p>About us</p>
            <p>Career</p>
            <p>stories</p>
            <p>Press</p>
            <p>Corporate Information</p>
          </div>
        </div>
        <div>
          Group Companies
          <div style={{marginTop:"10px", color:"white"}}>
            <p>Myntra</p>
            <p>Flipkart Wholesale</p>
            <p>Clear Trip</p>
            <p>Shopsy</p>
          </div>
        </div>
        <div>
          Help
          <div style={{marginTop:"10px", color:"white"}}>
            <p>Payment</p>
            <p>shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
            <p>Report Infringement</p>
          </div>
        </div>
        <div>Consumer Policy</div>
        <div>Mail Us</div>
        <div>Registered Office Address</div>
      </div>
    </>
  );
};

export default Footer;
