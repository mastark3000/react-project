import React from "react";
import { Link } from "react-router-dom";

// home main component
export default function Home() {
  return (
    <div className="center">
      <h1>MENU</h1>
      <Link to="/homeinsider">
        <h3>Home</h3>
      </Link>
      <Link to="/user">
        <h3>User</h3>
      </Link>
      <Link to="/company">
        <h3>Company</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
}
