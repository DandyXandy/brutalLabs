import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/10 bg-blackout-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl uppercase text-bone">
              BRUTAL<span className="text-blood-gradient">LABS</span>
            </p>
            <p className="mt-4 max-w-xs text-sm italic leading-relaxed text-bone/45">
              {t('tagline')}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
              {t('columns.explore')}
            </p>
            <ul className="space-y-3 text-sm text-bone/55">
              <li><a href="#produtos" className="hover:text-blood">{t('links.products')}</a></li>
              <li><a href="#diferenciais" className="hover:text-blood">{t('links.benefits')}</a></li>
              <li><a href="#resultados" className="hover:text-blood">{t('links.reviews')}</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
              {t('columns.contact')}
            </p>
            <ul className="space-y-3 text-sm text-bone/55">
              <li>contato@brutallabs.com</li>
              <li>+55 11 94000-0000</li>
              <li>São Paulo — Brasil</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest2 text-blood">
              {t('columns.legal')}
            </p>
            <ul className="space-y-3 text-sm text-bone/55">
              <li><a href="#" className="hover:text-blood">{t('links.privacy')}</a></li>
              <li><a href="#" className="hover:text-blood">{t('links.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-bone/10 pt-10 text-center">
          <p className="text-xs text-bone/35">
            © {year} Brutal Labs. {t('rights')}
          </p>
          <div className="flex items-center gap-2 text-xs text-bone/35">
            <span>{t('madeBy')}</span>
            <a
              href="https://exitocoach.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Image
                src="/branding/exitocoach-logo.png"
                alt="ExitoCoach"
                width={675}
                height={900}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
