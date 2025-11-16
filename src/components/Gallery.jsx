import { useEffect, useRef, useState } from 'react'
import QuoteCard from './QuoteCard'

export default function Gallery() {
  const [quotes, setQuotes] = useState([])
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const sentinelRef = useRef(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const loadMore = async () => {
    if (loading || !hasMore) return
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/quotes?skip=${skip}&limit=20`)
      const data = await res.json()
      setQuotes(prev => [...prev, ...data])
      setSkip(prev => prev + data.length)
      if (data.length === 0) setHasMore(false)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMore()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore()
    })
    if (sentinelRef.current) obs.observe(sentinelRef.current)
    return () => obs.disconnect()
  }, [sentinelRef.current])

  return (
    <section id="gallery" className="bg-[#fcfaf7]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quotes.map(q => (
            <QuoteCard key={q.id} quote={q} />
          ))}
        </div>
        <div ref={sentinelRef} className="py-6 text-center text-[#4b463f]">
          {loading ? 'Loading…' : hasMore ? 'Scroll to load more' : 'No more quotes'}
        </div>
      </div>
    </section>
  )
}
