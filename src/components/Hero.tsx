import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Search, Star } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Background Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-[10px] uppercase tracking-widest rounded-full font-semibold mb-6">
            SEO & Digital Marketing Specialist
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
            SEO Expert & <br />
            <span className="text-accent">Growth Specialist</span>
          </h1>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed font-light">
            I help businesses increase rankings, traffic, and conversions through advanced SEO strategies and data-driven GA4 solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="primary">
              Get Free SEO Audit <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button href="#portfolio" variant="outline">
              Hire Me
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-40 grayscale">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">250%+</span>
              <span className="text-[10px] uppercase tracking-widest text-white">Traffic Growth</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">150+</span>
              <span className="text-[10px] uppercase tracking-widest text-white">Success Stories</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="glass p-6 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-zinc-800 rounded-full" />
                <div className="w-2 h-2 bg-zinc-800 rounded-full" />
                <div className="w-2 h-2 bg-zinc-800 rounded-full" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Live Performance</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[85, 45, 95, 60].map((h, i) => (
                <div key={i} className="h-40 bg-white/5 rounded-sm relative flex items-end overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="w-full bg-primary/20 border-t border-primary"
                  />
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-sm p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <div className="text-primary text-[10px] mb-1 uppercase tracking-widest font-bold">Organic Traffic</div>
                <div className="text-3xl font-bold mb-4">+325.8%</div>
                <div className="h-12 flex items-end gap-1">
                  {[4, 6, 8, 12, 10, 15, 20, 18, 25].map((w, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${w * 2}%` }}
                      transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                      className="flex-1 bg-primary/40 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-sm shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent/20 text-accent rounded-sm flex items-center justify-center">
                <Search size={20} />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Keyword Rank</div>
                <div className="font-bold text-white text-sm">#1 Global</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
