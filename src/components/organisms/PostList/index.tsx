import { PostCard } from "../../molecules/PostCard"
import { PostListContainer } from "./index.styles"

type PostListProps = {
  posts: {
    id: number
    title: string
    body: string
    post_date: string
    isPremium: boolean
    reading_time: string
    userId: number
    name?: string
  }[]
}

export function PostList({ posts: data }: PostListProps) {
  return (
    <PostListContainer>
      {data.map((data) => (
        <PostCard key={data.id} {...data} />
      ))}
    </PostListContainer>
  )
}
