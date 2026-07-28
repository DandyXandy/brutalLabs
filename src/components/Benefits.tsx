'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FlaskConical, Zap, Eye, Users } from 'lucide-react';

type Item = { title: string; description: string };

const icons = [FlaskConical, Zap, Eye, Users];

export default function Benefits() {
  const t = useTranslations('benefits');
  const items = t.raw('items') as Item[];

  return (
    <section id="diferenciais" className="relative bg-blackout py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-3xl uppercase text-bone sm:text-4xl">{t('title')}</h2>
          <p className="mt-6 text-base leading-relaxed text-bone/60">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 border-blood bg-blackout-900/60 p-7"
              >
                <Icon size={26} className="text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg uppercase text-bone">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/55">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
