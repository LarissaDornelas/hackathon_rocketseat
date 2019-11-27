import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const ClassificationSchool = styled.div`
  display: flex;
  align-items: flex-start;

  position: relative;
  padding-top: 60px;
`;
export const ClassificationGlobal = styled.div`
  display: flex;
  align-items: flex-end

  position: relative;
  padding-top: 60px;
`;

export const Podium = styled.div`
  height: 180px
  width: 180px
  flex: 3;
  background-image: url(${props => (props.icon ? props.icon : "")});
  background-size: 190px
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`;

export const First = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 63px;
  top: 31px;
  border-radius: 50%;
  background-image: url(${props => (props.image ? props.image : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 99;
`;
export const Crawn = styled.div`
  height: 50px;
  width: 41px;
  margin-left: 69px;
  top: -15px;
  border-radius: 50%;
  background-image: url(icons/crawn.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 109;
`;
export const Second = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 0;
  top: 85px;
  border-radius: 50%;

  background-image: url(${props => (props.image ? props.image : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 99;
`;
export const Third = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 129px;
  top: 85px;

  border-radius: 50%;

  background-image: url(${props => (props.image ? props.image : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 99;
`;
