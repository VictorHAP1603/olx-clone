import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background-color: #eee;
    }

    input, textarea, button {
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }

    .container {
        max-width: 1024px;
        height: 100%;
        margin: 0 auto;
    }

    input[disabled] {
        cursor: not-allowed;
        opacity: .6;
    }

`;
