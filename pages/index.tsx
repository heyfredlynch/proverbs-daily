import type { NextPage } from 'next'
import ProverbsDashboard from '../components/ProverbsDashboard'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <ProverbsDashboard />
      </main>
    </div>
  )
}

export default Home