import { motion } from 'motion/react';
import Section from './Section';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="bg-dark">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Phase: Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
            Let's Grow Your <br /> <span className="text-accent underline decoration-accent/20">Business with SEO.</span>
          </h3>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed max-w-sm font-light">
            Need help with SEO, GA4 tracking, or technical optimization? Let's discuss your project and engine your growth.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass rounded-sm flex items-center justify-center text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-none mb-1">Direct Communication</div>
                <div className="text-lg font-bold text-white tracking-tighter">hello@irammahmood.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass rounded-sm flex items-center justify-center text-primary">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-none mb-1">WhatsApp Fast Track</div>
                <div className="text-lg font-bold text-white tracking-tighter">+1 (555) 000-0000</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 glass rounded-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-sm p-8 md:p-12 text-white shadow-2xl relative">
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">FullName</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Company Website</label>
              <input 
                type="url" 
                className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Monthly Budget</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white appearance-none cursor-pointer">
                <option className="bg-dark">$1,000 - $3,000</option>
                <option className="bg-dark">$3,000 - $10,000</option>
                <option className="bg-dark">$10,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Goals & Challenges</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white resize-none"
                placeholder="Briefly describe your objectives..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-primary/20"
            >
              Analyze My Presence
            </button>
          </form>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] -z-10" />
        </div>
      </div>
    </Section>
  );
}
