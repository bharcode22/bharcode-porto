import { Link } from 'react-router-dom';
import { ArrowRight, Github, Gitlab, Instagram, Mail } from 'lucide-react';
import Container from '../components/layout/Container';
import heroImg from '../assets/images/hero/hero.JPG';
import projects from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import techStack from '../data/techStack';
import socials from '../data/socials';
import { useEffect, useState } from "react";

function TypingText({ text, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <>{displayedText}</>;
}

const Home = () => {
  const { t, lang } = useLanguage();
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* Text */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
                {t.home.greeting}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Bhar
              </h1>
              <p className="text-xl text-white/60 font-light">
                {t.home.subtitle}
              </p>
              <p className="font-mono text-white/40 max-w-md mx-auto md:mx-0 leading-relaxed text-justify">
                <TypingText text={t.home.bio} speed={10} />
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                <Link to="/projects" className="glass-btn-primary">
                  {t.home.viewProjects}
                </Link>
                <Link to="/contact" className="glass-btn-secondary">
                  {t.home.contactMe}
                </Link>
              </div>

              {/* Socials */}
              <div className="flex gap-4 justify-center md:justify-start pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="text-white/30 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0">
              <div className="relative w-52 h-52 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                  }}
                />
                <img
                  src={heroImg}
                  alt="Bharatayasa"
                  className="relative z-10 w-full h-full object-cover rounded-full border border-white/10"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="py-14 border-t border-white/5">
        <Container>
          <p className="text-center text-white/25 text-xs tracking-widest uppercase mb-6">
            {t.home.techLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-4 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/8 hover:text-white/80 hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
                {t.home.portfolioLabel}
              </p>
              <h2 className="text-3xl font-bold text-white">{t.home.featuredTitle}</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors group"
            >
              {t.home.allProjects}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="glass-card p-5 flex flex-col gap-3 group"
              >
                {/* Placeholder thumbnail */}
                <div
                  className="h-36 rounded-xl flex items-center justify-center mb-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  {project.image?.length > 0 ? (
                    <img src={project.image[0]} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <span className="text-4xl font-bold text-white/8 select-none">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/45 text-sm line-clamp-2">{project.shortDesc[lang]}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/35 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link to="/projects" className="glass-btn-secondary text-sm">
              {t.home.allProjectsMobile}
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="glass-card p-10 md:p-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.home.ctaTitle}
            </h2>
            <p className="text-white/50 mb-8">
              {t.home.ctaDesc}
            </p>
            <Link to="/contact" className="glass-btn-primary">
              {t.home.contactMe}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
