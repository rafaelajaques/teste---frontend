import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{    
    min-height:100%;
    height: 100%;
}

html{
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    transition: 0.3s ease;
    outline: none;
}
`;
