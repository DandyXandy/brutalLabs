'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

type FaqItem = { question: string; answer: string };

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative bg-blackout-950 py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-3xl uppercase text-bone sm:text-4xl">{t('title')}</h2>
        </div>

        <div className="mt-14 divide-y divide-bone/10 border-t border-b border-bone/10">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-base uppercase text-bone sm:text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-blood"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-bone/60">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
