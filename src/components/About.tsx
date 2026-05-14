import { motion } from 'motion/react';
import Section from './Section';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Decorative frame around image area */}
          <div className="absolute inset-0 border border-primary/20 lg:translate-x-4 lg:translate-y-4 -z-10 bg-primary/5 rounded-sm" />
          <div className="bg-zinc-900 aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-2xl font-display font-bold uppercase tracking-widest text-primary">Iram Mahmood</div>
              <div className="text-zinc-500 text-sm font-medium tracking-[0.2em] uppercase">Professional SEO Expert</div>
            </div>
            <div className="w-full h-full flex items-center justify-center text-zinc-800">
               <svg className="w-24 h-24 opacity-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
               </svg>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-sm shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <Award size={32} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">White Hat SEO</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white leading-tight">
            I help businesses <span className="text-accent underline decoration-accent/30">grow organically.</span>
          </h3>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-lg font-light">
            I am a professional SEO Expert specializing in Keyword Research, On-Page SEO, Off-Page SEO, and GA4 Tracking. I create scalable SEO campaigns that deliver measurable revenue increases.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Advanced Keyword Research",
              "SEO Audits",
              "Technical SEO",
              "Link Building",
              "GA4 & GTM Setup",
              "Local SEO",
              "Competitor Analysis",
              "Content Optimization"
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm text-zinc-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 glass rounded-sm text-white">
            <div className="font-display font-bold text-xl mb-4 italic text-primary/80">"I don't just optimize for search engines; I optimize for conversion and scalability."</div>
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-zinc-500">— Iram Mahmood</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
