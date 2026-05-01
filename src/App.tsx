import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-4 pb-16 sm:gap-14 sm:px-6 sm:py-5 md:gap-20">
      <Nav brand="Studio" />
      <main className="flex flex-col gap-20 sm:gap-28 md:gap-32">
        <Hero />
        <Pricing />
        <Gallery />
      </main>
    </div>
  )
}

export default App
