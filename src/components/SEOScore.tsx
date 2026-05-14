import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from './Section';
import { Check, Shield, Search, TrendingUp, AlertCircle } from 'lucide-react';
import Button from './Button';

export default function SEOScore() {
  const [score, setScore] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [url, setUrl] = useState('');
  const [showResults, setShowResults] = useState(false);

  const startAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsScanning(true);
    setShowResults(false);
    setScore(0);
    
    setTimeout(() => {
      setIsScanning(false);
      setShowResults(true);
      setScore(78);
    }, 2500);
  };

  return (
    <Section id="seo-score" className="bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Diagnostics</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          Free Live <span className="text-accent underline decoration-accent/20">SEO Health Check.</span>
        </h3>
        <p className="text-zinc-500 text-lg mb-10 max-w-2xl mx-auto font-light">
          Get an instant report on your website's search performance, technical health, and optimization score.
        </p>

        <form onSubmit={startAudit} className="flex flex-col sm:flex-row gap-4 mb-16 max-w-xl mx-auto">
          <input 
            type="url" 
            required
            placeholder="https://yourwebsite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:border-primary/50 focus:outline-none transition-all text-sm text-white"
          />
          <Button type="submit" variant="primary" className="!px-10" disabled={isScanning}>
            {isScanning ? 'Analyzing...' : 'Analyze Now'}
          </Button>
        </form>

        <AnimatePresence>
          {isScanning && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5 }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="text-sm text-zinc-400 font-mono">
                Scanning metadata... Checking Core Web Vitals... Analyzing link profile...
              </div>
            </motion.div>
          )}

          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid md:grid-cols-3 gap-6 text-left"
            >
              <div className="glass p-8 rounded-sm text-center col-span-1">
                <div className="relative inline-block mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-zinc-800"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={377}
                      initial={{ strokeDashoffset: 377 }}
                      animate={{ strokeDashoffset: 377 - (377 * score) / 100 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{score}%</span>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Overall SEO Score</div>
              </div>

              <div className="glass p-8 rounded-sm col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-500" size={18} />
                    <span className="text-sm text-white font-medium">Meta Tags Optimized</span>
                  </div>
                  <span className="text-[10px] font-bold text-green-500 uppercase">Passed</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-yellow-500" size={18} />
                    <span className="text-sm text-white font-medium">Slow Page Load (Mobile)</span>
                  </div>
                  <span className="text-[10px] font-bold text-yellow-500 uppercase">Warning</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-yellow-500" size={18} />
                    <span className="text-sm text-white font-medium">Missing Alt Text on Images</span>
                  </div>
                  <span className="text-[10px] font-bold text-yellow-500 uppercase">Warning</span>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-zinc-500 font-light mb-4">
                    Your site has critical issues affecting your ranking. Let's fix them together.
                  </p>
                  <Button href="#contact" variant="primary" className="!py-2 !px-6 !text-[10px]">
                    Full Analysis Required
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background artifacts */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[120px] rounded-full" />
    </Section>
  );
}
