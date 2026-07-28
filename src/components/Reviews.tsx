'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Card = { metric: string; label: string; text: string; name: string; role: string };

export default function Reviews() {
  const t = useTranslations('reviews');
  const cards = t.raw('cards') as Card[];

  return (
    <section id="resultados" className="relative bg-blackout py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-3xl uppercase text-bone sm:text-4xl">{t('title')}</h2>
          <p className="mt-6 text-base leading-relaxed text-bone/60">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-bone/10 bg-blackout-900/60 p-8"
            >
              <p className="font-display text-4xl text-blood-gradient">{card.metric}</p>
              <p className="mt-1 text-xs uppercase tracking-widest2 text-bone/45">{card.label}</p>
              <p className="mt-6 text-sm italic leading-relaxed text-bone/70">
                &ldquo;{card.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-bone/10 pt-4">
                <p className="text-sm font-bold uppercase text-bone">{card.name}</p>
                <p className="mt-0.5 text-xs text-bone/45">{card.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
