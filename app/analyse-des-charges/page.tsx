import { Download, FileText } from 'lucide-react';
import { PageFrame, PaperCard } from '../components/site-shell';

export default function AnalyseChargesPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            gestion financière
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Analyse des charges
          </h1>
          <p className="mt-4 text-sm font-light leading-7 text-[#684d40]">
            Cette rubrique regroupe les calculs, le tableau corrigé et
            l'interprétation des charges du projet Kitty Café.
          </p>

          <div className="mt-8 rounded-[24px] border border-[#ead7ca] bg-white/70 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-[18px] bg-[#fff4f4] text-[#9a6961]">
                  <FileText className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-normal text-[#2f211c]">
                    Analyse des charges, calculs et interprétation
                  </h2>
                  <p className="mt-1 text-sm font-light text-[#79584a]">
                    Document PDF
                  </p>
                </div>
              </div>
              <a
                href="/analyse-charges-kitty-cafe.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5b3f32] px-5 py-3 text-sm font-light text-white shadow-sm hover:bg-[#7b5545]"
              >
                <Download className="size-4" aria-hidden="true" />
                Ouvrir le PDF
              </a>
            </div>
          </div>

          <iframe
            title="Analyse des charges Kitty Café"
            src="/analyse-charges-kitty-cafe.pdf"
            className="mt-8 h-[720px] w-full rounded-[22px] border border-[#ead7ca] bg-white"
          />
        </PaperCard>
      </section>
    </PageFrame>
  );
}
