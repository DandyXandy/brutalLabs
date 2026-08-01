'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { buildWhatsappLink } from '@/lib/whatsapp';

export default function Navbar() {
  const t = useTranslations('nav');
  const offer = useTranslations('offer');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const whatsappHref = buildWhatsappLink(offer('whatsappMessage'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#produtos', label: t('products') },
    { href: '#diferenciais', label: t('benefits') },
    { href: '#resultados', label: t('reviews') },
    { href: '#duvidas', label: t('faq') },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-blackout/95 backdrop-blur-lg border-b border-blood/20 py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="font-display text-2xl uppercase tracking-wide text-bone">
          BRUTAL<span className="text-blood-gradient">LABS</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-bone/70 transition-colors hover:text-blood"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blood-gradient px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-bone transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            {t('cta')}
          </a>
        </div>

        <button className="text-bone lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-blackout/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-bone/80 hover:text-blood"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-end pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 bg-blood-gradient px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-bone"
                >
                  <MessageCircle size={16} />
                  {t('cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
