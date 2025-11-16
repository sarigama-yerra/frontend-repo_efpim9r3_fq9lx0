import { motion } from 'framer-motion'

export default function Hero({ onGenerate }) {
  return (
    <section className="bg-[#F5EFE6] text-[#2e2a27]">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          10 Million+ Quotes Viewed • New Ones Every Hour
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-[#4b463f]">
          ViralQuoteMachine generates aesthetic quote images and posts everywhere automatically.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={onGenerate}
            className="rounded-full bg-[#2e2a27] text-white px-6 py-3 text-lg hover:opacity-90 transition"
          >
            Generate Your Own Quote
          </button>
          <a
            href="#gallery"
            className="rounded-full border border-[#2e2a27]/20 px-6 py-3 text-lg hover:bg-white/50"
          >
            Browse Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
