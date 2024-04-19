import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Cart from "./Component/Cart";
// import Footer from "./Component/Footer";
import { Box } from "@mui/material";
// import Loader from "./Component/Loader";
import Navbar from "./Component/Navbar";
import MainPage from "./Component/MainPage";
import CardPage from "./Component/CardPage";

import ContentPage from "./Component/ContentPage";
import Navigate from "./Component/Navigate";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="navigate/:id" element={<Navigate/>}/> */}
        <Route path="/navigate/:id" element={<Navigate />} />
      </Routes>
    </>
  );
}

export default App;
