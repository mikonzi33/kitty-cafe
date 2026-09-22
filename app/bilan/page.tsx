import { FinanceRows, PageFrame, PaperCard } from '../components/site-shell';
import { bilan } from '../data/site';

export default function BilanPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            situation financiere
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Bilan
          </h1>
          <p className="mb-7 mt-3 text-sm font-light leading-6 text-[#684d40]">
            Synthese des actifs, de la tresorerie, des capitaux propres et des
            dettes du Kitty Cafe.
          </p>
          <FinanceRows rows={bilan} />
        </PaperCard>
      </section>
    </PageFrame>
  );
}
