import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      link: string
      cta: string
      success: string
      error: string
      gray: string
    }

    fonts: {
      logo: string
      normal: string
      serif: string
    }

    fontSizes: {
      logo: string
      "2xl": string
      xl: string
      lg: string
      base: string
      sm: string
      xs: string
    }
    fontWeight: {
      normal: string
      bold: string
    }
    lineHeight: {
      logo: string
      "2xl": string
      xl: string
      lg: string
      base: string
      sm: string
      xs: string
    }
  }
}
