import React from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography
} from "@material-ui/core";

const StyledItem = styled(ListItem)`
  background-color: white;
  margin: 10px;
`;

interface GamesListProps {
  games: any;
  handleGameClick: (id: number) => void;
}

const GamesList: React.FC<GamesListProps> = props => {
  const renderList = () => (
    <List>
      {props.games.map((game: any) => (
        <StyledItem
          id={game.id}
          button={true}
          onClick={() => props.handleGameClick(game.id)}
        >
          <ListItemText primary={game.name} secondary={game.description} />
          <ListItemSecondaryAction>
            <Typography
              variant="subtitle2"
              color="secondary"
            >{`${game.fee} Entry`}</Typography>
          </ListItemSecondaryAction>
        </StyledItem>
      ))}
    </List>
  );

  return <>{renderList()}</>;
};

export default GamesList;
