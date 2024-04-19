import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";

const Navigate = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(res.data);
    }
    fetchApi();
  }, [id]);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding:"20px"
        }}
      >
        <div>
          <img src={data?.image} alt="1" height="400px" width="400px" />
        </div>
        <div>
          <div style={{ fontSize: "40px" }}>{data?.title}</div>
          <div style={{ fontSize: "25px" }}>Rs{data?.price}</div>
          <div style={{ color: "grey" }}>{data?.description}</div>
        </div>
      </div>
    </>
  );
};

export default Navigate;
