'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { buildWhatsappLink } from '@/lib/whatsapp';

type Product = {
  name: string;
  flavor: string;
  description: string;
  price: string;
  badge: string | null;
};

const images = [
  'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1000&auto=format&fit=crop',
];

export default function Products() {
  const t = useTranslations('products');
  const items = t.raw('items') as Product[];

  return (
    <section id="produtos" className="relative bg-blackout-950 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-3xl uppercase text-bone sm:text-4xl">{t('title')}</h2>
          <p className="mt-6 text-base leading-relaxed text-bone/60">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => {
            const whatsappHref = buildWhatsappLink(
              `${t('cta')}: ${product.name} (${product.flavor})`
            );
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden border border-bone/10 bg-blackout-900/60"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${images[i % images.length]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blackout-900 via-transparent to-transparent" />
                  {product.badge && (
                    <span className="absolute left-4 top-4 bg-blood-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-bone">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl uppercase text-bone">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-gold">
                    {product.flavor}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-bone/55">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-bone/10 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-bone/40">
                        {t('priceLabel')}
                      </p>
                      <p className="font-display text-xl text-gold-gradient">{product.price}</p>
                    </div>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blood-gradient px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-bone transition-transform hover:scale-105"
                    >
                      {t('cta')}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
