import { FinanceRows, PageFrame, PaperCard } from '../components/site-shell';
import { bilanActif, bilanPassif } from '../data/site';

export default function BilanPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            bilan d'ouverture
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Bilan
          </h1>
          <p className="mb-7 mt-3 text-sm font-light leading-6 text-[#684d40]">
            Repartition de l'actif et du passif au lancement du Kitty Cafe.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <section>
              <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
                Actif
              </h2>
              <FinanceRows rows={bilanActif} />
            </section>
            <section>
              <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
                Passif
              </h2>
              <FinanceRows rows={bilanPassif} />
            </section>
          </div>
        </PaperCard>
      </section>
    </PageFrame>
  );
}
