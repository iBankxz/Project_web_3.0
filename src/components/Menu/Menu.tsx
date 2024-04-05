import React from "react";
import { routes } from "../../config/routes";
import { NavLink, useNavigate } from "react-router-dom";
// import { ABOUT } from "../../config/url";

const Menu = () => {
  const navigate = useNavigate();
  // const navigation = () => {
  //   navigate(ABOUT)
  // }
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {routes.map((route) => (
          <li className="nav-item active">
            <NavLink to={route.path} className="nav-link">
              {route.name}
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="user_optio_box">
        <NavLink to={}>
          {}
          <i className="fa fa-user" aria-hidden="true"></i>
        </NavLink>
        <a>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Menu;
