import type { GetStaticProps } from "next"
import Head from "next/head"
import { HomeTemplate } from "../components/templates/HomeTemplate"

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

      <HomeTemplate data={data} />
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
          post_date: String(new Date()).slice(4, 10),
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
