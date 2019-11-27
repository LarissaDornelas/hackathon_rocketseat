import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

import SideBar from "../../components/SideBar";

import {
  Container,
  ClassificationSchool,
  ClassificationGlobal,
  Podium,
  First,
  Second,
  Third,
  Crawn
} from "./styles";
import Header from "../../components/Header";
import TableRanking from "../../components/TableRanking";
import { Row } from "../../styles/global";

export default function Home() {
  const [header, setHeader] = useState({
    avatar: "icons/level1.svg",
    username: "João",
    xp: "70",
    nextLevel: "120",
    ms: "60"
  });

  const [schoolRanking, setSchoolRanking] = useState([]);
  const [globalRanking, setGlobalRanking] = useState([]);

  const fetchRankings = async () => {
    try {
      const dataSchool = await api.get("/student/rank/10");
      setSchoolRanking(dataSchool.data);
      const dataGlobal = await api.get("/student/rank");
      setGlobalRanking(dataGlobal.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchRankings();
  }, []);

  return (
    <Container>
      <Row>
        <SideBar selected={3} />
        <Header
          title="Ranking"
          avatar={header.avatar}
          userName={header.username}
          xp={header.xp}
          nextLevel={header.nextLevel}
          ms={header.ms}
        />
      </Row>
      <Row>
        <ClassificationSchool>
          <Crawn image="icons/crawn.svg" />
          <First image="images/joao.jpeg" />
          <Second image="images/ana.jpeg" />
          <Third image="images/diego.jpeg" />
          <Podium icon="icons/ranking.svg" />
        </ClassificationSchool>
        <ClassificationGlobal>
          <Crawn image="icons/crawn.svg" />
          <First image="images/ariana.jpg" />
          <Second image="images/shawn-mendes.jpg" />
          <Third image="images/joao.jpeg" />
          <Podium icon="icons/ranking.svg" />
        </ClassificationGlobal>
      </Row>
      <Row>
        <TableRanking
          list={schoolRanking}
          title="Ranking na minha escola"
          hasSchool
        />
        <TableRanking list={globalRanking} title="Ranking Global" />
      </Row>
    </Container>
  );
}
