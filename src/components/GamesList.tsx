import React from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  CircularProgress
} from "@material-ui/core";

const StyledItem = styled(ListItem)`
  background-color: white;
  margin: 10px;
`;

const StyledProgress = styled(CircularProgress)`
  margin-right: 30px;
`;

const CapacityText = styled(Typography)`
  position: fixed;
  left: 20px;
  font-weight: bold;
`;

interface GamesListProps {
  games: any;
  handleGameClick: (id: number) => void;
  myGames: boolean;
}

const GamesList: React.FC<GamesListProps> = props => {
  const renderList = () => {
    return (
      <List>
        {props.games.map((game: any) => {
          const extraText = props.myGames ? "View" : `${game.fee} Entry`;
          const percentFull = Math.floor(
            (game.currentParticipants / game.maxParticipants) * 100
          );
          return (
            <StyledItem
              id={game.id}
              button={true}
              onClick={() => props.handleGameClick(game.id)}
            >
              <StyledProgress variant="static" value={percentFull} />
              <CapacityText variant="caption">
                {`${percentFull}% FULL`}
              </CapacityText>
              <ListItemText
                primary={game.name}
                secondary={game.description}
              ></ListItemText>
              <ListItemSecondaryAction>
                <Typography variant="subtitle2" color="secondary">
                  {extraText}
                </Typography>
              </ListItemSecondaryAction>
            </StyledItem>
          );
        })}
      </List>
    );
  };

  return <>{renderList()}</>;
};

export default GamesList;
