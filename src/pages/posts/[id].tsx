import type { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"
import { PostTemplate } from "../../components/templates/PostTemplate"

interface IPostResponseData {
  userId: number
  id: number
  title: string
  body: string
}

interface IUserResponseData {
  id: number
  name: string
  username: string
  email: string
}

interface IPostCommentsResponseData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface IFormattedPostComments {
  id: number
  name: string
  email: string
  body: string
}

interface IFormattedPost extends IPostResponseData {
  post_date: string
  isPremium: boolean
  reading_time: string
}

type Props = {
  data: {
    post: IFormattedPost
    userPosts: IFormattedPost[]
    user: Pick<IUserResponseData, "id" | "name">
    comments: IFormattedPostComments[]
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default function Post({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.post.title} | Singolar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostTemplate data={data} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "21" } },
      { params: { id: "31" } },
      { params: { id: "41" } },
    ],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params!

  const post: IPostResponseData = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json()

  const formattedPost: IFormattedPost = {
    ...post,
    post_date: String(new Date()).slice(4, 10),
    isPremium: Math.random() > 0.5,
    reading_time: "2 min read",
  }

  const userPosts: IPostResponseData[] = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${post.userId}`
    )
  ).json()

  const formattedUserPosts: IFormattedPost[] = userPosts.map((post) => ({
    ...post,
    post_date: String(new Date()).slice(4, 10),
    isPremium: Math.random() > 0.5,
    reading_time: "2 min read",
  }))

  const userData: IUserResponseData = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
  ).json()

  const formattedUserData: Pick<IUserResponseData, "id" | "name"> = {
    id: userData.id,
    name: userData.name,
  }

  const commentsData: IPostCommentsResponseData[] = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments/?postId=${post.id}`
    )
  ).json()

  const formattedComments: IFormattedPostComments[] = commentsData.map(
    (comment) => ({
      id: comment.id,
      name: comment.name,
      email: comment.email,
      body: comment.body,
    })
  )

  return {
    props: {
      data: {
        post: formattedPost,
        userPosts: formattedUserPosts,
        user: formattedUserData,
        comments: formattedComments,
      },
    },
  }
}
