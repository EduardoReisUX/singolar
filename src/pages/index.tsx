import Head from "next/head"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Página inicial | Singolar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h2>Olá, mundo!</h2>
    </>
  )
}
