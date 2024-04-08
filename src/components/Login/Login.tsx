import React from "react";
import { ContainerL } from "./styles";

const login = () => {
  return (
    <ContainerL>
      <div className="container">
        <form action="" className="card-login" id="loginForm">
          <h1>Login</h1>
          <div className="form-inputs">
            <div className="position">
              <input
                type="text"
                placeholder="Usuario"
                className="input"
                id="username"
              />
              <i className="bx bx-user"></i>
              <span id="usernameError" className="error-message"></span>
            </div>
            <div className="position">
              <input
                type="password"
                placeholder="Contraseña"
                className="input"
                id="password"
              />
              <i className="bx bxs-lock-alt"></i>
              <span id="passwordError" className="error-message"></span>
            </div>
          </div>
          <div className="pull-apart">
            <div className="remember">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Recuérdame</label>
            </div>
            <div className="forgot-password">
              <a href="Forgot.html">Olvidé mi contraseña</a>
            </div>
          </div>
          <div className="center-button">
            <button type="submit">Entrar</button>
          </div>
          <div className="field-acount">
            <p>
              ¿No tienes una cuenta? <a href="registerUser.html">Regístrate</a>
            </p>
          </div>
        </form>
      </div>
    </ContainerL>
  );
};

export default login;
