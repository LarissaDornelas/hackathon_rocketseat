import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 46.4%;
`;

export const Table = styled.table`
   

    background: ${colors.gray}
    width: 100%;
    border-radius: 4px;

    th{
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
        text-transform: uppercase;
      }

      td{
        padding: 15px;
        text-align: left;
        vertical-align:middle;
        font-weight: 300;
        font-size: 12px;
        color: #fff;
        border-bottom: solid 1px rgba(255,255,255,0.1);
      }


`;

export const Title = styled.span`
  color: #fff;
`;
