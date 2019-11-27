import React from "react";
import { IconButton } from "@material-ui/core";
import { Reorder, Home, ListAlt, Star } from "@material-ui/icons";

import colors from "../../styles/colors";
import { Container, Item } from "./styles";

const SideBar = ({ selected }) => {
  return (
    <Container>
      <Item enable={selected === 0}>
        <IconButton>
          <Reorder
            htmlColor={selected === 0 ? colors.orange : "#fff"}
            style={{ fontSize: 18 }}
          />
        </IconButton>
      </Item>
      <Item enable={selected === 1}>
        <IconButton onClick={() => (window.location.href = "/")}>
          <Home
            htmlColor={selected === 1 ? colors.orange : "#fff"}
            style={{ fontSize: 18 }}
          />
        </IconButton>
      </Item>
      <Item enable={selected === 2}>
        <IconButton onClick={() => (window.location.href = "/journey")}>
          <ListAlt
            htmlColor={selected === 2 ? colors.orange : "#fff"}
            style={{ fontSize: 18 }}
          />
        </IconButton>
      </Item>
      <Item enable={selected === 3}>
        <IconButton onClick={() => {}}>
          <Star
            htmlColor={selected === 3 ? colors.orange : "#fff"}
            style={{ fontSize: 18 }}
          />
        </IconButton>
      </Item>
    </Container>
  );
};

export default SideBar;
