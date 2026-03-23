export default function FloatingWidget() {
  return (
    <a
      href="https://www.geeksforgeeks.org/profile/lazygulfam"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3.5 bg-[#0D1117]/80 backdrop-blur-md border border-white/10 
                 shadow-lg hover:shadow-[0_8px_30px_rgba(47,141,70,0.25)] 
                 hover:-translate-y-1 transition-all duration-300 p-2 sm:pr-6 rounded-full animate-slide-in-br-delayed"
      aria-label="Follow me on GfG Connect"
    >
      <div className="relative shrink-0">
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          className="w-12 h-12 rounded-full object-cover border-[2.5px] border-gfg-green/80"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=User&background=2F8D46&color=fff";
          }}
        />
        {/* Mobile green dot indicator */}
        <div className="sm:hidden absolute bottom-0 right-0 w-3.5 h-3.5 bg-gfg-green rounded-full border-2 border-[#0D1117]"></div>
      </div>
      
      <div className="hidden sm:flex flex-col justify-center">
        <span className="text-white font-body font-bold text-sm tracking-tight pt-0.5 group-hover:text-gfg-green transition-colors">
          Let's Connect
        </span>
      </div>
    </a>
  );
}
