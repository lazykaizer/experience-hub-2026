import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cream border-t-4 border-rich-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <img
              src="/images/gfg-logo.png"
              alt="GeeksforGeeks"
              className="h-14 w-auto mx-auto md:mx-0 mb-3 brightness-0"
            />
            <p className="font-body text-dark-gray font-semibold text-sm">
              A computer science portal for geeks
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-heading font-bold text-sm uppercase tracking-wider text-rich-black">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/geeks_for_geeks/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-hot-pink text-white p-3 hover:bg-[#E1306C]"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/geeksforgeeks"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#0A66C2] text-white p-3 hover:bg-[#004182]"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com/geeksforgeeks"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-cream text-rich-black p-3 hover:bg-electric-yellow"
                aria-label="X / Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Event Hashtag + Links */}
          <div className="text-center md:text-right">
            <p className="font-mono text-gfg-green text-xl font-bold mb-3">
              #gfgconnect
            </p>
            <a
              href="https://www.geeksforgeeks.org/connect"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-gfg-green text-white px-6 py-2 text-sm inline-block hover:bg-gfg-green-dark"
            >
              Visit GfG Connect →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-[3px] border-rich-black/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-dark-gray font-body font-semibold text-sm">
            <p>© 2026 GeeksforGeeks. All rights reserved.</p>
            <p className="italic text-xs">
              GeeksforGeeks reserves the right to modify rules or rewards without prior notice.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-rich-black/10 text-center">
            <p className="text-dark-gray text-xs font-heading font-extrabold uppercase tracking-wide">
              This is an unofficial fan-made website. Not affiliated with or endorsed by GeeksforGeeks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
