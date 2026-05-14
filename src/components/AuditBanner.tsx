import { motion } from 'motion/react';
import Button from './Button';
import { ShieldCheck } from 'lucide-react';

export default function AuditBanner() {
  return (
    <div className="px-6 md:px-12 lg:px-24 mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto glass rounded-sm p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20"
      >
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-12 h-12 bg-primary/20 text-primary rounded-sm flex items-center justify-center mb-6">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Is Your Website Losing Revenue <br /> <span className="text-accent">to Slow Load Times?</span>
          </h3>
          <p className="text-zinc-500 max-w-md font-light leading-relaxed">
            I'll perform a deep-dive technical SEO audit of your site and provide a roadmap to dominate your competitors.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="text-sm font-bold text-white uppercase tracking-widest mb-2">Available for May 2024 Slots</div>
          <Button href="#contact" variant="primary" className="!px-12 !py-6 !text-base">
            Claim Your Free Audit
          </Button>
          <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">No commitment required</div>
        </div>

        {/* Decorative background overlay */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-primary/10 -z-10" />
      </motion.div>
    </div>
  );
}
