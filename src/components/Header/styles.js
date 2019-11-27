import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  height: 160px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;

  h1 {
    font-size: 30px;
    color: white;
  }
`;

export const ScorePanel = styled.div`
  width: 500px;
  height: 133px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-image: url(${props => (props.avatar ? props.avatar : "")});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.lightGray};
  z-index: 10;
`;

export const HealthsPanel = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.lightGray};
  flex: 1;
  display: flex;
  transform: translateX(-50px);
  flex-direction: column;
  justify-content: space-around;
  padding-right: 5px;
`;

export const XP = styled.span`
  position: relative;
  background-color: ${colors.lightYellow};
  width: 100%;
  height: 30px;
  display: flex;

  span {
    z-index: 20;
    line-height: 30px;
    font-family: "Press Start 2P", cursive;
    font-size: 0.8rem;
    color: ${colors.dark};
    padding: 0 150px 0 75px;
  }
`;

export const MS = styled.span`
  position: relative;
  background-color: ${colors.lightBlue};
  width: 100%;
  height: 30px;
  display: flex;

  span {
    z-index: 20;
    line-height: 30px;
    font-family: "Press Start 2P", cursive;
    font-size: 0.8rem;
    color: ${colors.dark};
    padding: 0 150px 0 75px;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  width: ${props => (props.progress ? props.progress : 0)}%;
  background-color: ${props => (props.ms ? colors.blue : colors.yellow)};
  height: 30px;
  left: 0;
  top: 0;
`;

export const UserName = styled.span`
  position: absolute;
  line-height: 30px;
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
  color: white;
  bottom: 0px;
  left: 90px;
`;
