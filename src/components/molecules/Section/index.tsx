import React from "react"
import { Text } from "../../atoms/Text"
import { SectionContainer } from "./index.styles"

type SectionProps = {
  title: string
  children: React.ReactNode
  marginB?: boolean
}

export function Section({ title, children, marginB }: SectionProps) {
  return (
    <SectionContainer marginB={marginB}>
      <Text as="h4" variant="lg">
        {title}
      </Text>
      {children}
    </SectionContainer>
  )
}
