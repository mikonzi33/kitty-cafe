import { Clock, Heart, MapPin, PawPrint } from 'lucide-react';
import { KittyLogo, PageFrame, PaperCard } from './components/site-shell';

function InstagramLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-9" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.88 1.5a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Z"
      />
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-9" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.6 2c.32 2.55 1.72 4.07 4.13 4.23v3.03a7.1 7.1 0 0 1-4.08-1.22v6.98c0 3.53-2.23 6.08-5.77 6.08-3.2 0-5.64-2.12-5.64-5.16 0-3.55 3.23-6.1 6.75-5.37v3.15c-1.43-.43-3.35.26-3.35 2.08 0 1.26.98 2.08 2.22 2.08 1.48 0 2.4-.9 2.4-2.76V2h3.34Z"
      />
    </svg>
  );
}

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
              café chaleureux à Neuilly-sur-Seine
            </p>
            <h1 className="font-hand max-w-3xl text-5xl font-normal leading-[0.98] text-[#2f211c] sm:text-7xl">
              La journée commence avec un petit café.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-8 text-[#5d463b]">
              Un café doux où l'on peut se détendre en compagnie de chats,
              avec boissons chaudes, pâtisseries et une ambiance calme.
            </p>
          </div>

          <aside className="self-end rounded-[30px] border border-white/70 bg-[#fffaf4]/82 p-4 shadow-[0_22px_70px_rgba(91,63,50,0.2)] backdrop-blur-md">
            <img
              src="/kitty-poster.png"
              alt="Poster Kitty Café"
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
            Des boissons chaudes, des boissons froides et des pâtisseries dans
            une ambiance douce et conviviale. Les chats proviennent d'une
            association et peuvent être adoptés.
          </p>
        </PaperCard>

        <PaperCard>
          <Clock className="mb-4 size-6 text-[#bf8c8d]" aria-hidden="true" />
          <h2 className="font-hand text-3xl font-normal text-[#2f211c]">
            Horaires
          </h2>
          <p className="mt-2 text-sm font-light leading-6 text-[#684d40]">
            Ouvert de 9h00 à 17h00.
            <br />
            Fermé le lundi et le mardi.
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

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 rounded-[30px] border border-[#ead7ca] bg-[#fffaf4]/95 p-5 shadow-[0_18px_40px_rgba(96,65,42,0.1)] lg:grid-cols-[0.9fr_1.1fr] lg:p-7">
          <div className="overflow-hidden rounded-[24px] border border-[#f1cbd2] bg-white">
            <img
              src="/chatmallow-photo.png"
              alt="Le Chat'mallow, nouveauté du Kitty Café"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-hand text-sm text-[#b37575]">
              Nouveauté
            </p>
            <h2 className="font-hand mt-2 text-5xl font-normal leading-none text-[#2f211c]">
              Le Chat'mallow
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#684d40]">
              Un chocolat chaud gourmand avec topping de guimauves
              caramélisées, accompagné d'un sablé en forme de patte de chat.
              Une boisson signature douce, chaleureuse et pensée pour
              l'expérience Kitty Café.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-[#5b3f32] sm:grid-cols-3">
              <div className="rounded-[18px] bg-[#fff4f4] p-4">
                <span className="block font-light text-[#9a6961]">Prix</span>
                <strong className="mt-1 block font-normal">9,50 € TTC</strong>
              </div>
              <div className="rounded-[18px] bg-[#fff4f4] p-4">
                <span className="block font-light text-[#9a6961]">Objectif</span>
                <strong className="mt-1 block font-normal">2 500 tasses/an</strong>
              </div>
              <div className="rounded-[18px] bg-[#fff4f4] p-4">
                <span className="block font-light text-[#9a6961]">Marge</span>
                <strong className="mt-1 block font-normal">forte rentabilité</strong>
              </div>
            </div>
            <a
              href="/chatmallow"
              className="mt-6 inline-flex w-fit rounded-full bg-[#5b3f32] px-5 py-3 text-sm font-light text-white shadow-sm hover:bg-[#7b5545]"
            >
              Voir la fiche produit
            </a>
          </div>
        </div>
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
        <div className="mt-6 rounded-[28px] border border-[#f1cbd2] bg-[#fff4f4] p-6 text-center shadow-[0_18px_40px_rgba(96,65,42,0.08)] sm:p-8">
          <p className="font-hand text-4xl font-normal text-[#2f211c]">
            Suivez-nous sur Instagram et TikTok
          </p>
          <p className="mt-2 text-sm font-light text-[#79584a]">
            Les moments doux du café, les chats du jour et les nouveautés.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-4 rounded-[24px] border border-[#f1cbd2] bg-white px-6 py-5 text-left text-[#5b3f32] shadow-[0_12px_28px_rgba(96,65,42,0.08)] transition hover:-translate-y-0.5 hover:bg-[#ffe8ee] hover:shadow-[0_16px_34px_rgba(196,95,129,0.18)]"
            >
              <span className="grid size-16 place-items-center rounded-full bg-[#ffe2ea] text-[#c45f81] transition group-hover:scale-105">
                <InstagramLogo />
              </span>
              <span>
                <span className="block text-lg font-normal">Instagram</span>
                <span className="block text-xs font-light text-[#9a6961]">
                  photos, chats et nouveautés
                </span>
              </span>
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-4 rounded-[24px] border border-[#ead7ca] bg-white px-6 py-5 text-left text-[#5b3f32] shadow-[0_12px_28px_rgba(96,65,42,0.08)] transition hover:-translate-y-0.5 hover:bg-[#fff1df] hover:shadow-[0_16px_34px_rgba(91,63,50,0.16)]"
            >
              <span className="grid size-16 place-items-center rounded-full bg-[#f6e4d5] text-[#2f211c] transition group-hover:scale-105">
                <TikTokLogo />
              </span>
              <span>
                <span className="block text-lg font-normal">TikTok</span>
                <span className="block text-xs font-light text-[#9a6961]">
                  moments doux en vidéo
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
