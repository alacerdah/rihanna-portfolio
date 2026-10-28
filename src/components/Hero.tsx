import { creator } from '../data/content'

export default function Hero() {
  return (
    <section id="capa" className="relative w-full px-6 pt-8 pb-20 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14">
        <div className="relative min-w-[300px] flex-1 basis-[380px]">
          <img
            src="/images/sections/capa.jpg"
            alt={`${creator.firstName} ${creator.lastName}`}
            className="aspect-[4/5] w-full rounded-[20px] object-cover"
          />
          <div className="card-tilt absolute -right-4 -bottom-4 flex items-center gap-2 rounded-2xl bg-gold px-4.5 py-3 text-[13px] font-bold text-ink shadow-[0_10px_24px_rgba(23,24,26,.18)]">
            <span className="animate-pulse-ring inline-block size-2.5 rounded-full bg-blue-deep" />
            disponível pra novos projetos
          </div>
        </div>

        <div className="min-w-[300px] flex-1 basis-[420px]">
          <h1 className="text-[56px] leading-[1.05] font-bold text-ink">{creator.headline}</h1>
          <p className="mt-5.5 mb-8 max-w-[480px] text-lg leading-relaxed text-ink/70">{creator.subheadline}</p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-blue px-7 py-3.5 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
            >
              Vamos criar juntos
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-7 py-3.5 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
            >
              Ver trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
