import { motion } from 'motion/react';
import Section from './Section';

const tools = [
  { name: 'Ahrefs', logo: 'https://cdn.worldvectorlogo.com/logos/ahrefs.svg' },
  { name: 'SEMrush', logo: 'https://cdn.worldvectorlogo.com/logos/semrush.svg' },
  { name: 'Ubersuggest', logo: 'https://cdn.worldvectorlogo.com/logos/neil-patel.svg' },
  { name: 'Screaming Frog', logo: 'https://www.screamingfrog.co.uk/wp-content/themes/sf/images/logo.png' },
  { name: 'Search Console', logo: 'https://www.gstatic.com/images/branding/product/2x/search_console_64dp.png' },
  { name: 'GA4', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg' },
  { name: 'GTM', logo: 'https://cdn.worldvectorlogo.com/logos/google-tag-manager.svg' },
  { name: 'Looker Studio', logo: 'https://cdn.worldvectorlogo.com/logos/google-looker-logo.svg' },
  { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
];

export default function Tools() {
  return (
    <Section id="tools" className="bg-[#030303] overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Tech Stack</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Expert Mastery over <span className="text-primary">Advanced Tools.</span>
          </h3>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed max-w-sm font-light">
            I leverage industry-standard software to extract competitive intelligence and technical performance metrics.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass rounded-sm">
              <div className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">99%</div>
              <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Accuracy</div>
            </div>
            <div className="p-6 glass rounded-sm">
              <div className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">Pro</div>
              <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Certified</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square glass rounded-sm p-6 flex flex-col items-center justify-center group transition-all"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-10 h-10 mb-4 object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
                <span className="text-[8px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 text-zinc-500 transition-opacity whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
