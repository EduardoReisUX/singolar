import { PostCard } from "../../molecules/PostCard"

type PostListProps = {
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

export function PostList({ data }: PostListProps) {
  return (
    <>
      {data.map((data) => (
        <PostCard {...data} />
      ))}
    </>
  )
}
