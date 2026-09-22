import { QrCode } from 'lucide-react';
import { MiniQr, PageFrame, PaperCard } from '../components/site-shell';
import { menuItems } from '../data/site';

export default function MenuPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">rubrique / menu</p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            QR cafe menu
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[210px_1fr]">
            <div>
              <MiniQr />
              <p className="mt-3 flex items-center gap-2 text-sm font-light text-[#79584a]">
                <QrCode className="size-4" aria-hidden="true" />
                scan Kitty Cafe menu
              </p>
            </div>
            <div className="grid gap-3">
              {menuItems.map(([name, desc, price]) => (
                <article
                  key={name}
                  className="rounded-[18px] border border-[#f0dfd4] bg-white/75 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-hand text-2xl font-normal text-[#2f211c]">
                      {name}
                    </h2>
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
        </PaperCard>
      </section>
    </PageFrame>
  );
}
