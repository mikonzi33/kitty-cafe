import { PageFrame } from '../components/site-shell';

export default function PestelPage() {
  return (
    <PageFrame>
      <section className="mx-auto flex max-w-5xl justify-center px-4 pb-16 pt-32 sm:px-6">
        <div className="rounded-[32px] border border-[#ead7ca] bg-[#fffaf4] p-3 shadow-[0_18px_40px_rgba(96,65,42,0.1)]">
          <img
            src="/pestel.png"
            alt="Analyse PESTEL Kitty Café"
            className="w-full max-w-[820px] rounded-[24px] object-contain"
          />
        </div>
      </section>
    </PageFrame>
  );
}
