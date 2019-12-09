import React, { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab
} from "@material-ui/core";
import { mockGames, mockUserGames } from "../mocks";

const Title = styled(Typography)`
  margin: 20px 10px 10px;
`;

const Subtitle = styled(Typography)`
  margin: 10px;
`;

const Balance = styled(Typography)`
  margin: 0 10px;
`;

const GameTab = styled(Tab)`
  margin: 0 20px;
  font-size: 12px;
`;

interface GameViewProps {
  match: any;
}

const GameView: React.FC<GameViewProps> = props => {
  const [selectedTab, setSelectedTab] = useState("picks");
  const gameId = parseInt(props.match.params.gameId);
  const game = mockGames.find(game => game.id === gameId)!;
  const userGame = mockUserGames.find(game => game.id === gameId)!;

  const handleTabChange = (e: React.ChangeEvent<{}>, newTab: string): void => {
    setSelectedTab(newTab);
  };

  return (
    <>
      <Paper square>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <GameTab value="picks" label="Your picks" />
          <GameTab value="rules" label="Rules" />
          <GameTab value="prizes" label="Prizes" />
        </Tabs>
      </Paper>
      <Title variant="h5">{game.name}</Title>
      <Subtitle variant="subtitle1">{`Balance remaining: $${userGame.remaining}`}</Subtitle>
      <Paper>
        <Title variant="caption" color="textSecondary">
          Portfolio balance
        </Title>
        <Balance variant="h5">${userGame.balance}</Balance>
        <Divider />
        <Subtitle variant="subtitle2">Your assets</Subtitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
    </>
  );
};

export default GameView;
