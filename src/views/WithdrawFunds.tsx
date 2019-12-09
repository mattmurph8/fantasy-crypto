import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import withdrawFundsIcon from "../assets/img/withdraw-funds.svg";
import withdrawFundsScreen from "../assets/img/withdraw-funds-screen.png";

const WithdrawFundsIcon = styled.img`
  width: 80px;
  height: 40px;
  float: left;
  margin: 10px 10px 0 40px;
`;

const WithdrawFundsText = styled(Typography)`
  margin: 15px 0;
`;

const WithdrawFundsImage = styled.img`
  height: 450px;
  margin: 10px 20px 10px 40px;
`;

const WithdrawFunds: React.FC = () => {
  return (
    <>
      <WithdrawFundsIcon src={withdrawFundsIcon} alt="Withdraw funds" />
      <WithdrawFundsText variant="h5">Withdraw Funds</WithdrawFundsText>
      <WithdrawFundsImage src={withdrawFundsScreen} alt="Withdraw funds" />
    </>
  );
};

export default WithdrawFunds;
