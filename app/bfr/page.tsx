import { PageFrame, PaperCard } from '../components/site-shell';

const bfrData = [
  ["Chiffre d'affaires prévisionnel", '243 600 €'],
  ['Achats de marchandises', '65 000 €'],
  ['Stock final retenu', '2 000 €'],
  ['Créances clients retenues', '0 €'],
  ['Délai fournisseurs retenu', '30 jours'],
];

function BfrRows({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#ead7ca] bg-white/80">
      <div className="grid grid-cols-[1fr_150px] bg-[#f9eee7] text-sm font-normal text-[#5b3f32]">
        <span className="px-4 py-3">Élément</span>
        <span className="px-4 py-3 text-right">Montant</span>
      </div>
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-[1fr_150px] border-t border-[#f0dfd4] text-sm font-light text-[#4f382d]"
        >
          <span className="px-4 py-3">{label}</span>
          <span className="bg-[#fff7f1] px-4 py-3 text-right font-mono text-[#5b3f32]">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BfrPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <PaperCard>
          <p className="font-hand text-sm text-[#b37575]">
            prévisionnel financier
          </p>
          <h1 className="font-hand text-6xl font-normal text-[#2f211c]">
            Calcul du BFR prévisionnel
          </h1>
          <p className="mb-7 mt-3 text-sm font-light leading-6 text-[#684d40]">
            Le besoin en fonds de roulement mesure le décalage entre les
            encaissements clients, les stocks et les dettes fournisseurs.
          </p>

          <section>
            <h2 className="font-hand mb-3 text-3xl font-normal text-[#2f211c]">
              Données utilisées
            </h2>
            <BfrRows rows={bfrData} />
          </section>

          <section className="mt-8 space-y-4 text-sm font-light leading-7 text-[#4f382d]">
            <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
              Pourquoi ces montants ?
            </h2>
            <p>
              <strong className="font-normal">Stock final : 2 000 €.</strong>{' '}
              Pour un coffee shop, ce niveau reste raisonnable par rapport aux
              65 000 € d'achats annuels de marchandises : on conserve un stock
              de sécurité sans immobiliser trop de trésorerie.
            </p>
            <p>
              <strong className="font-normal">Créances clients : 0 €.</strong>{' '}
              Le Kitty Café vend principalement aux particuliers, qui règlent
              leurs consommations immédiatement. On ne retient donc pas de délai
              client dans le prévisionnel.
            </p>
            <p>
              <strong className="font-normal">Dettes fournisseurs :</strong>{' '}
              elles sont calculées à partir d'un délai moyen de paiement de
              30 jours sur les achats de marchandises.
            </p>
          </section>

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#ead7ca] bg-white/70 p-5">
              <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
                Dettes fournisseurs
              </h2>
              <p className="mt-3 font-mono text-sm text-[#5b3f32]">
                65 000 € × 30 / 360 = 5 417 €
              </p>
            </div>
            <div className="rounded-[20px] border border-[#ead7ca] bg-[#fff4f4] p-5">
              <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
                Calcul du BFR
              </h2>
              <p className="mt-3 font-mono text-sm text-[#5b3f32]">
                2 000 € + 0 € - 5 417 € = -3 417 €
              </p>
            </div>
          </section>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-[#e6c8bd] bg-[#fff4f0] text-[#4f382d]">
            <div className="grid grid-cols-[1fr_150px] border-b border-[#e6c8bd]">
              <span className="px-4 py-3 font-normal">BFR prévisionnel</span>
              <span className="px-4 py-3 text-right font-mono">-3 417 €</span>
            </div>
            <div className="grid grid-cols-[1fr_150px]">
              <span className="px-4 py-3 font-normal">Interprétation</span>
              <span className="px-4 py-3 text-right">BFR négatif</span>
            </div>
          </div>

          <p className="mt-8 text-sm font-light leading-7 text-[#4f382d]">
            Ce résultat est cohérent : le fonctionnement du café génère peu de
            créances clients, car les clients paient comptant, tandis que les
            fournisseurs peuvent laisser un délai de paiement. Le BFR devient
            donc négatif, ce qui signifie que l'exploitation ne nécessite pas de
            financement important à court terme.
          </p>

          <p className="mt-6 rounded-[18px] bg-white/65 p-4 text-center text-sm font-normal text-[#5b3f32]">
            Formule à retenir : BFR = Stock final + Créances clients - Dettes
            fournisseurs.
          </p>
        </PaperCard>
      </section>
    </PageFrame>
  );
}
