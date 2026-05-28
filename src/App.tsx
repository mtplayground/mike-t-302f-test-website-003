import { PageShell } from './components/layout/PageShell'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { FAQ } from './sections/FAQ'
import { Features } from './sections/Features'
import { FinalCTA } from './sections/FinalCTA'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { WhyFounders } from './sections/WhyFounders'

function App() {
  return (
    <PageShell header={<NavBar />} footer={<Footer />}>
      <Hero />
      <HowItWorks />
      <Features />
      <WhyFounders />
      <FAQ />
      <FinalCTA />
    </PageShell>
  )
}

export default App
