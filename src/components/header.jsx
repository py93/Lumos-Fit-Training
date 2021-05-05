import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

function SearchBar() {
  return <input className="search-bar" placeholder={"Search Video"} />;
}

export function Header() {
  const navRef = useRef(null);

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-section">
        <div
          className="burger nav-section-items"
          onClick={() => {
            navRef.current.classList.toggle("active");
          }}
        >
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div>

        <div className="nav-brand">
          <img alt="logo" src={require("../images/logo.png")} />
          <NavLink to="/" className="link">
            LumosFit Training
          </NavLink>
        </div>
      </div>
      <SearchBar />
      <ul className="navbar-links">
        <li className="list-inline-item">
          <NavLink
            end
            to="/"
            activeClassName="navlinks-active"
            className="navlinks-style text-left"
          >
            About Us
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink
            end
            activeClassName="navlinks-active"
            to="/training"
            className="navlinks-style text-left"
          >
            Training
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink
            end
            activeClassName="navlinks-active"
            to="/liked"
            className="navlinks-style text-left"
          >
            Liked Videos
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink
            end
            activeClassName="navlinks-active"
            to="/saved"
            className="navlinks-style text-left"
          >
            Saved Videos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
