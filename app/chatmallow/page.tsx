import { Download, FileText } from 'lucide-react';
import { PageFrame, PaperCard } from '../components/site-shell';

export default function ChatmallowPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            spécialité de la maison
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Le Chat'mallow
          </h1>
          <p className="mt-4 text-sm font-light leading-7 text-[#684d40]">
            Retrouvez ici la fiche produit complète du Chat'mallow, la boisson
            signature du Kitty Café.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <img
              src="/chatmallow-photo.png"
              alt="Le Chat'mallow"
              className="h-full min-h-[360px] w-full rounded-[24px] border border-[#f1cbd2] object-cover"
            />
            <div className="rounded-[24px] border border-[#ead7ca] bg-white/70 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-[18px] bg-[#fff4f4] text-[#9a6961]">
                    <FileText className="size-7" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-lg font-normal text-[#2f211c]">
                      Fiche produit Chatmallow
                    </h2>
                    <p className="mt-1 text-sm font-light text-[#79584a]">
                      Document PDF
                    </p>
                  </div>
                </div>
                <a
                  href="/chatmallow.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5b3f32] px-5 py-3 text-sm font-light text-white shadow-sm hover:bg-[#7b5545]"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Ouvrir le PDF
                </a>
              </div>
            </div>
          </div>

          <iframe
            title="Fiche produit Chatmallow"
            src="/chatmallow.pdf"
            className="mt-8 h-[720px] w-full rounded-[22px] border border-[#ead7ca] bg-white"
          />
        </PaperCard>
      </section>
    </PageFrame>
  );
}
