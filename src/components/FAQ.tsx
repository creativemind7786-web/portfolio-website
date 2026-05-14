import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Typically, you'll start seeing significant movement in rankings and traffic within 3 to 6 months, depending on your industry's competition and the current state of your website."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No ethical SEO specialist can guarantee a specific ranking, as Google's algorithm changes constantly. However, I guarantee professional execution of best practices that have historically led my clients to top-tier positions."
  },
  {
    question: "What is included in an SEO Audit?",
    answer: "My audits cover technical performance, site architecture, content quality, backlink profile, competitor benchmarking, and a clear, prioritized roadmap of recommendations."
  },
  {
    question: "Can you help with local SEO and Google Maps?",
    answer: "Yes, I specialize in Local SEO, including Google Business Profile optimization, local citation building, and review management strategies to help you dominate your local area."
  },
  {
    question: "What tools do you use for tracking?",
    answer: "I primarily use GA4, Google Search Console, Ahrefs, SEMrush, and Screaming Frog to ensure we have the most accurate and actionable data possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-[#030303]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Common Questions</h2>
          <h3 className="serif text-4xl font-normal text-white">
            Frequently <span className="italic text-emerald-400">Asked.</span>
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-all"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-white pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-500 border border-white/10">
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-white/5 pt-4 font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
