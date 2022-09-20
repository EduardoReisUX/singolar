import styled from "styled-components"

export interface LinkStyledProps {
  linkColor?: boolean
  isLogo?: boolean
  underlineOnHover?: boolean
  fontSize: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
}

export const LinkStyled = styled.a<LinkStyledProps>`
  text-decoration: none;

  font-family: ${({ isLogo, theme }) =>
    isLogo ? theme.fonts.logo : theme.fonts.normal};
  color: ${({ linkColor, theme }) =>
    linkColor ? theme.colors.link : theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ fontSize, theme }) => theme.fontSizes[fontSize]};
  letter-spacing: ${({ isLogo }) => isLogo && "2px"};

  :hover {
    text-decoration: ${({ underlineOnHover }) =>
      underlineOnHover ? "underline" : "none"};
  }
`
