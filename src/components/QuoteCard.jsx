export default function QuoteCard({ quote }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#e7dfd6]">
      <img src={quote.image_url} alt={quote.text} className="w-full aspect-[4/5] object-cover" />
      <div className="p-4 space-y-3">
        <p className="text-sm text-[#4b463f] line-clamp-3">{quote.text}</p>
        <div className="flex gap-2 flex-wrap">
          {quote.affiliate_links?.slice(0,3).map((u, i) => (
            <a
              key={i}
              href={u}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#F5EFE6] hover:bg-[#efe7dc] text-[#2e2a27] px-3 py-1 rounded-full border border-[#e7dfd6]"
            >
              Amazon Pick {i+1}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
