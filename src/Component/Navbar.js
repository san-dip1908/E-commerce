import React from "react";
import { Link } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <Box className="Navbar">
            <Box className="Navbar1">
              <DiamondIcon />
              <li>
                {" "}
                <Link to="/" >Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About</Link>
              </li>
            </Box>

            <Box className="Navbar2">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <Link to="/cart"><ShoppingCartIcon /></Link>
            </Box>
          </Box>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
