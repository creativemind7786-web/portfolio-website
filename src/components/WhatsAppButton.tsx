import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/15550000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 hover:opacity-90 transition-all"
    >
      <MessageCircle size={28} />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent border-2 border-dark rounded-full flex items-center justify-center animate-bounce" />
    </motion.a>
  );
}
