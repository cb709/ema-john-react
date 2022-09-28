import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="container header-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-menu">
          <a href="/order" className="nav-link">Order</a>
          <a href="/order-review" className="nav-link">Order Review</a>
          <a href="/manage-inventory" className="nav-link">Manage Inventory</a>
          <a href="/login" className="nav-link">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
