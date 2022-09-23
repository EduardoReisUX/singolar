import { MainContainer } from "../../atoms/Container"
import { Link } from "../../atoms/Link"
import { Text } from "../../atoms/Text"
import { Footer } from "../../molecules/Footer"
import { Header } from "../../molecules/Header"
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
        {/* Post Details */}
        <div style={{ display: "grid", gap: "2rem", marginBottom: "3rem" }}>
          {/* Post title and info */}
          <div style={{ display: "grid", gap: "1rem" }}>
            <Text as="h2" variant="lg" capitalizeFirstLetter>
              {data.post.title}
            </Text>

            {/* Post info */}
            <div
              style={{
                display: "flex",
                flex: "1 1 0%",
                justifyContent: "space-between",
              }}
            >
              <Link linkColor underlineOnHover href={`/users/${data.user.id}`}>
                {data.user.name}
              </Link>
              <Text as="time" color="gray">
                {data.post.post_date} • {data.post.reading_time}{" "}
                {data.post.isPremium && "• ⭐"}
              </Text>
            </div>
          </div>

          {/* Post content */}
          <Text font="serif" variant="base">
            {data.post.body}
          </Text>
        </div>

        {/* More from author */}
        <section
          style={{ display: "grid", gap: "1rem", marginBottom: ".75rem" }}
        >
          <Text as="h4" variant="lg">
            Mais de {data.user.name}
          </Text>
          <PostList data={data.userPosts} />
        </section>

        {/* Comments section*/}
        <section style={{ display: "grid", gap: "1rem" }}>
          <Text as="h4">Comentários ({data.comments.length})</Text>

          {/* Comments Lists */}
          <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2rem" }}>
            {/* Comment component */}
            {data.comments.map((comment) => (
              <div key={comment.id} style={{ display: "grid", gap: ".5rem" }}>
                {/* Infos */}
                <div style={{ display: "grid", gap: "0" }}>
                  <Text as="strong" capitalize>
                    {comment.name}
                  </Text>
                  <Text as="small" variant="sm" color="gray">
                    {comment.email}
                  </Text>
                </div>

                {/* comment body */}
                <Text>{comment.body}</Text>
              </div>
            ))}
          </div>
        </section>
      </MainContainer>

      <Footer />
    </>
  )
}
