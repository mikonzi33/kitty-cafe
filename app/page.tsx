import {
  BarChart3,
  ChevronDown,
  Coffee,
  FileSpreadsheet,
  Menu as MenuIcon,
  QrCode,
  Sparkles,
} from 'lucide-react';

const menuItems = [
  ['Mewcha latte', 'Lait velours, espresso, cannelle', '5.40'],
  ['Bana cookie cloud', 'Cookie maison, creme vanille', '4.20'],
  ['Paw pancakes', 'Fruits rouges, sirop doux', '7.80'],
  ['Kitty bowl', 'Granola, yaourt, miel', '6.60'],
];

const bilan = [
  ['Actifs immobilises', '18 200'],
  ['Stocks & marchandises', '4 850'],
  ['Tresorerie', '9 420'],
  ['Capitaux propres', '21 300'],
  ['Dettes fournisseurs', '11 170'],
];

const resultat = [
  ['Chiffre d affaires', '64 900'],
  ['Achats consommes', '-18 700'],
  ['Charges externes', '-12 450'],
  ['Salaires', '-21 600'],
  ['Resultat net', '12 150'],
];

function MiniQr() {
  return (
    <div className="grid size-28 grid-cols-7 grid-rows-7 gap-1 rounded-md bg-white p-2 shadow-sm">
      {Array.from({ length: 49 }).map((_, index) => {
        const fixed =
          index < 3 ||
          [7, 14, 42, 43, 44, 6, 13, 20, 34, 41, 48].includes(index);
        const dotted = [10, 11, 17, 24, 26, 30, 31, 36, 38, 40, 46].includes(
          index,
        );
        return (
          <span
            key={index}
            className={
              fixed || dotted ? 'rounded-[2px] bg-[#17202a]' : 'bg-transparent'
            }
          />
        );
      })}
    </div>
  );
}

function FinancePanel({
  id,
  title,
  rows,
  accent,
}: {
  id: string;
  title: string;
  rows: string[][];
  accent: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[#d8cbb9] py-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-[#6b5740]">{accent}</p>
          <h2 className="text-2xl font-black text-[#17202a]">{title}</h2>
        </div>
        <FileSpreadsheet className="size-8 text-[#c04d35]" aria-hidden="true" />
      </div>
      <div className="overflow-hidden border border-[#d8cbb9] bg-white">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[1fr_120px] border-b border-[#eadfce] last:border-b-0"
          >
            <span className="px-4 py-3 text-sm font-semibold text-[#28313a]">
              {label}
            </span>
            <span className="bg-[#faf4ea] px-4 py-3 text-right font-mono text-sm font-bold text-[#17202a]">
              {value} EUR
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7efe3] text-[#17202a]">
      <header className="sticky top-0 z-20 border-b border-[#263341] bg-[#17202a] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#f6c9ca] text-[#17202a]">
              <Coffee className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-black leading-5">
                BANA Kitty Cafe
              </span>
              <span className="block text-xs font-semibold uppercase text-[#f5d9a7]">
                cafe financier
              </span>
            </span>
          </a>
          <nav className="flex items-center gap-2 text-sm font-bold">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-2 hover:bg-white/14">
                <MenuIcon className="size-4" aria-hidden="true" />
                Rubrique
                <ChevronDown className="size-4 transition group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 mt-3 w-72 border border-[#d8cbb9] bg-[#fffaf2] p-4 text-[#17202a] shadow-2xl">
                <a className="block px-2 py-2 hover:bg-[#f3e4ce]" href="#menu">
                  Menu QR
                </a>
                <a className="block px-2 py-2 hover:bg-[#f3e4ce]" href="#bilan">
                  Bilan
                </a>
                <a
                  className="block px-2 py-2 hover:bg-[#f3e4ce]"
                  href="#resultat"
                >
                  Compte de resultat
                </a>
              </div>
            </details>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[#d8cbb9] bg-[#fffaf2] p-6 shadow-sm sm:p-8">
          <p className="mb-3 inline-flex items-center gap-2 bg-[#17202a] px-3 py-1 text-xs font-black uppercase text-[#f5d9a7]">
            <Sparkles className="size-4" aria-hidden="true" />
            projet principal
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-none sm:text-6xl">
            BANA Kitty Cafe
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-[#594a39]">
            Un accueil mignon, une carte scannable, et les documents financiers
            essentiels dans une seule page claire.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Menu QR', 'Bilan', 'Compte de resultat'].map((item) => (
              <a
                key={item}
                href={
                  item === 'Menu QR'
                    ? '#menu'
                    : item === 'Bilan'
                      ? '#bilan'
                      : '#resultat'
                }
                className="border border-[#d8cbb9] bg-white px-4 py-4 text-sm font-black uppercase hover:border-[#c04d35] hover:text-[#c04d35]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="border border-[#263341] bg-[#17202a] p-5 text-white">
            <div className="mb-4 flex items-center gap-2 text-[#f5d9a7]">
              <BarChart3 className="size-5" />
              <span className="text-xs font-black uppercase">Cafe desk</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['64.9k', 'CA annuel'],
                ['12.1k', 'resultat'],
                ['4.8k', 'stock'],
                ['21.3k', 'capitaux'],
              ].map(([value, label]) => (
                <div key={label} className="bg-white/8 p-4">
                  <p className="text-2xl font-black">{value}</p>
                  <p className="text-xs font-semibold uppercase text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-48 border border-[#d8cbb9] bg-[linear-gradient(135deg,#f6c9ca,#f5d9a7_55%,#fffaf2)] p-5">
            <p className="text-sm font-black uppercase text-[#6b5740]">
              logo preview
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid size-20 place-items-center rounded-full bg-[#17202a] text-3xl font-black text-[#f6c9ca]">
                B
              </span>
              <p className="text-2xl font-black leading-6">
                douce data,
                <br />
                petit cafe.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-4 pb-2 sm:px-6">
        <div className="grid gap-6 border-y border-[#d8cbb9] py-8 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="text-xs font-black uppercase text-[#6b5740]">
              rubrique / menu
            </p>
            <h2 className="mt-1 text-3xl font-black">QR cafe menu</h2>
            <div className="mt-5 inline-block border border-[#d8cbb9] bg-white p-4">
              <MiniQr />
              <p className="mt-3 text-center text-xs font-bold uppercase text-[#6b5740]">
                scan bana menu
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {menuItems.map(([name, desc, price]) => (
              <article key={name} className="border border-[#d8cbb9] bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-black">{name}</h3>
                  <span className="font-mono font-black text-[#c04d35]">
                    {price}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-[#6b5740]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <FinancePanel
          id="bilan"
          title="Bilan"
          accent="situation financiere"
          rows={bilan}
        />
        <FinancePanel
          id="resultat"
          title="Compte de resultat"
          accent="performance annuelle"
          rows={resultat}
        />
      </div>
    </main>
  );
}
