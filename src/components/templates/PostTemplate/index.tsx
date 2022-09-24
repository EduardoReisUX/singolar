import { MainContainer } from "../../atoms/Container"
import { Text } from "../../atoms/Text"
import { Footer } from "../../molecules/Footer"
import { Header } from "../../molecules/Header"
import { PostDetails } from "../../molecules/PostDetails"
import { Section } from "../../molecules/Section"
import { CommentList } from "../../organisms/CommentList"
import { MoreFromAuthor } from "../../organisms/MoreFromAuthor"
import { PostList } from "../../organisms/PostList"

type PostProps = {
  data: {
    post: {
      userId: number
      id: number
      title: string
      body: string
      post_date: string
      isPremium: boolean
      reading_time: string
    }
    userPosts: {
      userId: number
      id: number
      title: string
      body: string
      post_date: string
      isPremium: boolean
      reading_time: string
    }[]
    user: {
      id: number
      name: string
    }
    comments: {
      id: number
      name: string
      email: string
      body: string
    }[]
  }
}

export function PostTemplate({ data }: PostProps): JSX.Element {
  return (
    <>
      <Header />

      <MainContainer>
        <PostDetails post={data.post} user={data.user} />

        <Section title={`Mais de ${data.user.name}`}>
          <PostList posts={data.userPosts} />
        </Section>

        <Section title={`Comentários (${data.comments.length})`} marginB>
          <CommentList comments={data.comments} />
        </Section>
      </MainContainer>

      <Footer />
    </>
  )
}
