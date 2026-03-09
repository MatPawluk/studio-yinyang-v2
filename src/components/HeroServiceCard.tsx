import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const HeroServiceCard = ({ number, title, description, image, slug }: HeroServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative flex-shrink-0 w-[280px] sm:w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-700 group bg-[#0B0B0B]/40 backdrop-blur-md hover:border-white/20"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60"
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col items-start">
        <span className="font-display text-8xl font-bold mb-8 transition-colors leading-none tracking-tighter text-white/5">
          {number}
        </span>
        
        <div className="mt-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-tight transition-colors text-white">
            {title}
          </h3>
          
          <p className="text-sm mb-8 leading-relaxed transition-all duration-500 text-white/40 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
            {description}
          </p>
          
          <Link
            to={`/uslugi#${slug}`}
            className="inline-flex items-center gap-2 transition-all duration-300 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border text-white/60 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20"
          >
            <span>{t.services.learnMore}</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Ambient Light */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
    </motion.div>
  );
};
