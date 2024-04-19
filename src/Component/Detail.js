import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchApi() {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(res.data);
    }
    fetchApi();
  }, [id]);

  console.log(data);

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "50px",
          gap: "30px",
        }}
      >
        <div>
          <img
            src={data.image}
            alt="1"
            height="450px"
            width="450px"
            sx={{ border: "5px solid grey" }}
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box sx={{ display: "flex" }}>
              <Link to="/cart">
                <Button
                  style={{
                    display: "flex",
                    gap: "10px",
                    backgroundColor: "#ffae00d1",
                    height: "50px",
                    color: "white",
                    fontWeight: "1500",
                  }}
                >
                  <AddShoppingCartIcon />
                  <Typography sx={{textDecoration:"none"}}>ADD TO CART</Typography>
                </Button>
              </Link>
            </Box>
            <Button
              sx={{
                display: "flex",
                height: "50px",
                backgroundColor: " #ff8800",
                color: "white",
                fontWeight: "1500",
                gap: "10px",
              }}
            >
              <ShopIcon />
              <Typography>BUY NOW</Typography>
            </Button>
          </Box>
        </div>
        <div>
          <div style={{ fontSize: "50px" }}>{data.title}</div>
          <div style={{ fontSize: "30px" }}>Rs {data.price}</div>
          <div>{data.description}</div>
        </div>
      </div>
    </>
  );
};

export default Detail;
