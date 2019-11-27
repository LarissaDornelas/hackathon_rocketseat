import React from "react";

import {
  Container,
  CardIcon,
  CardDescription,
  DetailButton,
  Content
} from "./styles";

const Card = props => {
  const { value, subtitle, icon } = props;
  return (
    <>
      <Container>
        <Content>
          <CardIcon icon={icon} />
          <CardDescription>
            <h3>{value}</h3>
            <span>{subtitle}</span>
          </CardDescription>
        </Content>
        <DetailButton> Ver Detalhes </DetailButton>
      </Container>
    </>
  );
};

export default Card;
