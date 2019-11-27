import React, { useState } from "react";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Row, Column } from "../../styles/global";
import {
  Container,
  MiniBox,
  Circle,
  TimeLineItem,
  PvPLogo,
  PvPSword,
  Castle
} from "./styles";

const Journey = () => {
  const [header, setHeader] = useState({
    avatar: "icons/level1.svg",
    username: "João",
    xp: "70",
    nextLevel: "120",
    ms: "60"
  });

  const levels = ["Level 3", "Level 2", "Level 1"];

  return (
    <Container>
      <Row>
        <SideBar selected={2} />
        <Header
          title="Minha jornada"
          avatar={header.avatar}
          userName={header.username}
          xp={header.xp}
          nextLevel={header.nextLevel}
          ms={header.ms}
        />
      </Row>
      <Row>
        <Column flex="2" flexDirection="column">
          <PvPLogo />
          {levels.map((level, i) => (
            <TimeLineItem key={i}>
              <Circle />
              <MiniBox>{level}</MiniBox>
            </TimeLineItem>
          ))}
          <TimeLineItem />
          <PvPSword />
        </Column>
        <Column flex="5">
          <h1>teste 2</h1>
        </Column>
      </Row>
      <Castle />
    </Container>
  );
};

export default Journey;
