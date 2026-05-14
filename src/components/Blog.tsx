import { motion } from 'motion/react';
import Section from './Section';
import { Bookmark, Clock, ChevronRight } from 'lucide-react';

const posts = [
  {
    title: "Mastering GA4: The Ultimate Guide for 2024",
    excerpt: "Everything you need to know about setting up and leveraging Google Analytics 4 for business growth.",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tag: "Analytics"
  },
  {
    title: "How to Recover from a Google Update",
    excerpt: "Practical steps to diagnose and fix traffic drops after major search algorithm shifts.",
    date: "April 28, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tag: "Strategy"
  },
  {
    title: "The Future of AI in Search (SGE)",
    excerpt: "Understanding how Search Generative Experience will change the SEO landscape forever.",
    date: "April 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tag: "Trends"
  }
];

export default function Blog() {
  return (
    <Section id="blog">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Latest Insights</h2>
          <h3 className="serif text-4xl md:text-5xl font-normal text-white">
            SEO Tips & <br /> <span className="italic text-emerald-400">Modern Trends.</span>
          </h3>
        </div>
        <button className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500 font-bold hover:gap-4 transition-all">
          The Archives <ChevronRight size={14} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden mb-6 border border-white/10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                {post.tag}
              </div>
            </div>

            <div className="flex items-center gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-4">
              <div className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </div>
              <span>•</span>
              <div>{post.date}</div>
            </div>

            <h4 className="text-xl font-bold mb-4 serif text-white group-hover:text-emerald-400 transition-colors leading-tight">
              {post.title}
            </h4>
            <p className="text-zinc-500 text-xs mb-6 line-clamp-2 font-light leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
              Read Analysis <ChevronRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
