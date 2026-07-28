'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/whatsapp';

export default function Offer() {
  const t = useTranslations('offer');
  const whatsappHref = buildWhatsappLink(t('whatsappMessage'));

  return (
    <section className="bg-stripes relative overflow-hidden bg-blackout py-28 lg:py-36">
      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl uppercase leading-tight text-bone sm:text-4xl md:text-5xl"
        >
          {t('title')} <span className="text-blood-gradient">{t('highlight')}</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-lg text-sm uppercase tracking-widest2 text-bone/50">
          {t('note')}
        </p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-blood-gradient px-10 py-5 text-base font-bold uppercase tracking-wide text-bone transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          {t('cta')}
        </motion.a>
      </div>
    </section>
  );
}
