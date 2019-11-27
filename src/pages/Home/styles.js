import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const DialogBox = styled.div`
  width: 420px;
  height: 100px;
  background: ${colors.gray};

  p {
    color: #968e8e;
  }
`;
