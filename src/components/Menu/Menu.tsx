import { icons, routes } from "../../config/routes";
import { NavLink } from "react-router-dom";
import * as sc from "./styles";

const Menu = () => {
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