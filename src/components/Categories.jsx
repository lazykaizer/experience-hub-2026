
const categories = [
  {
    emoji: '🎓',
    name: 'Campus Experiences',
    hashtag: '#campusexperiences',
    description: 'College life, clubs, placements, fests, hostel stories',
    bg: 'bg-soft-coral',
    accent: 'bg-hot-pink',
  },
  {
    emoji: '💼',
    name: 'Interview Experiences',
    hashtag: '#interviewexperiences',
    description: 'Company-specific stories, rounds, questions, prep tips',
    bg: 'bg-light-purple',
    accent: 'bg-[#9B59B6]',
  },
  {
    emoji: '🧑‍💻',
    name: 'Work Experiences',
    hashtag: '#workexperiences',
    description: 'Internship/full-time journey, tools used, daily life',
    bg: 'bg-soft-blue',
    accent: 'bg-[#3498DB]',
  },
  {
    emoji: '🏫',
    name: 'Admission Experiences',
    hashtag: '#admissionexperiences',
    description: 'College admissions, JoSAA counseling, choice filling',
    bg: 'bg-soft-mint',
    accent: 'bg-gfg-green',
  },
  {
    emoji: '📝',
    name: 'Exam Experiences',
    hashtag: '#examexperiences',
    description: 'JEE, GATE, NEET, CAT, coding contests, certifications',
    bg: 'bg-electric-yellow',
    accent: 'bg-[#E67E22]',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-cream relative">
      <div className="grain absolute inset-0 pointer-events-none opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-rich-black mb-4">
            Choose Your <span className="text-electric-yellow neo-shadow-sm px-2 bg-rich-black text-cream">Category</span>
          </h2>
          <p className="font-body text-lg text-dark-gray max-w-xl mx-auto">
            Pick the category that matches your experience and start sharing.
          </p>
        </div>

        {/* Category Cards Grid (2-2-1 Layout) */}
        <div className="flex flex-wrap gap-6 max-w-5xl mx-auto">
          {categories.map((cat, index) => {
            // Apply full width for the 5th item (index 4) on tablet and up
            const widthClass = index === categories.length - 1 
              ? 'w-full' 
              : 'w-full md:w-[calc(50%-0.75rem)]';
              
            return (
              <div
                key={cat.hashtag}
                className={`neo-card ${cat.bg} p-8 rounded-none flex flex-col items-center text-center ${widthClass}`}
              >
                <div className="text-6xl mb-4">{cat.emoji}</div>
                <h3 className="font-heading text-xl font-bold uppercase text-rich-black mb-2">
                  {cat.name}
                </h3>
                <p className="font-mono text-sm text-gfg-green font-semibold mb-3">
                  {cat.hashtag}
                </p>
                <p className="font-body text-dark-gray mb-6 flex-1">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
