import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 120px;
  background-color: ${colors.lightGray};
  border-radius: 5px;
  max-width: 22%;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    height: 130px;
    max-width: 23%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const CardIcon = styled.div`
  height: 60px;
  width: 60px;
  flex: 3;
  border-radius: 50px;
  background-image: url(${props => (props.icon ? props.icon : "")});
  background-size: 60px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  padding-right: 15px;
  color: #fff;
  justify-content: center;
  align-items: flex-end;
  color: ${colors.light};
  overflow: hidden;

  h3 {
    font-size: 36px;
  }
  span {
    text-align: right;
  }
`;

export const DetailButton = styled.button`
  background-color: ${colors.gray};
  outline: none;
  border: none;
  width: 100%;
  height: 21px;
  font-size: 13px;
  border-radius: 0 5px;
  color: #fff;

  &:hover {
    background-color: #696f75;
  }
`;
