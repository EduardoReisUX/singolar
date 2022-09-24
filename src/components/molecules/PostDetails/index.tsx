import { Link } from "../../atoms/Link"
import { Text } from "../../atoms/Text"
import {
  PostDetailsContainer,
  PostHeaderContainer,
  PostInfoContainer,
} from "./index.styles"

type PostDetailsProps = {
  post: {
    userId: number
    id: number
    title: string
    body: string
    post_date: string
    isPremium: boolean
    reading_time: string
  }
  user: {
    id: number
    name: string
  }
}

export function PostDetails({ post, user }: PostDetailsProps) {
  return (
    <PostDetailsContainer>
      <PostHeaderContainer>
        <Text as="h2" variant="lg" capitalizeFirstLetter>
          {post.title}
        </Text>
        <PostInfoContainer>
          <Link linkColor underlineOnHover href={`/users/${user.id}`}>
            {user.name}
          </Link>
          <Text as="time" color="gray">
            {post.post_date} • {post.reading_time} {post.isPremium && "• ⭐"}
          </Text>
        </PostInfoContainer>
      </PostHeaderContainer>

      <Text font="serif" variant="base">
        {post.body}
      </Text>
    </PostDetailsContainer>
  )
}
