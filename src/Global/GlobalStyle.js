import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{

        --violet100: #f2f1f3;
        --violet200: #d5d1d9;
        --violet300: #b8b0bf;
        --violet400: #9a90a4;
        --violet500: #7d7089;
        --violet600: #5f5669;
        --violet700: #423b48;
        --violet800: #242128;
        --violet900: #070607;

        --primaryFont: 'Baloo 2', cursive;
        --secundaryFont: 'Josefin Sans', sans-serif;

        body{
        width: 100%;
        height: 100vh;
        padding: 2.5rem 1rem;
        background: var(--violet500);
        ::-webkit-scrollbar{
            display: none;
            };
        }
    }
`