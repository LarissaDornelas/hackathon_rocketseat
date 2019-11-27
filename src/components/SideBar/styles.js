import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 100vh;
  align-items: center;
  background-color: ${colors.gray};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;

export const Item = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors.lightGray};
  border-left: 4px solid
    ${props => (props.enable ? colors.orange : colors.gray)};
`;
