import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setFilteredData(data);
      });
  }, []);

  const handleCategoryClick = (category) => {
    const filtered = apiData.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  const handlePriceClick = (minprice, maxprice) => {
    const filtered = apiData.filter(
      (item) => item.price >= minprice && item.price <= maxprice
    );
    setFilteredData(filtered);
  };

  const sortByPriceAscending = () => {
    const sort = [...filteredData].sort((a, b) => a.price - b.price);
    setFilteredData(sort);
  };

  const sortByPriceDescending = () => {
    const sort = [...filteredData].sort((a, b) => b.price - a.price);
    setFilteredData(sort);
  };

  const handleNavigate = (id) => {
    Navigate(`/navigate/${id}`);
  };

  return (
    <>
      <Box display={{ display: "flex", width: "100%", marginTop: "50px" }}>
        <Box sx={{ width: "60%", marginLeft: "10px" }}>
          <div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "100",
                  marginTop: "10px",
                }}
              >
                {" "}
                Filtering
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("men's clothing")}
              />
              <div style={{ fontSize: "20px" }}>men's clothing</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("women's clothing")}
              />
              <div style={{ fontSize: "20px" }}>women's clothing</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("jewelery")}
              />

              <p style={{ fontSize: "20px" }}>jewelery</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handleCategoryClick("electronics")}
              />
              <p style={{ fontSize: "20px" }}>electronics</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "100",
                  marginTop: "10px",
                }}
              >
                Sorting
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={sortByPriceAscending}
              />

              <p style={{ fontSize: "20px" }}>Ascending</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={sortByPriceDescending}
              />

              <p style={{ fontSize: "20px" }}>Descending</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "100",
                  marginTop: "10px",
                }}
              >
                Price Sorting
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
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
              <p style={{ fontSize: "20px" }}>$50-100</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="radio"
                name="radiobutton"
                onClick={() => handlePriceClick(100, 600)}
              />
              <p style={{ fontSize: "20px" }}>$100</p>
            </div>
          </div>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia />

            <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: "100%",
                  gap: "20px",
                  alignItems: "center",
                  marginLeft: "30px",
                  padding: "0",
                }}
              >
                {filteredData?.map((item, inde) => {
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
                                sx={{
                                  display: "flex",
                                  color: "black",
                                  gap: "0px",
                                }}
                              >
                                <Box></Box>
                                <Box sx={{ fontSize: "30px" }}>
                                  {item.price}
                                </Box>
                              </Box>
                            </Typography>
                          </Box>
                          <Button
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </Card>
                      <Box>{filteredData.electronics}</Box>
                      <Box>{filteredData.jewelery}</Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default RecipeReviewCard;
