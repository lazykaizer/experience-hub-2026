import { ArrowRight, Eye } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px] bg-cream">
      {/* Background patterns */}
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-40"></div>
      <div className="grain absolute inset-0 pointer-events-none"></div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-electric-yellow neo-border rotate-12 opacity-20 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-hot-pink neo-border -rotate-6 opacity-20 hidden lg:block"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-mint neo-border rotate-45 opacity-20 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Hero Banner Image */}
        <div className="neo-card rounded-none overflow-hidden mb-8 animate-fade-in">
          <img
            src="/images/hero-banner.png"
            alt="GfG ExperienceHub 2026 - Share Your Real Career Journey"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-delay-1 text-center">
          <div className="flex-1 flex flex-col items-center">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-rich-black mb-4">
              GfG
              <br />
              <span className="text-gfg-green">ExperienceHub</span>
              <br />
              2026
            </h1>
            <p className="font-body text-xl sm:text-2xl text-dark-gray mb-6 max-w-xl">
              Share Your Real Career Journey. <em className="font-semibold text-rich-black">Inspire Thousands.</em>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a
                href="https://www.geeksforgeeks.org/gfg-connect/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn px-8 py-4 bg-gfg-green text-white text-lg flex items-center justify-center gap-2 hover:bg-gfg-green-dark"
              >
                Share Your Story <ArrowRight size={20} />
              </a>
              <a
                href="#categories"
                className="neo-btn px-8 py-4 bg-cream text-rich-black text-lg flex items-center justify-center gap-2 hover:bg-electric-yellow"
              >
                <Eye size={20} /> View Categories
              </a>
            </div>
          </div>

          {/* Date Badge - Sticker style */}
          <div className="sticker bg-hot-pink text-white px-8 py-4 text-center rotate-3 hover:-rotate-2 transition-transform cursor-default mx-auto mt-4 inline-block">
            <p className="text-sm uppercase tracking-wider mb-1">Event Dates</p>
            <p className="text-2xl font-bold leading-tight">23 Mar – 23 Apr</p>
            <p className="text-xl font-bold mt-1">2026</p>
          </div>
        </div>
      </div>

      {/* Stats Marquee Strip (Full Width) */}
      <div className="mt-16 w-full neo-border-y bg-rich-black overflow-hidden animate-fade-in-delay-2 relative z-20 border-t-4 border-b-4 border-rich-black">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 py-4 text-cream font-heading font-bold uppercase text-sm md:text-base tracking-wider">
              <span className="text-electric-yellow">5 Categories</span>
              <span>·</span>
              <span className="text-mint">Daily ₹500 Rewards</span>
              <span>·</span>
              <span className="text-hot-pink">1 Month</span>
              <span>·</span>
              <span className="text-electric-yellow">Real Stories Only</span>
              <span className="mx-4">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
