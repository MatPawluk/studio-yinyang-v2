import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import avatar4 from '@/assets/avatar-4.jpg';
import avatar5 from '@/assets/avatar-5.jpg';
import avatar6 from '@/assets/avatar-6.jpg';

const testimonials = [
  {
    name: 'Marek Wiśniewski',
    role: 'CEO, TechPol Industries',
    content: 'Współpraca z Yin Yang pozwoliła nam uniknąć kosztownych błędów przy wyborze dostawcy z Chin. Ich analiza rynku była nieoceniona.',
    rating: 5,
    avatar: avatar1,
  },
  {
    name: 'Anna Kowalczyk',
    role: 'Dyrektor Handlowy, EuroAsia Trade',
    content: 'Profesjonalne podejście i głęboka znajomość chińskiego rynku. Polecam każdej firmie planującej ekspansję.',
    rating: 5,
    avatar: avatar2,
  },
  {
    name: 'Tomasz Nowak',
    role: 'Prezes Zarządu, InnoVest',
    content: 'Dzięki Yin Yang zaoszczędziliśmy ponad 500 tys. PLN na weryfikacji partnerów. Inwestycja, która się zwróciła wielokrotnie.',
    rating: 5,
    avatar: avatar3,
  },
  {
    name: 'Liu Wei',
    role: 'Managing Director, SinoTrade',
    content: 'Their understanding of both Polish and Chinese business culture is exceptional. A true bridge between our markets.',
    rating: 5,
    avatar: avatar5,
  },
  {
    name: 'Katarzyna Dąbrowska',
    role: 'VP Operations, GlobalLink',
    content: 'Rzetelne analizy, terminowa realizacja i pełna transparentność. Tak powinna wyglądać profesjonalna współpraca.',
    rating: 5,
    avatar: avatar6,
  },
  {
    name: 'Piotr Zieliński',
    role: 'Founder, NexGen Solutions',
    content: 'Od audytu fabryki po negocjacje kontraktu - Yin Yang przeprowadził nas przez cały proces bez żadnych niespodzianek.',
    rating: 5,
    avatar: avatar4,
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lime/10 backdrop-blur-sm text-lime text-sm font-semibold mb-4">
            Opinie klientów
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Co mówią o nas <span className="text-lime">klienci</span>
          </h2>
        </motion.div>

        {/* Vertical Scrolling Marquee */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1 - scrolls up */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="space-y-6"
              >
                {allTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            {/* Column 2 - scrolls down (reverse) */}
            <div className="relative overflow-hidden hidden md:block">
              <motion.div
                animate={{ y: ['-50%', '0%'] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="space-y-6"
              >
                {[...allTestimonials].reverse().map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            {/* Column 3 - scrolls up (slower) */}
            <div className="relative overflow-hidden hidden lg:block">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="space-y-6"
              >
                {allTestimonials.slice(2).concat(allTestimonials.slice(0, 2)).map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="group relative p-6 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-lime/30 transition-all duration-500">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-8 h-8 text-lime" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current text-lime" />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-6 text-gray-300">
        "{testimonial.content}"
      </p>

      {/* Author with avatar */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-lime/30"
        />
        <div>
          <p className="font-semibold text-sm text-white">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};
