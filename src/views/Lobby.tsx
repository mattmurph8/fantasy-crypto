import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Typography, Tabs, Tab, Paper } from "@material-ui/core";
import GamesList from "../components/GamesList";
import { mockGames } from "../mocks";

const LobbyTab = styled(Tab)`
  margin: 0 20px;
  font-size: 12px;
`;

const Title = styled(Typography)`
  margin: 20px 10px 10px;
`;

const Subtitle = styled(Typography)`
  margin: 10px;
`;

const Lobby: React.FC = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("recommended");

  const handleTabChange = (e: React.ChangeEvent<{}>, newTab: string): void => {
    setSelectedTab(newTab);
  };

  const handleGameClick = (gameId: number) => {
    history.push(`/games/${gameId}`);
  };

  return (
    <>
      <Paper square>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <LobbyTab value="recommended" label="Recommended" />
          <LobbyTab value="margin" label="Margin Games" />
        </Tabs>
      </Paper>
      <Title variant="h5">Today's Games</Title>
      <Subtitle variant="subtitle2">
        Here are some games we recommend for you
      </Subtitle>
      <GamesList
        games={mockGames}
        handleGameClick={handleGameClick}
        myGames={false}
      />
    </>
  );
};

export default Lobby;
