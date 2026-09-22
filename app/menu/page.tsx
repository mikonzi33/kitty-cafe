import { PageFrame } from '../components/site-shell';

export default function MenuPage() {
  return (
    <PageFrame>
      <section className="mx-auto flex max-w-4xl justify-center px-4 pb-16 pt-32 sm:px-6">
        <div className="rounded-[32px] border border-[#f4d9df] bg-[#fffaf4] p-3 shadow-[0_18px_40px_rgba(96,65,42,0.1)]">
          <img
            src="/menu-qr.png"
            alt="Kitty Cafe QR menu"
            className="w-full max-w-[680px] rounded-[24px] object-contain"
          />
        </div>
      </section>
    </PageFrame>
  );
}
