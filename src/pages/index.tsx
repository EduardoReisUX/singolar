import type { GetStaticProps } from "next"
import Head from "next/head"
import { MainContainer } from "../components/atoms/Container"
import { Footer } from "../components/molecules/Footer"
import { Header } from "../components/molecules/Header"

type TPostResponseData = {
  userId: number
  id: number
  title: string
  body: string
}[]

type TUsersResponseData = {
  id: number
  name: string
  username: string
  email: string
}[]

type THomeProps = {
  data: TPostResponseData
}

type Props = {
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

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Página inicial | Singolar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainContainer style={{ display: "grid", gap: "1rem" }}>
        <h2>Todas as publicações</h2>
        {data.map(({ title, id, isPremium, name, post_date, reading_time }) => (
          <a key={id} href={`/post?id=${id}`}>
            <small>{name}</small>
            <br />
            <strong>{title}</strong>
            <br />
            <p>
              {post_date.slice(0, 10)} • {reading_time}
              {isPremium && " • ⭐"}
            </p>
          </a>
        ))}
      </MainContainer>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData: TPostResponseData = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json()

  let usersId = new Set<Number>()
  postsData.forEach(({ userId }) => {
    usersId.add(userId)
  })

  const onePostEachAuthor: TPostResponseData = []
  usersId.forEach((id) => {
    const post = postsData.find(({ userId }) => userId === id)
    if (!post) return

    onePostEachAuthor.push(post)
  })

  // ------------

  const usersData: TUsersResponseData = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json()

  const allUsers = usersData.map(({ id: userId, name }) => ({ userId, name }))

  const usersAndPost = []
  for (const user of allUsers) {
    for (const post of onePostEachAuthor) {
      if (user.userId === post.userId) {
        usersAndPost.push({
          ...post,
          post_date: String(new Date()),
          isPremium: Math.random() > 0.5,
          reading_time: "2 min read",
          ...user,
        })
      }
    }
  }

  return {
    props: { data: usersAndPost },
  }
}
