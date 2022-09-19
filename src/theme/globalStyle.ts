import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.black};
}

body {
    background-color: ${({ theme }) => theme.colors.white};
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};

    :hover {
        text-decoration: underline;
    }
}
`
