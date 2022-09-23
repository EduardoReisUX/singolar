import styled, { css } from "styled-components"

export type TextStyledProps = {
  variant?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
  fontSize?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
  lineHeight?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
  color?: "black" | "white" | "link" | "cta" | "success" | "error" | "gray"
  font?: "logo" | "normal" | "serif"
  capitalize?: boolean
  capitalizeFirstLetter?: boolean
}

const TextCss = css<TextStyledProps>`
  font-size: ${({ fontSize = "base", theme }) => theme.fontSizes[fontSize]};
  line-height: ${({ lineHeight = "base", theme }) =>
    theme.lineHeight[lineHeight]};
  color: ${({ color = "black", theme }) => theme.colors[color]};
  font-family: ${({ font = "normal", theme }) => theme.fonts[font]};

  ${({ variant, theme }) =>
    variant &&
    `
    font-size: ${theme.fontSizes[variant]};
    line-height: ${theme.lineHeight[variant]};
  `}

  ${({ capitalize }) => capitalize && `text-transform: capitalize;`}

  ${({ capitalizeFirstLetter }) =>
    capitalizeFirstLetter && "::first-letter { text-transform: capitalize; };"}
`

export const Text = styled.p<TextStyledProps>`
  ${TextCss}
`
