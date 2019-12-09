import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Paper,
  Avatar,
  Typography,
  Grid,
  Card,
  CardActionArea
} from "@material-ui/core";
import profileImage from "../assets/img/avatar.jpg";
import addFundsIcon from "../assets/img/add-funds.svg";
import withdrawFundsIcon from "../assets/img/withdraw-funds.svg";
import { mockCurrentUser } from "../mocks";

const BigAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 10px 20px 0;
`;

const AvatarCaption = styled(Typography)`
  margin: 0 0 10px 40px;
`;

const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
`;

const BalanceText = styled(Typography)`
  margin: 0 20px;
`;

const BalanceNumber = styled(Typography)`
  margin: 0 20px 20px;
`;

const BalanceGrid = styled(Grid)`
  position: relative;
`;

const AddButton = styled(Card)`
  margin: 40px 10px 20px;
`;

const WithdrawButton = styled(Card)`
  margin: 0 10px;
`;

const AddFundsIcon = styled.img`
  width: 60px;
  height: 30px;
  margin: 10px 0 10px 50px;
`;

const ButtonText = styled(Typography)`
  font-weight: bold;
  margin: 10px 0;
`;

const Profile: React.FC = () => {
  const history = useHistory();

  const handleAddClick = () => {
    history.push("/account/add-funds");
  };

  const handleWithdrawClick = () => {
    history.push("/account/withdraw-funds");
  };

  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <BigAvatar alt="Matt" src={profileImage} />
            <AvatarCaption variant="subtitle2">
              {mockCurrentUser.username}
            </AvatarCaption>
          </Grid>
          <BalanceGrid item xs={6}>
            <BottomDiv>
              <BalanceText variant="subtitle1" color="textSecondary">
                Balance
              </BalanceText>
              <BalanceNumber variant="subtitle1">
                {`$${mockCurrentUser.balance}`}
              </BalanceNumber>
            </BottomDiv>
          </BalanceGrid>
        </Grid>
      </Paper>
      <AddButton onClick={handleAddClick}>
        <CardActionArea>
          <Grid container>
            <Grid item xs={6}>
              <AddFundsIcon src={addFundsIcon} alt="Add funds" />
            </Grid>
            <Grid item xs={6}>
              <ButtonText variant="subtitle1">Add Funds</ButtonText>
            </Grid>
          </Grid>
        </CardActionArea>
      </AddButton>
      <WithdrawButton onClick={handleWithdrawClick}>
        <CardActionArea>
          <Grid container>
            <Grid item xs={6}>
              <AddFundsIcon src={withdrawFundsIcon} alt="Withdraw funds" />
            </Grid>
            <Grid item xs={6}>
              <ButtonText variant="subtitle1">Withdraw Funds</ButtonText>
            </Grid>
          </Grid>
        </CardActionArea>
      </WithdrawButton>
    </>
  );
};

export default Profile;
