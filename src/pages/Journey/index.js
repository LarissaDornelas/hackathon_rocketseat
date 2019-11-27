import React from "react";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Container } from "./styles";

const Journey = () => {
  return (
    <Container>
      <SideBar selected={2} />
      <Header title="Minha jornada" />
    </Container>
  );
};

export default Journey;
