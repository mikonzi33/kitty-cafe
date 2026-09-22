import { FinanceRows, PageFrame, PaperCard } from '../components/site-shell';
import {
  compteResultat,
  fournituresConsommables,
  salaires,
  servicesExterieurs,
} from '../data/site';

function SalaryTable() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#ead7ca] bg-white/80">
      <div className="grid grid-cols-[1.2fr_repeat(5,1fr)] bg-[#f9eee7] text-center text-xs font-light text-[#5b3f32]">
        {['', '1', '2', '3', '4', 'Total'].map((label) => (
          <span key={label} className="px-3 py-3">
            {label}
          </span>
        ))}
      </div>
      {salaires.map((row) => (
        <div
          key={row[0]}
          className="grid grid-cols-[1.2fr_repeat(5,1fr)] border-t border-[#f0dfd4] text-center text-sm font-light text-[#4f382d]"
        >
          {row.map((cell, index) => (
            <span
              key={`${row[0]}-${index}`}
              className={index === 0 ? 'px-3 py-3 text-left' : 'px-3 py-3'}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ResultatPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            performance annuelle
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Compte de résultat
          </h1>
          <p className="mb-7 mt-3 text-sm font-light leading-6 text-[#684d40]">
            Présentation des revenus, charges, impôts et résultat de l'exercice
            du Kitty Café.
          </p>
          <FinanceRows rows={compteResultat} />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <section>
              <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
                Fournitures consommables
              </h2>
              <FinanceRows rows={fournituresConsommables} />
            </section>
            <section>
              <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
                Services extérieurs
              </h2>
              <FinanceRows rows={servicesExterieurs} />
            </section>
          </div>

          <section className="mt-8">
            <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
              Salaires et charges
            </h2>
            <SalaryTable />
          </section>
        </PaperCard>
      </section>
    </PageFrame>
  );
}
