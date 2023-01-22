import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav style={{ background: "#F5F5F5", padding: "20px" }}>
        <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "#000000",
            textDecoration: "none",
            marginLeft: "20px",
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={{
            color: "#000000",
            textDecoration: "none",
            marginLeft: "20px",
          }}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
