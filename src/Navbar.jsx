import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/createblog"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "5px",
          }}
        >
          New blog
        </Link>
      </div>
    </nav>
  );
};
