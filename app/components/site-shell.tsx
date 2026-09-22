import { ChevronDown, Home, Menu as MenuIcon } from 'lucide-react';

const rubriqueLinks = [
  ['Accueil', '/'],
  ['Menu QR', '/menu'],
  ['Bilan', '/bilan'],
  ['Compte de resultat', '/compte-de-resultat'],
];

export function KittyLogo() {
  return (
    <a
      href="/"
      aria-label="Kitty Cafe"
      className="block h-[84px] w-[270px] -rotate-1 rounded-[10px] border border-[#ead7ca] bg-[#fffdf7] bg-[url('/kitty-poster.png')] bg-[length:375px_auto] bg-[position:center_8px] bg-no-repeat shadow-[0_10px_24px_rgba(96,65,42,0.12)]"
    >
      <span className="sr-only">Kitty Cafe</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/55 bg-[#fff8f1]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#e9cbc7] bg-white/75 px-4 py-2 text-sm font-light text-[#5b3f32] shadow-sm hover:bg-[#fff4f2]">
            <MenuIcon className="size-4" aria-hidden="true" />
            Rubrique
            <ChevronDown className="size-4 transition group-open:rotate-180" />
          </summary>
          <div className="absolute left-0 mt-3 w-72 rounded-[22px] border border-[#ead7ca] bg-[#fffaf4] p-3 text-[#4a352b] shadow-[0_18px_46px_rgba(74,53,43,0.18)]">
            {rubriqueLinks.map(([label, href]) => (
              <a
                key={label}
                className="flex items-center gap-2 rounded-[15px] px-4 py-3 text-sm font-light hover:bg-[#f9e1df]"
                href={href}
              >
                {label === 'Accueil' ? (
                  <Home className="size-4" aria-hidden="true" />
                ) : null}
                {label}
              </a>
            ))}
          </div>
        </details>

        <KittyLogo />
      </div>
    </header>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5e7da] text-[#3a2922]">
      <SiteHeader />
      {children}
    </main>
  );
}

export function PaperCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[28px] border border-[#ead7ca] bg-[#fffaf4]/95 p-5 shadow-[0_18px_40px_rgba(96,65,42,0.1)] sm:p-7">
      {children}
    </section>
  );
}

export function MiniQr() {
  const active = [
    0, 1, 2, 6, 7, 10, 12, 13, 14, 17, 20, 24, 26, 30, 31, 34, 36, 38, 40,
    41, 42, 43, 44, 46, 48,
  ];

  return (
    <div className="grid size-40 grid-cols-7 grid-rows-7 gap-1 rounded-[14px] bg-white p-4 shadow-[0_10px_24px_rgba(105,70,45,0.12)]">
      {Array.from({ length: 49 }).map((_, index) => (
        <span
          key={index}
          className={
            active.includes(index)
              ? 'rounded-[3px] bg-[#5b3f32]'
              : 'rounded-[3px] bg-[#f9eee7]'
          }
        />
      ))}
    </div>
  );
}

export function FinanceRows({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#ead7ca] bg-white/80">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-[1fr_116px] border-b border-[#f0dfd4] last:border-b-0"
        >
          <span className="px-4 py-3 text-sm font-light text-[#4f382d]">
            {label}
          </span>
          <span className="bg-[#f9eee7] px-4 py-3 text-right font-mono text-sm text-[#5b3f32]">
            {value} EUR
          </span>
        </div>
      ))}
    </div>
  );
}
