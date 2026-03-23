import { IndianRupee, Gift, Star, Shirt, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Rewards() {
  return (
    <section id="rewards" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-rich-black mb-4">
            What You Can <span className="text-gfg-green">Win</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {/* Daily Cash Reward */}
          <div className="neo-card bg-electric-yellow p-10 sm:p-12 rounded-none relative w-full md:w-[calc(50%-1rem)] min-w-[320px]">
            {/* Glowing ₹500 badge */}
            <div className="sticker bg-gfg-green text-white px-4 py-2 absolute -top-4 -right-4 rotate-12 text-xl z-10">
              ₹500
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="neo-border-sm bg-white p-3">
                <IndianRupee size={28} className="text-gfg-green" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">
                Daily Cash Reward
              </h3>
            </div>

            <div className="space-y-3 font-body text-lg">
              <div className="flex items-start gap-2">
                <Star size={18} className="text-rich-black mt-1 shrink-0" fill="currentColor" />
                <span>
                  <strong className="font-heading">₹500</strong> per category per day
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Star size={18} className="text-rich-black mt-1 shrink-0" fill="currentColor" />
                <span><strong>5 winners</strong> daily (one per category)</span>
              </div>
              <div className="flex items-start gap-2">
                <Star size={18} className="text-rich-black mt-1 shrink-0" fill="currentColor" />
                <span>Based on genuine engagement + active participation</span>
              </div>
            </div>
          </div>

          {/* Social Media Swag */}
          <div className="neo-card bg-mint p-10 sm:p-12 rounded-none relative w-full md:w-[calc(50%-1rem)] min-w-[320px]">
            <div className="sticker bg-hot-pink text-white px-4 py-2 absolute -top-4 -right-4 -rotate-6 text-sm z-10">
              SWAG! 🎁
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="neo-border-sm bg-white p-3">
                <Gift size={28} className="text-gfg-green" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase">
                Social Media Swag
              </h3>
            </div>

            <div className="space-y-3 font-body text-lg">
              <div className="flex items-start gap-2">
                <Shirt size={18} className="text-rich-black mt-1 shrink-0" />
                <span><strong>GfG T-Shirt</strong> + Swag Kit</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rich-black mt-1 shrink-0">📱</span>
                <span>
                  Follow GfG on{' '}
                  <a href="https://www.instagram.com/geeks_for_geeks/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-gfg-green">Instagram</a>,{' '}
                  <a href="https://www.linkedin.com/company/geeksforgeeks" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-gfg-green">LinkedIn</a>,{' '}
                  <a href="https://twitter.com/geeksforgeeks" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-gfg-green">X</a>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rich-black mt-1 shrink-0">#</span>
                <span>Share your post with <strong className="font-mono text-gfg-green">#gfgconnect</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
