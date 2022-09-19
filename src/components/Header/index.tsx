import NextLink from "next/link"
import { HeaderContainer, StyledLink } from "./index.styles"

export function Header() {
  return (
    <HeaderContainer>
      <NextLink href={"/"}>
        <StyledLink>SINGOLAR</StyledLink>
      </NextLink>
    </HeaderContainer>
  )
}
