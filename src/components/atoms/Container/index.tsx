import styled, { css } from "styled-components"

const ContainerCss = css`
  margin: 0 auto;
  max-width: 45rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const HeaderContainer = styled.header`
  ${ContainerCss}
`

export const MainContainer = styled.main`
  ${ContainerCss}
`

export const FooterContainer = styled.footer`
  ${ContainerCss}
  padding: 1rem 1rem 1.5rem;

  font-weight: bold;
  text-align: center;
`
