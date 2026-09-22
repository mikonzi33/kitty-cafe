import { Camera, Clock, Heart, MapPin, Music2, PawPrint } from 'lucide-react';
import { KittyLogo, PageFrame, PaperCard } from './components/site-shell';

export default function Home() {
  return (
    <PageFrame>
      <section
        className="relative min-h-[86vh] overflow-hidden bg-cover bg-center px-4 pb-10 pt-32 sm:px-6"
        style={{ backgroundImage: "url('/kitty-hero.png')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,241,0.94),rgba(255,238,235,0.77)_48%,rgba(255,248,241,0.3))]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_390px]">
          <div className="flex min-h-[58vh] flex-col justify-center">
            <div className="mb-8">
              <KittyLogo />
            </div>
            <p className="mb-5 flex w-fit items-center gap-2 rounded-full bg-white/72 px-4 py-2 text-sm font-light text-[#79584a] shadow-sm">
              <Heart className="size-4 text-[#c98f92]" aria-hidden="true" />
              cafe chaleureux a Neuilly-sur-Seine
            </p>
            <h1 className="font-hand max-w-3xl text-5xl font-normal leading-[0.98] text-[#2f211c] sm:text-7xl">
              La dignite commence avec un petit cafe.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-8 text-[#5d463b]">
              Un cafe doux ou l'on peut se detendre en compagnie de chats,
              avec boissons chaudes, patisseries et une ambiance calme.
            </p>
          </div>

          <aside className="self-end rounded-[30px] border border-white/70 bg-[#fffaf4]/82 p-4 shadow-[0_22px_70px_rgba(91,63,50,0.2)] backdrop-blur-md">
            <img
              src="/kitty-poster.png"
              alt="Kitty Cafe poster"
              className="aspect-[0.72] w-full rounded-[22px] object-cover"
            />
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3">
        <PaperCard>
          <PawPrint className="mb-4 size-6 text-[#bf8c8d]" aria-hidden="true" />
          <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
            Concept
          </h2>
          <p className="mt-2 text-sm font-light leading-6 text-[#684d40]">
            Des boissons chaudes, des boissons froides et des patisseries dans
            une ambiance douce et conviviale. Les chats proviennent d'une
            association et peuvent etre adoptes.
          </p>
        </PaperCard>

        <PaperCard>
          <Clock className="mb-4 size-6 text-[#bf8c8d]" aria-hidden="true" />
          <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
            Horaires
          </h2>
          <p className="mt-2 text-sm font-light leading-6 text-[#684d40]">
            Ouvert de 9h00 a 17h00.
            <br />
            Ferme le lundi et le mardi.
          </p>
        </PaperCard>

        <PaperCard>
          <MapPin className="mb-4 size-6 text-[#bf8c8d]" aria-hidden="true" />
          <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
            Localisation
          </h2>
          <p className="mt-2 text-sm font-light leading-6 text-[#684d40]">
            Neuilly-sur-Seine, France.
          </p>
        </PaperCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="overflow-hidden rounded-[28px] border border-[#ead7ca] bg-[#fffaf4] p-3 shadow-[0_18px_40px_rgba(96,65,42,0.1)]">
          <iframe
            title="Google Maps - Neuilly-sur-Seine"
            src="https://www.google.com/maps?q=Neuilly-sur-Seine%2C%20France&output=embed"
            className="h-[360px] w-full rounded-[22px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 rounded-[28px] border border-[#f1cbd2] bg-[#fff4f4] p-6 text-center shadow-[0_18px_40px_rgba(96,65,42,0.08)]">
          <p className="font-hand text-4xl font-normal text-[#2f211c]">
            Suivez-nous sur Instagram et TikTok
          </p>
          <p className="mt-2 text-sm font-light text-[#79584a]">
            Les moments doux du cafe, les chats du jour et les nouveautes.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-light text-[#5b3f32] shadow-sm hover:bg-[#ffe8ee]"
            >
              <Camera className="size-5 text-[#c45f81]" aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-light text-[#5b3f32] shadow-sm hover:bg-[#ffe8ee]"
            >
              <Music2 className="size-5 text-[#2f211c]" aria-hidden="true" />
              TikTok
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
