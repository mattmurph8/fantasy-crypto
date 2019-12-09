import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.svg";
import { Divider } from "@material-ui/core";

const Logo = styled.img`
  width: 90px;
  height: 45 px;
  margin: 10px;
`;

const Search = styled.img`
  width: 30px;
  height: 30px;
  float: right;
  margin: 20px 20px 0 0;
`;

const StyledHeader = styled.div`
  background-color: white;
  width: 100;
`;

const ThickDivider = styled(Divider)`
  height: 2px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <Search src={search} alt="Search" />
      <ThickDivider />
    </StyledHeader>
  );
};

export default Header;
