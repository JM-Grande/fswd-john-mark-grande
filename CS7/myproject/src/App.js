import React from "react";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Forgot from "./components/pages/Forgot";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Get Started</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="login/*" element={<Login />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="register" element={<Registration />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
