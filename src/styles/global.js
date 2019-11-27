import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        overflow-x:hidden;
        font-size: 1em;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: ${colors.dark};
    }
    button {
        cursor: pointer;
    }
`;

export const Row = styled.div`
  display: flex;
  width: ${props => props.width || null}%;
  justify-content: ${props => props.justifyContent || "space-around"};
  align-items: ${props => props.alignItems || null};
  flex: ${props => props.flex || null};
  border-top: ${props => props.borderTop || "0px solid #fff"};
  border-bottom: ${props => props.borderBottom || "0px solid #fff"};
  margin: ${props => props.margin || "0 0 10px 0"};
  padding: ${props => props.padding || "0 0 0 0"};
  background-color: ${props => props.backgroundColor || null};
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex: ${props => props.flex || null};
  flex-direction: ${props => props.flexDirection || "column"};
  margin: ${props => props.margin || "0 0"}px;
  border: ${props => props.border || "0 solid transparent"};
  background-color: ${props => props.backgroundColor || "transparent"};
  min-width: ${props => props.minWidth || "0px"};
  justify-content: ${props => props.justifyContent || null};
  align-items: ${props => props.alignItems || null};
  padding: ${props => props.padding || "0 0 0 0"};
`;
