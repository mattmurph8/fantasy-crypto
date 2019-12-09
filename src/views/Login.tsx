import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { TextField, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const LoginWrapper = styled.div`
  background-color: white;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
  margin: 10px;
`;

const UsernameInput = styled(TextField)`
  margin: 125px 0 30px;
  width: 300px;
`;

const PasswordInput = styled(TextField)`
  width: 300px;
  margin-bottom: 50px;
`;

const LoginButton = styled(Button)`
  width: 300px;
  color: white;
  height: 50px;
`;

const ButtonIcon = styled(ArrowForwardIosIcon)`
  position: absolute;
  right: 30px;
  height: 15px;
  width: 15px;
`;

interface LoginProps {
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = props => {
  const history = useHistory();

  const handleLoginClick = () => {
    props.handleLogin();
    history.push("/lobby");
  };

  return (
    <LoginWrapper>
      <Logo src={logo} alt="Logo" />
      <div className="center">
        <UsernameInput label="Username" variant="outlined" />
        <PasswordInput label="Password" variant="outlined" type="password" />
        <LoginButton
          color="primary"
          variant="contained"
          onClick={handleLoginClick}
        >
          Login
          <ButtonIcon />
        </LoginButton>
      </div>
    </LoginWrapper>
  );
};

export default Login;
