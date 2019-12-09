import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Typography, Tabs, Tab, Paper } from "@material-ui/core";
import GamesList from "../components/GamesList";
import { mockGames, mockUserGames } from "../mocks";

const MyGamesTab = styled(Tab)`
  margin: 0 20px;
  font-size: 12px;
`;

const Title = styled(Typography)`
  margin: 20px 10px 10px;
`;

const MyGames = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("active");

  const games = mockUserGames.map(userGame =>
    mockGames.find(game => game.id === userGame.id)
  );

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
          <MyGamesTab value="active" label="Active Games" />
          <MyGamesTab value="past" label="Past Games" />
        </Tabs>
      </Paper>
      <Title variant="h5">My Games</Title>

      <GamesList games={games} handleGameClick={handleGameClick} />
    </>
  );
};

export default MyGames;
