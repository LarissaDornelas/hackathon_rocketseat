import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
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
