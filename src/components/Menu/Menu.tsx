import React from "react";
import { icons, routes } from "../../config/routes";
import { NavLink, useNavigate } from "react-router-dom";
// import { ABOUT } from "../../config/url";
import * as sc from "./styles";

const Menu = () => {
  // const navigate = useNavigate();
  // const navigation = () => {
  //   navigate(ABOUT)
  // }
  return (
    <sc.Container>
      <span>ReTrendy</span>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>

            {<NavLink to={route.path}>{route.name}</NavLink>}
          </li>
        ))}
      </ul>
      <div className="Container-icon">
        {icons.map((route, index) => (
          <NavLink key={index} to={route.path}>{route.icon}</NavLink>
        ))}
      </div>
    </sc.Container>
  );
};

export default Menu;