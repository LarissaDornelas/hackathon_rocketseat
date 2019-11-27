import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TimeLineItem = styled.div`
  position: relative;
  display: flex;
  margin-left: 70px;
  height: 75px;
  border-left: 4px solid ${colors.orange};
  overflow-x: visible;
`;

export const MiniBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 25px;
  width: 125px;
  height: 20px;
  color: white;
  background-color: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.span`
  position: absolute;
  bottom: 0;
  height: 20px;
  width: 20px;
  border-radius: 15px;
  transform: translateX(-12px);
  background-color: ${colors.orange};
  z-index: 20;
`;

export const PvPLogo = styled.img.attrs({
  src: "icons/pvp.svg",
  width: "75px",
  height: "75px",
  style: {
    position: "relative",
    left: "35px",
    top: "13px"
  }
})``;

export const PvPSword = styled.img.attrs({
  src: "icons/sword.svg",
  width: "75px",
  height: "75px",
  style: {
    position: "relative",
    left: "32px",
    bottom: "30px"
  }
})``;

export const Castle = styled.img.attrs({
  src: "icons/castle.png",
  width: "auto",
  height: "250px",
  style: {
    position: "absolute",
    right: "0",
    bottom: "0px"
  }
})``;

export const Box = styled.div`
  width: 60%;
  background-color: ${colors.gray};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 10px 0 10px;
  z-index: 100;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 36px;
  color: white;
`;

export const Description = styled.p`
  color: white;
`;

export const Button = styled.button`
  width: 40%;
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
