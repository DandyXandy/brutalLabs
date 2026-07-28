'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FlaskConical, Truck, ShieldCheck } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/whatsapp';

const badgeIcons = [FlaskConical, Truck, ShieldCheck];

export default function Hero() {
  const t = useTranslations('hero');
  const offer = useTranslations('offer');
  const trustBadges = t.raw('trustBadges') as string[];
  const whatsappHref = buildWhatsappLink(offer('whatsappMessage'));

  return (
    <section className="bg-stripes relative overflow-hidden bg-blackout pb-20 pt-40 lg:pt-48">
      <div className="absolute inset-0 bg-gradient-to-b from-blackout via-blackout to-blackout-950" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 border border-blood/50 bg-blood/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blood" />
          <span className="text-xs font-bold uppercase tracking-widest2 text-blood">
            {t('badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl uppercase leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
        >
          {t('headlinePre')}
          <br />
          <span className="text-blood-gradient">{t('headlineHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/65"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blood-gradient px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-bone transition-transform hover:scale-105 sm:w-auto"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#produtos"
            className="w-full border border-bone/30 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-bone transition-colors hover:border-blood hover:text-blood sm:w-auto"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = badgeIcons[i % badgeIcons.length];
            return (
              <div key={badge} className="flex items-center gap-2 text-xs text-bone/45">
                <Icon size={15} className="text-gold" />
                <span className="uppercase tracking-wide">{badge}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
