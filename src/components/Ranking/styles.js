import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  width: 46%;
  height: 192px;
`;

export const Table = styled.table`
   
    border-collapse: collapse;
    
    background: ${colors.gray}
    width: 100%;

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
