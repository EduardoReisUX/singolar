import { MainContainer } from "../../atoms/Container"
import { Text } from "../../atoms/Text"
import { Footer } from "../../molecules/Footer"
import { Header } from "../../molecules/Header"
import { PostList } from "../../organisms/PostList"

type HomeProps = {
  data: {
    id: number
    title: string
    body: string
    post_date: string
    isPremium: boolean
    reading_time: string
    userId: number
    name: string
  }[]
}

export function HomeTemplate({ data }: HomeProps): JSX.Element {
  return (
    <>
      <Header />

      <MainContainer>
        <Text as="h2" fontSize="lg" lineHeight="lg">
          Todas as publicações
        </Text>
        <PostList data={data} />
      </MainContainer>

      <Footer />
    </>
  )
}
