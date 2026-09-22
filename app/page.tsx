import {
  ChevronDown,
  Coffee,
  FileText,
  Heart,
  MapPin,
  Menu as MenuIcon,
  PawPrint,
  QrCode,
} from 'lucide-react';

const menuItems = [
  ['Latte coeur rose', 'espresso doux, lait mousseux, note de vanille', '5.40'],
  ['Chocolat chaton', 'cacao chaud, creme legere, guimauve', '4.90'],
  ['Cookie Bana', 'cookie maison aux pepites, servi tiede', '3.80'],
  ['Pancakes nuage', 'fruits rouges, miel, creme fouettee', '7.60'],
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

const infoCards = [
  {
    title: 'Localisation',
    text: 'Neuilly-sur-Seine',
    Icon: MapPin,
  },
  {
    title: 'Horaires',
    text: '9h00 - 17h00, ferme lundi et mardi',
    Icon: Coffee,
  },
  {
    title: 'Ambiance',
    text: 'calme, chaleureuse, pastel et professionnelle',
    Icon: PawPrint,
  },
];

function MiniQr() {
  const active = [0, 1, 2, 6, 7, 10, 12, 13, 14, 17, 20, 24, 26, 30, 31, 34, 36, 38, 40, 41, 42, 43, 44, 46, 48];

  return (
    <div className="grid size-32 grid-cols-7 grid-rows-7 gap-1 rounded-[10px] bg-white p-3 shadow-[0_10px_24px_rgba(105,70,45,0.12)]">
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

function PaperSection({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[28px] border border-[#ead7ca] bg-[#fffaf4]/95 p-5 shadow-[0_18px_40px_rgba(96,65,42,0.1)] sm:p-7"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-hand text-sm text-[#b37575]">{eyebrow}</p>
          <h2 className="font-hand text-4xl font-normal text-[#2f211c]">
            {title}
          </h2>
        </div>
        <span className="grid size-11 place-items-center rounded-full bg-[#f7d6d5] text-[#6f4a3c]">
          <PawPrint className="size-5" aria-hidden="true" />
        </span>
      </div>
      {children}
    </section>
  );
}

function FinanceRows({ rows }: { rows: string[][] }) {
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5e7da] text-[#3a2922]">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/50 bg-[#fff8f1]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-[#f5c9c9] text-[#5b3f32]">
              <Coffee className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="font-hand block text-2xl leading-5 text-[#2f211c]">
                BANA Kitty Cafe
              </span>
              <span className="block text-[11px] font-light uppercase tracking-[0.18em] text-[#8b6f62]">
                cafe doux
              </span>
            </span>
          </a>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#e9cbc7] bg-white/70 px-4 py-2 text-sm font-light text-[#5b3f32] shadow-sm hover:bg-[#fff4f2]">
              <MenuIcon className="size-4" aria-hidden="true" />
              Rubrique
              <ChevronDown className="size-4 transition group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-[22px] border border-[#ead7ca] bg-[#fffaf4] p-3 text-[#4a352b] shadow-[0_18px_46px_rgba(74,53,43,0.18)]">
              {[
                ['Menu QR', '#menu'],
                ['Bilan', '#bilan'],
                ['Compte de resultat', '#resultat'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  className="block rounded-[15px] px-4 py-3 text-sm font-light hover:bg-[#f9e1df]"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-[88vh] overflow-hidden bg-cover bg-center px-4 pb-10 pt-28 sm:px-6"
        style={{ backgroundImage: "url('/kitty-hero.png')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,241,0.92),rgba(255,238,235,0.74)_46%,rgba(255,248,241,0.26))]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_380px]">
          <div className="flex min-h-[62vh] flex-col justify-center">
            <p className="mb-5 flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-light text-[#79584a] shadow-sm">
              <Heart className="size-4 text-[#c98f92]" aria-hidden="true" />
              pastel cafe project
            </p>
            <h1 className="font-hand max-w-3xl text-6xl font-normal leading-[0.9] text-[#2f211c] sm:text-8xl">
              BANA
              <br />
              Kitty Cafe
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-8 text-[#5d463b]">
              Un espace doux avec cafe, chats, QR menu et documents financiers
              presentes comme des petites feuilles sur un tableau.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[#5b3f32] px-6 py-3 text-sm font-light text-white shadow-[0_12px_24px_rgba(91,63,50,0.22)] hover:bg-[#4d3429]"
              >
                Voir le menu
              </a>
              <a
                href="#bilan"
                className="rounded-full border border-[#e3b9b5] bg-white/70 px-6 py-3 text-sm font-light text-[#5b3f32] hover:bg-[#fff4f2]"
              >
                Ouvrir le bilan
              </a>
            </div>
          </div>

          <aside className="self-end rounded-[30px] border border-white/70 bg-[#fffaf4]/82 p-4 shadow-[0_22px_70px_rgba(91,63,50,0.2)] backdrop-blur-md">
            <img
              src="/kitty-poster.png"
              alt="Kitty Cafe poster moodboard"
              className="aspect-[0.72] w-full rounded-[22px] object-cover"
            />
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3">
        {infoCards.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="rounded-[24px] border border-[#ead7ca] bg-[#fffaf4] p-5 shadow-[0_12px_28px_rgba(96,65,42,0.08)]"
          >
            <Icon className="mb-4 size-6 text-[#bf8c8d]" aria-hidden="true" />
            <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
              {title}
            </h2>
            <p className="mt-2 text-sm font-light leading-6 text-[#684d40]">
              {text}
            </p>
          </article>
        ))}
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <PaperSection id="menu" title="QR cafe menu" eyebrow="rubrique / menu">
          <div className="grid gap-6 md:grid-cols-[170px_1fr]">
            <div>
              <MiniQr />
              <p className="mt-3 flex items-center gap-2 text-sm font-light text-[#79584a]">
                <QrCode className="size-4" aria-hidden="true" />
                scan Bana menu
              </p>
            </div>
            <div className="grid gap-3">
              {menuItems.map(([name, desc, price]) => (
                <article
                  key={name}
                  className="rounded-[18px] border border-[#f0dfd4] bg-white/75 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-hand text-2xl font-normal text-[#2f211c]">
                      {name}
                    </h3>
                    <span className="font-mono text-sm text-[#8d5f50]">
                      {price}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-6 text-[#684d40]">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </PaperSection>

        <div className="grid gap-6">
          <PaperSection
            id="bilan"
            title="Bilan"
            eyebrow="situation financiere"
          >
            <FinanceRows rows={bilan} />
          </PaperSection>
          <PaperSection
            id="resultat"
            title="Compte de resultat"
            eyebrow="performance annuelle"
          >
            <FinanceRows rows={resultat} />
          </PaperSection>
        </div>
      </div>

      <footer className="border-t border-[#ead7ca] bg-[#fff8f1] px-4 py-6 text-center text-sm font-light text-[#79584a]">
        <FileText className="mx-auto mb-2 size-4" aria-hidden="true" />
        BANA Kitty Cafe - menu, bilan et compte de resultat
      </footer>
    </main>
  );
}
