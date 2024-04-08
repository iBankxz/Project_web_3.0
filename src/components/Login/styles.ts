import styled from "styled-components";
import img from "../../img/background3.jpg"

export const ContainerL = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background: url(${img});  

  h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 2rem;
    color: #2f3640;
  }

  h2 {
    text-align: center;
    color: #2f3640;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
  }

  .card-login {
    all: unset;
    width: 420px;
    border: 2px solid rgba (255, 255, 255, 0.2);
    color: white;
    background: transparent;
    padding: 30px 40px;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    & .input {
      all: unset;
      border-radius: 5rem;
      background: white;
      color: black;
      padding: 10px 7px;
      padding-left: 1rem;
      width: 100%;
    }
    .form-inputs > .input:nth-child(1) {
      margin-bottom: 2rem;
    }
    .position {
      position: relative;
      margin-bottom: 3rem;
    }
    .position > .bx-user,
    .bxs-lock-alt,
    .bxs-envelope {
      position: absolute;
      right: 0;
      color: black;
      top: 50%;
      transform: translateY(-50%);
    }

    .pull-apart {
      display: flex;
      gap: 10px;
      padding: 1rem 0px;
      justify-content: space-between;
    }

    .pull-apart a {
      color: #fff;
    }

    .center-button {
      display: flex;
      justify-content: center;
      & button {
        all: unset;
        width: 40%;
        height: 30px;
        background: #8019c8;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 10px 80px;
        font-weight: 600;
        font-size: 16px;
        color: white;
        text-align: center;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        &:hover {
          background: #19c880;
          color: #fff;
          transform: scale(1.02);
        }
      }
    }

    .field-acount {
      margin-top: 15px;
      text-align: center;
      color: #2f3640;
    }

    .field-acount p a {
      color: #fff;
      font-weight: 600;
      color: #2f3640;
    }

    .forgot-password a {
      color: #2f3640;
    }

    .remember label {
      color: #2f3640;
    }
  }
`;
