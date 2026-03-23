import { Check, X } from 'lucide-react'

const doItems = [
  'Post 5–7 experiences max (quality over quantity)',
  'Add photos, offer letters, screenshots',
  'Use correct category hashtag',
  'Engage: like & comment on 10–20 other posts daily',
  'Write 400–500 words, conversational tone',
]

const dontItems = [
  'AI-generated or plagiarized content',
  'Fake likes / bot activity',
  'Spam or self-promotion',
  'Fabricated experiences',
  'Posting more than 7 times (risk of disqualification)',
]

export default function Rules() {
  return (
    <section id="rules" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-rich-black mb-4">
            Participation <span className="text-gfg-green">Guidelines</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {/* Do This Column */}
          <div className="neo-card bg-soft-mint p-8 rounded-none w-full md:w-[calc(50%-0.75rem)] min-w-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="sticker bg-gfg-green text-white p-2">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-rich-black">
                Do This
              </h3>
            </div>
            <ul className="space-y-4">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="neo-border-sm bg-gfg-green text-white p-0.5 mt-1 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-body text-lg text-rich-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Avoid Column */}
          <div className="neo-card bg-soft-coral p-8 rounded-none w-full md:w-[calc(50%-0.75rem)] min-w-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="sticker bg-[#E74C3C] text-white p-2">
                <X size={24} strokeWidth={3} />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-rich-black">
                Avoid This
              </h3>
            </div>
            <ul className="space-y-4">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="neo-border-sm bg-[#E74C3C] text-white p-0.5 mt-1 shrink-0">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="font-body text-lg text-rich-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
