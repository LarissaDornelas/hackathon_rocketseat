import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Description = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const AnswersContainer = styled.div`
  display: flex;
  align-self: center;
  background-color: ${colors.gray};
  border-radius: 5px;
  width: 90%;
  padding: 10px 30px 10px 30px;
  margin: 15px 0;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 40%;
  max-width: 300px;
  background-color: ${colors.orange};
  height: 40px;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  &:hover {
    background-color: #da9748;
  }
`;
