import React, { useState } from "react";

import SideBar from "../../components/SideBar";

import { Container, CardContainer } from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Row } from "../../styles/global";

function Home() {
  const [header, setHeader] = useState({
    avatar: "icons/level1.svg",
    username: "João",
    xp: "70",
    nextLevel: "120",
    ms: "60"
  });

  return (
    <Container>
      <Row>
        <SideBar selected={1} />
        <Header
          title="Informações"
          avatar={header.avatar}
          userName={header.username}
          xp={header.xp}
          nextLevel={header.nextLevel}
          ms={header.ms}
        />
      </Row>
      <Row justifyContent="space-evenly">
        <Card value="70" subtitle="xp total adquirida" icon="icons/star.svg" />
        <Card
          value="4/5"
          subtitle="conquistas totais obtidas"
          icon="icons/bau.svg"
        />
        <Card
          value="70/105"
          subtitle="missões finalizadas"
          icon="icons/sword.svg"
        />
        <Card value="70" subtitle="xp total adquirida" icon="icons/star.svg" />
      </Row>
    </Container>
  );
}

export default Home;
