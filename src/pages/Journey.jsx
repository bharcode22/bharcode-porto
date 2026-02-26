import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Container from '../components/layout/Container';
import aboutImg from '../assets/images/hero/backside.jpg';
import skills from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

const Journey = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* ─── Timeline ─── */}
      <section className="py-10 sm:py-16 border-t border-white/5">
        <Container>
          <div className="mb-8 sm:mb-10 text-center">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              {t.about.journeyLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Journey</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
            {t.timeline.map((item, i) => (
              <div key={i} className="glass-card p-4 sm:p-6 flex gap-4 sm:gap-5">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40 mt-1" />
                  {i < t.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/8" />
                  )}
                </div>
                <div>
                  <p className="text-white/35 text-xs font-medium tracking-widest uppercase mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Skills ─── */}
      <section className="py-10 sm:py-16 border-t border-white/5">
        <Container>
          <div className="mb-8 sm:mb-10 text-center">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              {t.about.skillsLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {skills.map(({ category, items }) => (
              <div key={category} className="glass-card p-4 sm:p-5">
                <h3 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
                  {category}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/25 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-10 sm:py-16 border-t border-white/5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 glass-card p-5 sm:p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{t.about.ctaTitle}</h3>
              <p className="text-white/45 text-sm">{t.about.ctaDesc}</p>
            </div>
            <Link
              to="/contact"
              className="glass-btn-primary shrink-0 flex items-center gap-2"
            >
              {t.about.contactBtn}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Journey;
