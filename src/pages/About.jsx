import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Container from '../components/layout/Container';
import aboutImg from '../assets/images/logo/about_image.webp';
import skills from '../data/skills';
import timeline from '../data/timeline';

const About = () => {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <div className="shrink-0">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 glass-card p-0">
                <img
                  src={aboutImg}
                  alt="Bharatayasa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5 text-center md:text-left">
              <div>
                <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-3">
                  Tentang Saya
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Bharatayasa
                </h1>
                <div className="flex items-center gap-1.5 text-white/40 text-sm justify-center md:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>Kintamani, Bali, Indonesia</span>
                </div>
              </div>

              <p className="text-white/55 leading-relaxed max-w-lg mx-auto md:mx-0">
                Orang biasa yang menjalankan hidup dengan biasa saja. Saya seorang
                web developer yang menikmati proses membangun antarmuka yang bersih,
                fungsional, dan enak dipakai.
              </p>
              <p className="text-white/40 leading-relaxed max-w-lg mx-auto md:mx-0">
                Di luar koding, saya menikmati suasana alam Bali dan hal-hal sederhana.
                Percaya bahwa konsistensi kecil setiap hari lebih berharga dari
                ledakan semangat yang sesaat.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                <Link to="/projects" className="glass-btn-primary">
                  Lihat Proyek
                </Link>
                <Link to="/contact" className="glass-btn-secondary">
                  Hubungi Saya
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Skills ─── */}
      <section className="py-16 border-t border-white/5">
        <Container>
          <div className="mb-10">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              Kemampuan
            </p>
            <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map(({ category, items }) => (
              <div key={category} className="glass-card p-5">
                <h3 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
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

      {/* ─── Timeline ─── */}
      <section className="py-16 border-t border-white/5">
        <Container>
          <div className="mb-10">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
              Perjalanan
            </p>
            <h2 className="text-3xl font-bold text-white">Timeline</h2>
          </div>

          <div className="max-w-2xl space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="glass-card p-6 flex gap-5">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/8" />
                  )}
                </div>
                <div>
                  <p className="text-white/35 text-xs font-medium tracking-widest uppercase mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 border-t border-white/5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 glass-card p-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Tertarik untuk berkolaborasi?</h3>
              <p className="text-white/45 text-sm">Saya selalu terbuka untuk diskusi dan proyek baru.</p>
            </div>
            <Link
              to="/contact"
              className="glass-btn-primary shrink-0 flex items-center gap-2"
            >
              Hubungi Saya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
