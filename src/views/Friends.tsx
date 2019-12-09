import React from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import profileImage from "../assets/img/avatar.jpg";
import { mockFriends } from "../mocks";

const Title = styled(Typography)`
  margin: 20px 10px 10px;
`;

const FriendItem = styled(ListItem)`
  background-color: white;
  margin: 10px;
`;

const Friends: React.FC = () => {
  const renderListItem = (friend: any) => (
    <FriendItem button={true}>
      <ListItemAvatar>
        <Avatar alt="Matt" src={profileImage} />
      </ListItemAvatar>
      <ListItemText primary={friend.name} secondary={friend.username} />
      <ListItemSecondaryAction>
        <Button color="secondary">Invite to play</Button>
      </ListItemSecondaryAction>
    </FriendItem>
  );
  return (
    <>
      <Title variant="h5">Friends</Title>
      <List>{mockFriends.map(friend => renderListItem(friend))}</List>
    </>
  );
};

export default Friends;
