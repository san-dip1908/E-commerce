import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function RecipeReviewCard() {
  const [apiData, setApiData] = useState([]);
  const [filteredCategoryData, setfilteredCategoryData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const Navigate = useNavigate();

  useEffect(() => {
    setIsLoader(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setfilteredCategoryData(data);
        setIsLoader(false);
      });
  }, []);

  const handleNavigate = (id) => {
    Navigate(`detail/${id}`);
  };

  const handleCategoryClick = (category) => {
    const filtered = apiData.filter((item) => item.category === category);
    setfilteredCategoryData(filtered);
  };

  const handlePriceClick = (minprice, maxprice) => {
    const filtered = apiData.filter(
      (item) => item.price >= minprice && item.price <= maxprice
    );
    setfilteredCategoryData(filtered);
  };

  const sortByPriceAscending = () => {
    const sort = [...filteredCategoryData].sort((a, b) => a.price - b.price);
    setfilteredCategoryData(sort);
  };

  const sortByPriceDescending = () => {
    const sort = [...filteredCategoryData].sort((a, b) => b.price - a.price);
    setfilteredCategoryData(sort);
  };
  console.log(apiData)
  return (
    <>
      <Box sx={{ display: "flex", border: "1px solid red", width: "100%" }}>
        <Box>
          <div>
            <div>
              <p>Filtering</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("men's clothing")}
              />
              <div>men's clothing</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("women's clothing")}
              />
              <div>women's clothing</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("jewelery")}
              />
              <p>jewelery</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("electronics")}
              />
              <p>electronics</p>
            </div>
            <div>
              <p>Sorting</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={sortByPriceAscending}
              />

              <p>Ascending</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={sortByPriceDescending}
              />

              <p>Descending</p>
            </div>
            <div>
              <p>Price Sorting</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handlePriceClick(10, 50)}
              />
              <p>$10-50</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handlePriceClick(50, 100)}
              />
              <p>$50-100</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handlePriceClick(100, 600)}
              />
              <p>$100</p>
            </div>
          </div>
        </Box>
        {!isLoader ? (
          <CircularProgress
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              // margin: "15px",
              padding: "0",
            }}
          >
            {filteredCategoryData?.map((item, inde) => {
              return (
                <Box>
                  <Card
                    sx={{ maxWidth: 365 }}
                    onClick={() => handleNavigate(item.id)}
                  >
                    <Box
                      sx={{
                        display: "flex",

                        justifyContent: "space-evenly",
                      }}
                    >
                      <Box sx={{ height: "200px" }}>
                        <CardMedia
                          component="img"
                          height="170px"
                          width="150px"
                          image={item.image}
                          alt="Paella dish"
                        />
                      </Box>
                      <Typography
                        style={{
                          color: item.rating.rate >= 4 ? "green" : "red",
                        }}
                      >
                        {item.rating.rate}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        margin: "0 10px",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "27px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          color: "black",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {item.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box
                            sx={{ display: "flex", color: "black", gap: "0px" }}
                          >
                            <Box>
                              <AttachMoneyIcon sx={{ height: "15px" }} />
                            </Box>
                            <Box sx={{ fontSize: "30px" }}>{item.price}</Box>
                          </Box>
                        </Typography>
                      </Box>
                      <Button
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Card>
                  <Box>{filteredCategoryData.electronics}</Box>
                  <Box>{filteredCategoryData.jewelery}</Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}
