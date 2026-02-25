import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Gitlab, Instagram, Send } from 'lucide-react';
import Container from '../components/layout/Container';
import { useLanguage } from '../context/LanguageContext';

const socials = [
  { icon: Github,    href: 'https://github.com/bharcode22',        label: 'GitHub',    username: '@bharcode22' },
  { icon: Gitlab,    href: 'https://gitlab.com/bharatayasa40',      label: 'GitLab',    username: '@bharatayasa40' },
  { icon: Instagram, href: 'https://www.instagram.com/bharatayasa', label: 'Instagram', username: '@bharatayasa' },
];

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactInfo = [
    { icon: Mail,    label: 'Email',           value: 'bharatayasa40@gmail.com', href: 'mailto:bharatayasa40@gmail.com' },
    { icon: Phone,   label: 'WhatsApp',        value: '+62 819-9993-4616',       href: 'https://wa.me/6281999934616' },
    { icon: MapPin,  label: t.contact.locationLabel, value: 'Kintamani, Bali, Indonesia', href: null },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(t.contact.mailSubject(form.name));
    const body = encodeURIComponent(t.contact.mailBody(form.name, form.email, form.message));
    window.open(`mailto:bharatayasa40@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none';

  return (
    <section className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-3">
            {t.contact.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-white/50 max-w-lg">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t.contact.messagePlaceholder}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="glass-btn-primary flex items-center gap-2 w-full justify-center"
              >
                <Send className="h-4 w-4" />
                {t.contact.sendBtn}
              </button>

              {sent && (
                <p className="text-emerald-400 text-sm text-center">
                  {t.contact.sentMsg}
                </p>
              )}
            </form>
          </div>

          {/* ── Info Sidebar ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact Info */}
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-white font-semibold">{t.contact.contactInfoTitle}</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/6 border border-white/8 shrink-0">
                    <Icon className="h-4 w-4 text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white/75 text-sm hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/75 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-white font-semibold">{t.contact.socialTitle}</h3>
              {socials.map(({ icon: Icon, href, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-white/6 border border-white/8 group-hover:bg-white/10 transition-colors shrink-0">
                    <Icon className="h-4 w-4 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs">{label}</p>
                    <p className="text-white/65 text-sm group-hover:text-white transition-colors">
                      {username}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card p-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-white/60 text-sm">
                {t.contact.availableText}{' '}
                <span className="text-emerald-400 font-medium">{t.contact.availableHighlight}</span>{' '}
                {t.contact.availableSuffix}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
