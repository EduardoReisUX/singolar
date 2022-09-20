import { LinkStyled, LinkStyledProps } from "./index.style"

type LinkProps = Omit<LinkStyledProps, "fontSize"> & {
  href?: string
  children: React.ReactNode
  fontSize?: "logo" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
}

export function Link({
  children,
  linkColor = false,
  isLogo = false,
  fontSize = "base",
  underlineOnHover = false,
  href,
}: LinkProps) {
  return (
    <LinkStyled
      linkColor={linkColor}
      isLogo={isLogo}
      underlineOnHover={underlineOnHover}
      fontSize={fontSize}
      href={href}
    >
      {children}
    </LinkStyled>
  )
}
