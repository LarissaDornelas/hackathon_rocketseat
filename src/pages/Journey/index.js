import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
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
  Castle,
  Box,
  Title,
  Description,
  Button
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Creators as MissionsActions } from "../../store/ducks/missions";

const Journey = ({ history }) => {
  const dispatch = useDispatch();
  const [header] = useState({
    avatar: "icons/level1.svg",
    username: "João",
    xp: "70",
    nextLevel: "120",
    ms: "60"
  });

  const levels = ["Level 3", "Level 2", "Level 1"];

  const handleStartMission = async () => {
    const { data } = await api.get("/question");
    const missions = [];
    data.forEach(d => {
      if (d.data.type === "multesc") missions.push(d.data);
    });
    dispatch(MissionsActions.setMissions(missions));
    history.push("/mission");
  };

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
        <Column flex="5" justifyContent="center">
          <Box>
            <Row>
              <Column flex="2">
                <img src="/icons/monster.svg" alt="Monster Level" />
              </Column>
              <Column
                flex="5"
                justifyContent="space-around"
                padding="0 0 0 5px"
              >
                <Row justifyContent="flex-start">
                  <Title>Nível 3</Title>
                </Row>
                <Row justifyContent="flex-start">
                  <Description>
                    Bem vindo de volta Peregrino, está pronto para mais uma
                    aventura cheia de tecnologia e conhecimentos?
                  </Description>
                </Row>
                <Row justifyContent="flex-end">
                  <Button type="button" onClick={handleStartMission}>
                    Iniciar missão
                  </Button>
                </Row>
              </Column>
            </Row>
          </Box>
        </Column>
      </Row>
      <Castle />
    </Container>
  );
};

export default withRouter(Journey);
