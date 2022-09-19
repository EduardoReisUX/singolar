import styled from "styled-components"

export const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 45rem;
  padding: 1rem;
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${({ theme }) => theme.fontSizes.logo};

  :hover {
    text-decoration: none;
    cursor: pointer;
  }
`
