import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Container from '../components/layout/Container';
import projects from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const categoryColors = {
  Frontend:  'bg-blue-500/15 text-blue-300 border-blue-500/25',
  Fullstack: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  Backend:   'bg-green-500/15 text-green-300 border-green-500/25',
  Mobile:    'bg-orange-500/15 text-orange-300 border-orange-500/25',
};

const statusColors = {
  Completed:   'bg-emerald-500/15 text-emerald-400',
  'In Progress': 'bg-yellow-500/15 text-yellow-400',
};

const ProjectCard = ({ project, detail, lang, statusLabel }) => {
  const catColor = categoryColors[project.category] ?? 'bg-white/10 text-white/60 border-white/15';
  const statColor = statusColors[project.status] ?? 'bg-white/10 text-white/60';

  return (
    <div className="glass-card flex flex-col h-full overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden rounded-t-2xl">
        {project.image?.length > 0 ? (
          <img
            src={project.image[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
            }}
          >
            <span className="text-5xl font-bold text-white/10 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Status badge */}
        <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${statColor}`}>
          {statusLabel[project.status] ?? project.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category + Year */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${catColor}`}>
            {project.category}
          </span>
          <span className="text-xs text-white/30">{project.year}</span>
        </div>

        {/* Title & desc */}
        <div>
          <h3 className="text-white font-semibold text-lg leading-snug mb-1">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm line-clamp-2">{project.shortDesc[lang]}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/30 border border-white/10">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
          <div className="flex gap-3">
            {project.github &&
              Object.entries(project.github).map(([key, url]) =>
                url ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                    title={key === 'repo' ? 'GitHub' : `GitHub ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                ) : null
              )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors group/link"
          >
            {detail}
            <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t, lang } = useLanguage();
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-3">
            {t.projects.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.projects.title}
          </h1>
          <p className="text-white/50 max-w-xl">
            {t.projects.desc}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              {cat === 'All' ? t.projects.all : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                detail={t.projects.detail}
                lang={lang}
                statusLabel={t.projects.status}
              />
            ))}
          </div>
        ) : (
          <p className="text-white/30 text-center py-20">
            {t.projects.empty}
          </p>
        )}
      </Container>
    </section>
  );
};

export default Projects;
