import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
        outline: 0;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.body };
        background-color: ${({ theme }) => theme.backgroundColors.body };
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    .text-center { text-align: center; }
`

export default GlobalStyles;