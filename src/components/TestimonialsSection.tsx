import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GradientText } from './GradientText';
import { useLanguage } from '@/contexts/LanguageContext';

// Generated avatar URLs using UI Faces style placeholders
const getAvatarUrl = (seed: string) => 
  `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=1a1a2e&textColor=c4ff00`;

const testimonials = [
  {
    name: 'Marek Wiśniewski',
    content: 'Współpraca z Yin Yang uratowała nas przed podpisaniem umowy z „producentem", który jak się okazało producentem nie był. Szczerze? Gdyby nie ta analiza, pewnie byśmy weszli w to w ciemno. Dużo konkretów, mało lania wody.',
    rating: 5,
    avatar: getAvatarUrl('MW'),
  },
  {
    name: 'Katarzyna Dąbrowska',
    content: 'Pierwszy raz import bez pośrednika i miałam trochę stres. Pan Maksymilian wszystko rozpisał krok po kroku, co sprawdzić, gdzie uważać. Nie było obiecywania złotych gór tylko realne ryzyka. Dzięki temu czuję że mam kontrolę.',
    rating: 4.5,
    avatar: getAvatarUrl('KD'),
  },
  {
    name: 'Tomasz Nowak',
    content: 'Doceniam podejście systemowe. Nie tylko „fabryka wygląda ok", ale wejście w rejestry, powiązania kapitałowe itd. Czuć że to nie jest firma od ładnych prezentacji tylko od realnych spraw.',
    rating: 5,
    avatar: getAvatarUrl('TN'),
  },
  {
    name: 'Anna Kowalczyk',
    content: 'Dzięki weryfikacji dostawcy uniknęliśmy problemu z certyfikacją który wyszedłby dopiero przy odprawie celnej… a to by bolało. Polecam!',
    rating: 4.5,
    avatar: getAvatarUrl('AK'),
  },
  {
    name: 'Piotr Zieliński',
    content: 'Mieliśmy sytuację że po wpłacie zaliczki dostawca zaczął „kombinować" z dokumentami. Yin Yang pomogło nam ustawić rozmowę tak, żeby wszystko wróciło na właściwe tory. Bez paniki, bez straszenia, po prostu twarde argumenty.',
    rating: 5,
    avatar: getAvatarUrl('PZ'),
  },
  {
    name: 'Magdalena Król',
    content: 'Szkolenie z negocjacji było momentami niewygodne, bo pokazuje jak łatwo oddajemy pole. Dużo przykładów z życia, nie teoria. Od tamtej pory inaczej patrzę na to ich „yes, yes, no problem".',
    rating: 4.5,
    avatar: getAvatarUrl('MK'),
  },
  {
    name: 'Paweł Lewandowski',
    content: 'W pewnym momencie usłyszałem wprost, że nasz pomysł wejścia do Chin w tej formie nie ma sensu. I to było najlepsze co mogli powiedzieć. Nie sprzedawali usługi na siłę.',
    rating: 5,
    avatar: getAvatarUrl('PL'),
  },
  {
    name: 'Ewa Kamińska',
    content: 'Konsultacja otworzyła mi oczy na to jak bardzo polityka wpływa na biznes w Chinach. Czytałam raporty wcześniej, ale dopiero rozmowa z kimś kto tam realnie działa daje inny poziom zrozumienia.',
    rating: 4.5,
    avatar: getAvatarUrl('EK'),
  },
  {
    name: 'Łukasz Maj',
    content: 'Zleciliśmy audyt fabryki, która wyglądała świetnie na Alibaba. Na miejscu wyszły rzeczy których byśmy sami nie wyłapali. Szczerze mówiąc… oszczędzili nam sporo pieniędzy i nerwów.',
    rating: 5,
    avatar: getAvatarUrl('LM'),
  },
  {
    name: 'Li Wei',
    content: 'We worked with Mr. Adrian during a supplier restructuring process. What I appreciated most was his ability to translate Polish expectations into something understandable for the Chinese side. He understands both mentalities, which is rare.',
    rating: 5,
    avatar: getAvatarUrl('LW'),
  },
  {
    name: 'Zhang Min',
    content: 'Good strategic discussion before market entry. They did not promise fast success, they explained the risks first. I respect that.',
    rating: 4.5,
    avatar: getAvatarUrl('ZM'),
  },
  {
    name: 'Chen Hao',
    content: 'Their understanding of both Polish and Chinese business culture makes negotiations smoother. Less emotion, more structure. That makes a difference.',
    rating: 5,
    avatar: getAvatarUrl('CH'),
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#050608' }}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c4ff00]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#c4ff00]/10 backdrop-blur-sm text-[#c4ff00] text-sm font-semibold mb-4">
            {t.testimonials.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            {t.testimonials.title} <GradientText>{t.testimonials.titleHighlight}</GradientText>
          </h2>
        </motion.div>

        {/* Vertical Scrolling Marquee */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050608] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050608] to-transparent z-10 pointer-events-none" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1 - scrolls up */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="space-y-6"
              >
                {allTestimonials.slice(0, 8).map((testimonial, index) => (
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
                {[...allTestimonials].reverse().slice(0, 8).map((testimonial, index) => (
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
                {allTestimonials.slice(4, 12).map((testimonial, index) => (
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
  const fullStars = Math.floor(testimonial.rating);
  const hasHalfStar = testimonial.rating % 1 !== 0;

  return (
    <div className="group relative p-6 rounded-3xl bg-[#0B0B0B]/80 backdrop-blur-sm border border-gray-800/50 hover:border-lime/30 transition-all duration-500">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-8 h-8 text-lime" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current text-lime" />
        ))}
        {hasHalfStar && (
          <div className="relative w-4 h-4">
            <Star className="w-4 h-4 text-lime/30 absolute" />
            <div className="overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-current text-lime" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-6 text-gray-300">
        "{testimonial.content}"
      </p>

      {/* Author with animated avatar */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#111214] flex items-center justify-center border-2 border-lime/30 overflow-hidden">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-sm text-white">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};
