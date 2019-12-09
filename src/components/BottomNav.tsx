import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import GamesIcon from "@material-ui/icons/GamesOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutline";

const StyledNav = styled.div`
  background-color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const BottomNav: React.FC = () => {
  const [selected, setSelected] = useState("lobby");
  const history = useHistory();

  const handleSelectedChange = (
    e: React.ChangeEvent<{}>,
    newValue: string
  ): void => {
    setSelected(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <StyledNav>
      <BottomNavigation
        value={selected}
        onChange={handleSelectedChange}
        showLabels
      >
        <BottomNavigationAction
          value="lobby"
          label="Lobby"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="my-games"
          label="My Games"
          icon={<GamesIcon />}
        />
        <BottomNavigationAction
          value="account"
          label="Account"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          value="friends"
          label="Friends"
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </StyledNav>
  );
};

export default BottomNav;
