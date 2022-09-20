import styled, { css } from "styled-components"

export type TextStyledProps = {
  fontSize?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
  lineHeight?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
}

const TextCss = css<TextStyledProps>`
  font-size: ${({ fontSize = "base", theme }) => theme.fontSizes[fontSize]};
  line-height: ${({ lineHeight = "base", theme }) =>
    theme.lineHeight[lineHeight]};
`

export const Text = styled.p`
  ${TextCss}
`
