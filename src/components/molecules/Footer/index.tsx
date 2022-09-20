import NextLink from "next/link"
import { FooterContainer } from "../../atoms/Container"
import { Link } from "../../atoms/Link"
import { FooterBox } from "./index.style"

export function Footer() {
  return (
    <FooterBox>
      <FooterContainer>
        Feito com amor por{" "}
        <NextLink href={"https://github.com/eduardoReisUX"} passHref>
          <Link linkColor underlineOnHover>
            Eduardo dos Reis
          </Link>
        </NextLink>
      </FooterContainer>
    </FooterBox>
  )
}
