'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const labels: Record<string, string> = {
  pt: 'PT',
  es: 'ES',
};

export default function LocaleSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={`flex items-center gap-1 rounded border border-blood/40 p-1 ${className}`}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`px-3 py-1 text-xs font-bold tracking-wide transition-colors ${
            loc === locale ? 'bg-blood-gradient text-bone' : 'text-bone/60 hover:text-blood'
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
