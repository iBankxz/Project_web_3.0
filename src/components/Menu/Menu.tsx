import React from "react";

const Menu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            Inicio<span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">
            Acerca de nosotros
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="product.html">
            Productos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="testimonial.html">
            Opiniones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            Contactanos
          </a>
        </li>
      </ul>
      <div className="user_optio_box">
        <a href="login.html">
          <i className="fa fa-user" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Menu;
