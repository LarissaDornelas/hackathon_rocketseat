import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import SideBar from "../../components/SideBar";

import { Container, DialogBox, FooterImage } from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
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
      let pickSchool = dataSchool.slice(0, 3);
      setSchoolRanking(pickSchool.data);

      const dataGlobal = await api.get("/student/rank");
      let pickGlobal = dataGlobal.slice(0, 3);
      setGlobalRanking(pickGlobal.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchRankings();
  }, []);

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
      <Row justifyContent="space-evenly">
        <TableRanking list={schoolRanking} hasSchool />
        <TableRanking list={globalRanking} />
      </Row>
      <Row position="relative">
        <FooterImage icon="icons/dragon.png" />
        <DialogBox>
          <p>
            Olá, peregrino! A dica de hoje é: “Os problemas são oportunidades
            para se mostrar o que sabe”.
          </p>
        </DialogBox>
      </Row>
    </Container>
  );
}
