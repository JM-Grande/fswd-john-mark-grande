import React from "react";
import Header from "./components/pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Cart from "./components/pages/Cart";
import Forgot from "./components/pages/Forgot";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Item from "./components/pages/Item";
import Profile from "./components/pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box component="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Cart/:id" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Item/:id" element={<Item />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
