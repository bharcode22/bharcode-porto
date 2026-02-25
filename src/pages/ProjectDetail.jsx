import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Calendar, Tag } from 'lucide-react';
import Container from '../components/layout/Container';
import projects from '../data/projects';

const statusColors = {
  Completed:     'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'In Progress': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const statColor =
    statusColors[project.status] ?? 'bg-white/10 text-white/60 border-white/15';

  return (
    <section className="py-20">
      <Container>
        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Kembali ke Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="glass-card overflow-hidden p-0 rounded-2xl h-64 md:h-80">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  <span className="text-8xl font-bold text-white/8 select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                {project.longDesc}
              </p>
            </div>

            {/* Features */}
            {project.features?.length > 0 && (
              <div className="glass-card p-6">
                <h2 className="text-white font-semibold text-lg mb-4">Fitur Utama</h2>
                <ul className="space-y-3">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">
            {/* Info Card */}
            <div className="glass-card p-6 space-y-5">
              {/* Status */}
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Status</p>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statColor}`}>
                  {project.status}
                </span>
              </div>

              {/* Year */}
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> Tahun
                </p>
                <p className="text-white/70 text-sm">{project.year}</p>
              </div>

              {/* Category */}
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Tag className="h-3 w-3" /> Kategori
                </p>
                <p className="text-white/70 text-sm">{project.category}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/50 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="glass-card p-6 space-y-3">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Links</p>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary flex items-center justify-center gap-2 w-full"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}

              {!project.github && !project.demo && (
                <p className="text-white/30 text-sm text-center">
                  Tidak ada link tersedia
                </p>
              )}
            </div>

            {/* Navigation between projects */}
            <div className="glass-card p-5">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Proyek Lainnya</p>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="flex items-center justify-between gap-2 py-2 border-b border-white/5 last:border-0 group"
                    >
                      <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors truncate">
                        {p.title}
                      </span>
                      <ArrowLeft className="h-3 w-3 text-white/30 rotate-180 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetail;
