import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
      
          <img
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt="12"
            height="500px"
            width="400px"
          />
        

        <div>
          <p style={{ fontSize: "50px", color: "black" }}>Your Cart is empty</p>
          <p style={{ color: "gray", marginTop: "10px" }}>
            Shop Today's Detail
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              height: "35px",
            }}
          >
            <Link to="/signup">
              <button
                style={{
                  backgroundColor: "#ccff00d6",
                  fontSize: "20px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Sign in to your Account
              </button>
            </Link>
            <Link to="/login">
              <button
                style={{
                  fontSize: "20px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Sign up now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
