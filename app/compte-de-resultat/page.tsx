import { FinanceRows, PageFrame, PaperCard } from '../components/site-shell';
import { resultat } from '../data/site';

export default function ResultatPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            performance annuelle
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Compte de resultat
          </h1>
          <p className="mb-7 mt-3 text-sm font-light leading-6 text-[#684d40]">
            Presentation des revenus, des charges et du resultat net du Kitty
            Cafe.
          </p>
          <FinanceRows rows={resultat} />
        </PaperCard>
      </section>
    </PageFrame>
  );
}
