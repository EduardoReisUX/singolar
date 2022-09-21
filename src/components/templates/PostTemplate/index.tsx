import { MainContainer } from "../../atoms/Container"
import { Text } from "../../atoms/Text"
import { Footer } from "../../molecules/Footer"
import { Header } from "../../molecules/Header"

type PostProps = {
  data: {
    userId: string
    id: string
    title: string
    body: string
  }
}

export function PostTemplate({ data }: PostProps): JSX.Element {
  return (
    <>
      <Header />

      <MainContainer>
        <Text as="h2" fontSize="lg" lineHeight="lg">
          {data.title}
        </Text>
      </MainContainer>

      <Footer />
    </>
  )
}
