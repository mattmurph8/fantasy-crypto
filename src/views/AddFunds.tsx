import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import addFundsIcon from "../assets/img/add-funds.svg";
import addFundsScreen from "../assets/img/add-funds-screen.png";

const AddFundsIcon = styled.img`
  width: 80px;
  height: 40px;
  float: left;
  margin: 10px 10px 0 40px;
`;

const AddFundsText = styled(Typography)`
  margin: 15px 0;
`;

const AddFundsImage = styled.img`
  height: 450px;
  margin: 10px 20px 10px 40px;
`;

const AddFunds: React.FC = () => {
  return (
    <>
      <AddFundsIcon src={addFundsIcon} alt="Add funds" />
      <AddFundsText variant="h5">Add Funds</AddFundsText>
      <AddFundsImage src={addFundsScreen} alt="Add funds" />
    </>
  );
};

export default AddFunds;
