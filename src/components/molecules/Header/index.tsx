import NextLink from "next/link"
import { HeaderContainer } from "../../atoms/Container"
import { Link } from "../../atoms/Link"

export function Header() {
  return (
    <HeaderContainer>
      <NextLink href={"/"} passHref>
        <Link fontSize="logo" isLogo>
          SINGOLAR
        </Link>
      </NextLink>
    </HeaderContainer>
  )
}
