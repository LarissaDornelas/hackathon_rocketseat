import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const FooterImage = styled.div`
  height: 100px;
  width: 200px;
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  border-radius: 50px;
  background-image: url(${props => (props.icon ? props.icon : "")});
  background-size: 133px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  position: absolute;
  -webkit-transform: translateX(-180px);
  -ms-transform: translateX(-180px);
  transform: translateX(-209px);
`;
export const DialogBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 420px;
  height: 100px;
  bottom: 0;
  position: relative;
  background: ${colors.gray};

  p {
    color: #968e8e;
  }
`;
