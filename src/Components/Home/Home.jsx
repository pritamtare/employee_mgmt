import React from "react";
import { NavLink } from "react-router-dom";
import Display from "../Display/Display";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="wrapper">
            <idv className="header-logo">
              <a href="#">
                <h1>Mployee</h1>
              </a>
            </idv>
            <idv className="header-menu">
              <ul>
                <a href="#">Dashboard</a>
                <a href="#">Relocate</a>
                <a href="#">Directory</a>
                <a href="#">Project</a>
                <a href="#">Technolgy</a>
              </ul>
            </idv>
            <idv className="header-search">
              <input type="text" placeholder="Search" />
              <button> s</button>
            </idv>
            <idv className="header-login">
              <button>AT</button>
            </idv>
          </div>
          {/*wrapper*/}
        </div>{" "}
        {/*container */}
      </nav>
      {/*nav*/}
      <Display/>
    </>
  );
};

export default Home;
