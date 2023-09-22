import React from 'react';
import "./navbar.css";
import firebase from "../../../img/firebase.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/firebase.png" alt="Firebase Logo" className="logo" />
      <h1 className="title">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
