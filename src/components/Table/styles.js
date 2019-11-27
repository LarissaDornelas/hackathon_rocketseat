import React from "react";
import { Row, Column } from "../../styles/global";

import { Container } from "./styles";

const columns = [
  {
    name: "",
    payload: "image"
  },
  {
    name: "Nome",
    payload: "userName"
  },
  {
    name: "XP",
    payload: "xp"
  }
];

const Table = props => {
  const { columns, rows } = props;

  return (
    <Container>
      <Row>
        {columns.map((item, index) => (
          <Column key={index}>{item.name}</Column>
        ))}
      </Row>
      {rows.map((row, index) => (
        <Row>
          {columns.map((column, i) => (
            <Column>{row[column.payload]}</Column>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Table;
