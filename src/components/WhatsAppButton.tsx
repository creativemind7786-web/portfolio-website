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
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={28} />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce" />
    </motion.a>
  );
}
