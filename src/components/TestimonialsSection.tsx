import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marek Wiśniewski',
    role: 'CEO, TechPol Industries',
    content: 'Współpraca z Yin Yang pozwoliła nam uniknąć kosztownych błędów przy wyborze dostawcy z Chin. Ich analiza rynku była nieoceniona.',
    rating: 5,
    color: 'bg-lime',
  },
  {
    name: 'Anna Kowalczyk',
    role: 'Dyrektor Handlowy, EuroAsia Trade',
    content: 'Profesjonalne podejście i głęboka znajomość chińskiego rynku. Polecam każdej firmie planującej ekspansję.',
    rating: 5,
    color: 'bg-gray-700',
  },
  {
    name: 'Tomasz Nowak',
    role: 'Prezes Zarządu, InnoVest',
    content: 'Dzięki Yin Yang zaoszczędziliśmy ponad 500 tys. PLN na weryfikacji partnerów. Inwestycja, która się zwróciła wielokrotnie.',
    rating: 5,
    color: 'bg-gray-800',
  },
  {
    name: 'Liu Wei',
    role: 'Managing Director, SinoTrade',
    content: 'Their understanding of both Polish and Chinese business culture is exceptional. A true bridge between our markets.',
    rating: 5,
    color: 'bg-gray-700',
  },
  {
    name: 'Katarzyna Dąbrowska',
    role: 'VP Operations, GlobalLink',
    content: 'Rzetelne analizy, terminowa realizacja i pełna transparentność. Tak powinna wyglądać profesjonalna współpraca.',
    rating: 5,
    color: 'bg-lime',
  },
  {
    name: 'Piotr Zieliński',
    role: 'Founder, NexGen Solutions',
    content: 'Od audytu fabryki po negocjacje kontraktu - Yin Yang przeprowadził nas przez cały proces bez żadnych niespodzianek.',
    rating: 5,
    color: 'bg-gray-800',
  },
];

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

        {/* Testimonials Grid with scroll animation */}
        <div className="relative">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`group relative p-6 rounded-3xl border border-gray-700/50 hover:border-lime/30 transition-all duration-500 ${testimonial.color}`}
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className={`w-8 h-8 ${testimonial.color === 'bg-lime' ? 'text-gray-900' : 'text-lime'}`} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-current ${testimonial.color === 'bg-lime' ? 'text-gray-900' : 'text-lime'}`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={`text-sm leading-relaxed mb-6 ${testimonial.color === 'bg-lime' ? 'text-gray-900' : 'text-gray-300'}`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                    testimonial.color === 'bg-lime' ? 'bg-gray-900 text-lime' : 'bg-lime text-gray-900'
                  }`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${testimonial.color === 'bg-lime' ? 'text-gray-900' : 'text-white'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs ${testimonial.color === 'bg-lime' ? 'text-gray-700' : 'text-gray-400'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
