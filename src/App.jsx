import { useRef } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Generator from './components/Generator'
import Footer from './components/Footer'

function App() {
  const genRef = useRef(null)
  const onGenerate = () => {
    if (genRef.current) {
      genRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#2e2a27]">
      {/* Simple Ad spaces (AdSense-ready placeholders) */}
      <div className="w-full text-center text-xs text-[#8a837a] py-2 bg-[#F5EFE6]">Ad space</div>

      <Hero onGenerate={onGenerate} />
      <Gallery />
      <div ref={genRef}>
        <Generator />
      </div>
      <Footer />

      <div className="w-full text-center text-xs text-[#8a837a] py-2 bg-[#F5EFE6]">Ad space</div>
    </div>
  )
}

export default App
