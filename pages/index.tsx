import type { NextPage } from 'next'
import Head from 'next/head'
import ProverbsDashboard from '../components/ProverbsDashboard'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proverbs Daily Blitz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">
        <ProverbsDashboard />
      </main>
    </>
  )
}

export default Home