/* Nav Bar being rendered on the page here*/
import React from "react";
import "./Nav.css";



const Nav = () =>
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Twinstars FC
        </a>
      <div>
        <span className="nav-Links">
          <a href="/About" className="navbar-brand">
            About Us
          </a>
          <a href="/Club" className="navbar-brand">
            Club
          </a>
          <a href="/News" className="navbar-brand">
            News
          </a>
          <a href="/Partners" className="navbar-brand">
            Partners
          </a>
        </span>
      </div>
    </div>
  </nav>;

export default Nav;