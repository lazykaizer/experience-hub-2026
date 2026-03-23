import { Trophy, Globe, Handshake } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    emoji: '🏆',
    title: 'Win Daily Rewards',
    description: '₹500 cash per category per day — real rewards for real stories.',
    bg: 'bg-electric-yellow',
  },
  {
    icon: Globe,
    emoji: '🌐',
    title: 'Build Visibility',
    description: 'Get noticed in the tech community. Your profile, your brand.',
    bg: 'bg-mint',
  },
  {
    icon: Handshake,
    emoji: '🤝',
    title: 'Help Others',
    description: 'Your story can change someone\'s career path forever.',
    bg: 'bg-hot-pink',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-rich-black mb-4">
            What is <span className="text-gfg-green">ExperienceHub</span>?
          </h2>
          <p className="font-body text-lg text-dark-gray max-w-2xl mx-auto">
            A month-long event by GeeksforGeeks where you share your real experiences and inspire the community.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`neo-card ${feature.bg} p-8 rounded-none animate-fade-in-delay-${index + 1} flex flex-col items-center text-center`}
            >
              <div className="text-6xl mb-4">{feature.emoji}</div>
              <h3 className="font-heading text-2xl font-bold uppercase text-rich-black mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-rich-black text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
