export default function Footer() {
  return (
    <footer className="bg-[#fcfaf7] border-t border-[#e7dfd6]">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-[#4b463f] flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ViralQuoteMachine. New quotes every hour.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )}
