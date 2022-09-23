import styled, { css } from "styled-components"

const ContainerCss = css`
  margin: 0 auto 2rem;
  max-width: 35rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const HeaderContainer = styled.header`
  ${ContainerCss}
`

export const MainContainer = styled.main`
  ${ContainerCss}
  padding-top: 0;
  padding-bottom: 0;
  display: grid;
  gap: 1.5rem;
`

export const FooterContainer = styled.div`
  ${ContainerCss}
  margin-bottom: 0;
  padding: 1rem 1rem 1.5rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);

  font-weight: bold;
  text-align: center;
`
