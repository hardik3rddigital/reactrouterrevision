import React from "react";
import HeaderData, { HeaderMenubar } from "../Json/HeaderData";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header id="header" className="menu-shrink shadow-sm">
        <div className="header">
          <div className="container">
            <div className="header-section py-3 d-flex align-items-center justify-content-between">
              <div className="header-logo">
                <Link to="/">
                  <img
                    src={HeaderData.logo}
                    alt={HeaderData.alternate}
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="header-menu">
                <ul className="menubar d-flex align-items-center m-0 p-0">
                  {HeaderMenubar.map(({ name, path }, index) => (
                    <li className="menu-item ms-4 list-unstyled" key={index}>
                      <Link
                        to={path}
                        className="text-capitalize text-decoration-none text-dark"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
