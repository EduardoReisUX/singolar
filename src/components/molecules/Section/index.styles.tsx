import styled from "styled-components"

type SectionContainerProps = {
  marginB?: boolean
}

export const SectionContainer = styled.section<SectionContainerProps>`
  display: grid;
  gap: 1rem;

  ${({ marginB }) => marginB && "margin-bottom: 0.75rem"}
`
