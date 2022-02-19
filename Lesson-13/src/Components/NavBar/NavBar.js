import React from "react";
import styled from "styled-components";
import logoImg from "../../Images/logo.svg";
import signImg from "../../Images/sign.svg";
const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const ImgLogo = styled.img`
  width: 50px;
`;
const Login = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: white;
  font-size: 16px;

  flex-direction: column;
  width: 45px;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
`;
const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    {authentication ? (
      <User>
        <Figure>
          <img src={signImg} alt={authentication.displayName} />
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="выйти" onClick={logOut}>
          X
        </LogOut>
      </User>
    ) : (
      <Login onClick={logIn}>
        <Figure>
          <img src={signImg} alt="войти" />
          <figuration>Войти</figuration>
        </Figure>
      </Login>
    )}
  </NavBarStyled>
);
