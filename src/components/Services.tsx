import { motion } from 'motion/react';
import Section from './Section';
import { 
  Search, 
  Globe, 
  Settings, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  Zap,
  MapPin,
  FileSearch,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    desc: "Find high-ranking and low-competition keywords to grow your website traffic and target the right audience."
  },
  {
    icon: Globe,
    title: "On-Page SEO",
    desc: "Optimize titles, meta descriptions, headings, internal linking, and content structure for better rankings."
  },
  {
    icon: ShieldCheck,
    title: "Off-Page SEO",
    desc: "Build high-quality backlinks and improve website authority using white-hat SEO strategies."
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: "Fix crawling, indexing, speed, Core Web Vitals, and technical issues for maximum performance."
  },
  {
    icon: PieChart,
    title: "GA4 Tracking",
    desc: "Professional GA4 setup, conversion tracking, event tracking, and analytics reporting for business decisions."
  },
  {
    icon: Zap,
    title: "Google Tag Manager",
    desc: "Configure GTM for advanced tracking, pixels, events, and complex marketing integrations."
  }
];

export default function Services() {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Expert Services</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
          Growth-Focused <span className="text-accent">SEO Solutions.</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 glass rounded-sm hover:border-primary/40 transition-all group"
          >
            <div className="w-12 h-12 bg-white/5 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors border border-white/5">
              <service.icon size={24} />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-white">{service.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-light">
              {service.desc}
            </p>
            <a href="#contact" className="text-[10px] uppercase tracking-widest text-primary font-bold inline-flex items-center gap-2 group/link">
              Service Details 
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
