'use client'

export default function CTASection({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section className="bg-gradient-solar py-16 md:py-24 text-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-80 h-80 bg-white rounded-full -top-40 -right-40"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
          Ready to Switch to Solar?
        </h2>
        <p className="text-xl text-dark/70 mb-10 max-w-2xl mx-auto font-medium">
          Join thousands of happy customers who are saving money and helping the environment.
        </p>
        <button
          onClick={onGetQuote}
          className="bg-dark hover:bg-slate-900 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Your Free Solar Audit Today
        </button>
      </div>
    </section>
  )
}
