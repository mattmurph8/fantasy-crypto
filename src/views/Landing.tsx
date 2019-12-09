import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const LandingWrapper = styled.div`
  background-color: white;
`;

const Logo = styled.img`
  width: 300px;
  height: 175px;
  margin: 75px 0 100px;
`;

const LoginButton = styled(Button)`
  width: 300px;
  background-color: #9ae200;
  color: white;
  height: 50px;
  margin-bottom: 25px;
`;

const SignupButton = styled(Button)`
  width: 300px;
  background-color: #ff890b;
  color: white;
  height: 50px;
`;

const ButtonIcon = styled(ArrowForwardIosIcon)``;

const Landing: React.FC = props => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignupClick = () => {
    history.push("/signup");
  };

  return (
    <LandingWrapper className="center">
      <Logo src={logo} alt="Logo" />
      <LoginButton onClick={handleLoginClick}>
        Login
        <ButtonIcon />
      </LoginButton>
      <SignupButton onClick={handleSignupClick}>
        Signup
        <ButtonIcon />
      </SignupButton>
    </LandingWrapper>
  );
};

export default Landing;
