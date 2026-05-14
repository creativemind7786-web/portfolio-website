import { motion } from 'motion/react';
import Section from './Section';
import Button from './Button';
import { ExternalLink, TrendingUp, Users, MousePointer2 } from 'lucide-react';

const projects = [
  {
    title: "Organic Traffic Surge",
    category: "Full SEO Strategy",
    stats: [
      { label: "Traffic", value: "+250%", icon: TrendingUp },
      { label: "Keywords", value: "800+", icon: MousePointer2 },
      { label: "Users", value: "200k/mo", icon: Users },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Improved keyword rankings and organic visibility for a high-growth tech platform."
  },
  {
    title: "Local SEO Growth",
    category: "Map Optimization",
    stats: [
      { label: "Calls", value: "+400%", icon: TrendingUp },
      { label: "Rank", offset: 1, value: "#1 Top", icon: MousePointer2 },
      { label: "Views", value: "25k/mo", icon: Users },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800",
    description: "Ranked local business on Google Maps and improved Business Profile optimization."
  },
  {
    title: "Analytics Implementation",
    category: "GA4 & Tracking",
    stats: [
      { label: "Events", value: "100+", icon: TrendingUp },
      { label: "Accuracy", value: "99%", icon: MousePointer2 },
      { label: "Reports", value: "Custom", icon: Users },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Configured advanced conversion tracking and custom GA4 events for data-driven decisions."
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Measurable <span className="text-accent underline decoration-accent/20">Success.</span>
          </h3>
        </div>
        <Button href="#contact" variant="outline">
          Full Catalog
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="group glass rounded-sm overflow-hidden flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4 glass px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                {project.category}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h4 className="text-xl font-bold mb-4 font-display text-white">{project.title}</h4>
              <p className="text-zinc-500 text-sm mb-8 flex-1 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-2 p-4 bg-white/5 border border-white/5 rounded-sm">
                {project.stats.map((stat, j) => (
                  <div key={j} className="text-center">
                    <div className="text-primary mb-1 flex justify-center">
                      <stat.icon size={14} />
                    </div>
                    <div className="font-bold text-xs text-white tracking-tighter">{stat.value}</div>
                  </div>
                ))}
              </div>

              <button className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary group-hover:gap-4 transition-all">
                The Narrative <ExternalLink size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
