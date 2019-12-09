import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Typography,
  Button,
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
import {
  mockGames,
  mockUserGames,
  mockStandings,
  mockCurrentUser
} from "../mocks";
import portfolioDetails from "../assets/img/portfolio-chart.png";

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

const PortfolioDetailsImage = styled.img`
  height: 240px;
  width: 100%;
`;

interface GameViewProps {
  match: any;
}

const GameView: React.FC<GameViewProps> = props => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("picks");
  const gameId = parseInt(props.match.params.gameId);
  const game = mockGames.find(game => game.id === gameId)!;
  const userGame = mockUserGames.find(game => game.id === gameId)!;

  const handleTabChange = (e: React.ChangeEvent<{}>, newTab: string): void => {
    setSelectedTab(newTab);
  };

  const handleAssetClick = (symbol: string) => {
    history.push(`/games/${gameId}/assets/${symbol}`);
  };

  return (
    <>
      <Paper square>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <GameTab value="picks" label="Your picks" />
          <GameTab value="standings" label="Standings" />
          <GameTab value="prizes" label="Prizes" />
        </Tabs>
      </Paper>
      <Title variant="h5">{game.name}</Title>
      {selectedTab === "picks" && (
        <>
          <Subtitle variant="subtitle1">{`Balance remaining: $${userGame.remaining}`}</Subtitle>
          <Paper>
            {/* <Title variant="caption" color="textSecondary">
                  Portfolio balance
                </Title>
                <Balance variant="h5">${userGame.balance}</Balance> */}
            <PortfolioDetailsImage
              src={portfolioDetails}
              alt="Portfolio details"
            />

            <Divider />
            <Subtitle variant="subtitle2">Your assets</Subtitle>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Asset</TableCell>
                  <TableCell align="right">Balance</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {userGame.assets.map(asset => (
                  <TableRow key={asset.currency}>
                    <TableCell component="th" scope="row">
                      {asset.currency}
                    </TableCell>
                    <TableCell align="right">{asset.balance}</TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        onClick={() => handleAssetClick(asset.currency)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      )}
      {selectedTab === "standings" && (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockStandings.map(user => {
                const style =
                  user.id === mockCurrentUser.id
                    ? { backgroundColor: "#9ae200" }
                    : {};
                return (
                  <TableRow key={user.id} style={style}>
                    <TableCell component="th" scope="row">
                      {user.position}
                    </TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.balance}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

export default GameView;
