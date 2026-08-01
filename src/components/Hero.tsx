'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlaskConical, Truck, ShieldCheck } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/whatsapp';

gsap.registerPlugin(ScrollTrigger);

const badgeIcons = [FlaskConical, Truck, ShieldCheck];
const SLICES = 8;
const DUST_COUNT = 16;

export default function Hero() {
  const t = useTranslations('hero');
  const offer = useTranslations('offer');
  const trustBadges = t.raw('trustBadges') as string[];
  const whatsappHref = buildWhatsappLink(offer('whatsappMessage'));

  const sectionRef = useRef<HTMLElement>(null);
  const sliceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dustRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const revealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mid = (SLICES - 1) / 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=140%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        revealRef.current,
        { scale: 1.18 },
        { scale: 1, ease: 'none' },
        0
      );

      sliceRefs.current.forEach((el, i) => {
        if (!el) return;
        const dir = i < mid ? -1 : i > mid ? 1 : i % 2 === 0 ? -1 : 1;
        const dist = Math.abs(i - mid) / mid;
        tl.to(
          el,
          {
            xPercent: dir * (60 + dist * 90),
            yPercent: i % 2 === 0 ? -30 - dist * 40 : 30 + dist * 40,
            rotate: dir * (10 + dist * 25),
            opacity: 0,
            scale: 1.05,
            ease: 'power2.in',
            duration: 1,
          },
          i * 0.035
        );
      });

      dustRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { opacity: 0, scale: 0.4 },
          { opacity: 0.9, scale: 1.6, ease: 'power1.out', duration: 0.4 },
          0.18 + (i % 6) * 0.02
        ).to(
          el,
          { opacity: 0, duration: 0.4, ease: 'power1.in' },
          0.55 + (i % 6) * 0.02
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-blackout"
    >
      {/* Revealed layer: open products */}
      <div ref={revealRef} className="absolute inset-0">
        <Image
          src="/hero/produtos-abertos.jpg"
          alt="Suplementos abiertos"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-blackout/55" />
      </div>

      {/* Sliced layer: closed products, flies apart on scroll */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: SLICES }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              sliceRefs.current[i] = el;
            }}
            className="relative h-full overflow-hidden"
            style={{ width: `${100 / SLICES}%` }}
          >
            <div
              className="absolute inset-y-0"
              style={{ width: `${SLICES * 100}%`, left: `-${i * 100}%` }}
            >
              <Image
                src="/hero/produtos-fechados.jpg"
                alt="Suplementos"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-blackout/70 via-blackout/40 to-blackout" />
        <div className="bg-stripes absolute inset-0 opacity-60" />
      </div>

      {/* Powder-burst particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: DUST_COUNT }).map((_, i) => {
          const left = 8 + ((i * 97) % 84);
          const top = 20 + ((i * 53) % 55);
          const size = 6 + (i % 5) * 4;
          const gold = i % 3 === 0;
          return (
            <span
              key={i}
              ref={(el) => {
                dustRefs.current[i] = el;
              }}
              className="absolute rounded-full opacity-0 blur-[2px]"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                background: gold
                  ? 'radial-gradient(circle, #F2C766 0%, transparent 70%)'
                  : 'radial-gradient(circle, #FF4757 0%, transparent 70%)',
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 border border-blood/50 bg-blood/10 px-4 py-1.5 backdrop-blur-sm"
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
          className="font-display text-4xl uppercase leading-[1.05] text-bone drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] sm:text-5xl lg:text-6xl"
        >
          {t('headlinePre')}
          <br />
          <span className="text-blood-gradient text-shimmer">{t('headlineHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone/75"
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
            className="w-full border border-bone/40 bg-blackout/30 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-bone backdrop-blur-sm transition-colors hover:border-blood hover:text-blood sm:w-auto"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = badgeIcons[i % badgeIcons.length];
            return (
              <div key={badge} className="flex items-center gap-2 text-xs text-bone/60">
                <Icon size={15} className="text-gold" />
                <span className="uppercase tracking-wide">{badge}</span>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest2 text-bone/40">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}
