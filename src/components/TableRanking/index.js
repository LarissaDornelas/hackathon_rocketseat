import React from "react";

import { Table, Container, Title } from "./styles";
import { Row } from "../../styles/global";

const TableRanking = props => {
  const { list, hasSchool, title } = props;

  return (
    <Container>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Nome</th>
            {hasSchool && <th>Escola</th>}
            <th>XP</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr>
              <td key={item.id}>{item.position}</td>
              <td></td>
              <td>{item.data.nickname}</td>
              {hasSchool && <td>{item.data.school}</td>}
              <td>{item.data.experience}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableRanking;
