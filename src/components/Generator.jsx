import { useState } from 'react'

export default function Generator() {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('motivational')
  const [imgUrl, setImgUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [premium, setPremium] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onGenerate = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/quotes/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text || undefined, category, premium })
      })
      const data = await res.json()
      setImgUrl(data.image_url)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-[#e7dfd6]">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your quote or leave blank for AI"
              className="flex-1 rounded-xl border border-[#e7dfd6] px-4 py-3 bg-white"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-[#e7dfd6] px-4 py-3 bg-white"
            >
              <option value="motivational">Motivational</option>
              <option value="love">Love</option>
              <option value="business">Business</option>
              <option value="fitness">Fitness</option>
              <option value="funny">Funny</option>
            </select>
            <button
              onClick={onGenerate}
              disabled={loading}
              className="rounded-xl bg-[#2e2a27] text-white px-6 py-3 hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Generating…' : 'Generate'}
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input id="premium" type="checkbox" checked={premium} onChange={e=>setPremium(e.target.checked)} />
            <label htmlFor="premium" className="text-sm text-[#4b463f]">Premium (no watermark)</label>
          </div>
          {imgUrl && (
            <div className="mt-6">
              <img src={imgUrl} alt="Generated" className="w-full max-w-md rounded-xl border border-[#e7dfd6]" />
              <p className="text-xs text-[#4b463f] mt-2">Free users include a subtle watermark. Upgrade for commercial license.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
