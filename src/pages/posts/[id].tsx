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

type Props = {
  data: {
    userId: string
    id: string
    title: string
    body: string
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default function Post({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.title} | Singolar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostTemplate data={data} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params!

  const postsData: IPostResponseData = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json()

  console.log()

  const formattedData = {
    ...postsData,
    id: String(postsData.id),
    userId: String(postsData.userId),
  }

  return {
    props: { data: formattedData },
  }
}
