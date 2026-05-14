import { motion } from 'motion/react';
import Section from './Section';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, RetailHub",
    text: "Excellent SEO work. Our rankings and traffic improved significantly within months.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "James White",
    role: "Director, DataPulse",
    text: "Professional GA4 setup and accurate conversion tracking. Highly recommended for any serious business.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Sarah Miller",
    role: "Founder, GreenSpace",
    text: "Great communication and powerful SEO strategy implementation. Our local presence has never been stronger.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#030303]">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Client Feedback</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
          Trusted by <span className="text-accent underline decoration-accent/20">Businesses Worldwide.</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-10 glass rounded-sm relative"
          >
            <Quote className="absolute top-8 right-8 text-white/5" size={60} />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={12} fill="#2563eb" className="text-primary" />
              ))}
            </div>

            <p className="text-zinc-400 text-lg mb-8 relative z-10 italic font-light leading-relaxed">
              "{t.text}"
            </p>

            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" />
              <div>
                <div className="font-bold text-white text-sm uppercase tracking-widest">{t.name}</div>
                <div className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
