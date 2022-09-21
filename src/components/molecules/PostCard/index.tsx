import { Text } from "../../atoms/Text"
import { PostCardContainer } from "./index.style"

type PostCard = {
  id: number
  title: string
  body: string
  post_date: string
  isPremium: boolean
  reading_time: string
  userId: number
  name: string
}

export function PostCard(data: PostCard) {
  const { id, isPremium, name, post_date, reading_time, title } = data

  return (
    <PostCardContainer key={id} href={`/posts/${id}`}>
      <Text as="small">{name}</Text>
      <Text as="strong">{title}</Text>
      <Text as="time">
        {post_date.slice(4, 10)} • {reading_time}
        {isPremium && " • ⭐"}
      </Text>
    </PostCardContainer>
  )
}
