import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import rippleLogo from "../assets/img/ripple-logo.svg";
import bitcoinLogo from "../assets/img/bitcoin-backdrop.svg";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const LandingWrapper = styled.div`
  background-color: white;
`;

const ImageStackWrapper = styled.div`
  position: relative;
  top: 0;
`;

const Logo = styled.img`
  position: relative;
  width: 300px;
  height: 175px;
  margin: 75px 0 200px;
  background-color: transparent;
  z-index: 1;
`;

const RippleLogo = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BitcoinLogo = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const LoginButton = styled(Button)`
  width: 300px;
  color: white;
  height: 50px;
  margin-bottom: 25px;
`;

const SignupButton = styled(Button)`
  width: 300px;
  color: white;
  height: 50px;
  margin-bottom: 100px;
`;

const ButtonIcon = styled(ArrowForwardIosIcon)`
  position: absolute;
  right: 30px;
  height: 15px;
  width: 15px;
`;

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
      <ImageStackWrapper>
        <RippleLogo src={rippleLogo} alt="Ripple logo" />
        <BitcoinLogo src={bitcoinLogo} alt="Bitcoin logo" />
        <Logo src={logo} alt="Logo" />
      </ImageStackWrapper>
      <LoginButton
        variant="contained"
        color="primary"
        onClick={handleLoginClick}
      >
        Login
        <ButtonIcon />
      </LoginButton>
      <SignupButton
        variant="contained"
        color="secondary"
        onClick={handleSignupClick}
      >
        Signup
        <ButtonIcon />
      </SignupButton>
    </LandingWrapper>
  );
};

export default Landing;
