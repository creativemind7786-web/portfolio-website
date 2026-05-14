import { Rocket, Linkedin, Twitter, Github, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-xs group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                IM
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase text-white">
                Iram Mahmood
              </span>
            </a>
            <p className="text-zinc-500 text-sm max-w-sm mb-8 leading-relaxed font-light">
              Strategic SEO consultant helping businesses navigate search semantics and architectural growth through data-driven organic traffic optimization.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 glass rounded-sm flex items-center justify-center text-zinc-500 hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-8 text-primary">Service Suite</h4>
            <ul className="space-y-4">
              {['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Off-Page SEO', 'GA4 Tracking'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-zinc-500 text-xs hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-8 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {['About Me', 'Case Studies', 'SEO Tools', 'Insights', 'Booking'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
            © 2024 Iram Mahmood. Helping businesses grow organically.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.3em]"
          >
            Ascend 
            <div className="w-8 h-8 glass rounded-sm flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
