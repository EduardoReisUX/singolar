import { Text } from "../../atoms/Text"
import { PostList } from "../PostList"

type MoreFromAuthorProps = {
  user: {
    id: number
    name: string
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
}

export function MoreFromAuthor({ user, userPosts }: MoreFromAuthorProps) {
  return (
    <section style={{ display: "grid", gap: "1rem", marginBottom: ".75rem" }}>
      <Text as="h4" variant="lg">
        Mais de {user.name}
      </Text>
      <PostList posts={userPosts} />
    </section>
  )
}
