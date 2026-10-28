import { brandLogos, stats } from '../data/content'

export default function Marcas() {
  const track = [...brandLogos, ...brandLogos]

  return (
    <section id="marcas" className="w-full overflow-hidden bg-ink py-18">
      <div className="mx-auto mb-7.5 max-w-6xl px-6 sm:px-10">
        <span className="text-[13px] font-bold tracking-[0.2em] text-gold">CONFIANÇA</span>
        <h2 className="mt-2.5 text-[30px] text-bg">Marcas que confiaram em mim</h2>
      </div>

      <div className="mb-10 overflow-hidden">
        <div className="marquee-track gap-14">
          {track.map((src, i) => (
            <div key={src + i} className="flex h-16 w-28 flex-none items-center justify-center rounded-xl bg-bg/10 px-4">
              <img src={src} alt="" className="max-h-9 max-w-full object-contain opacity-80 grayscale" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6 sm:px-10">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 basis-[180px] rounded-[18px] bg-bg p-6 text-center">
            <div className="text-[30px] font-bold text-ink">{s.value}</div>
            <div className="mt-1 text-[13px] text-ink/60">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-11.5 max-w-6xl px-6 sm:px-10">
        <h3 className="mb-5.5 text-[22px] text-bg">Conteúdo que performa</h3>
        <div className="flex flex-wrap gap-4.5">
          <div className="flex-1 basis-[260px] rounded-[18px] bg-bg p-6">
            <div className="mb-2.5 text-[13px] font-semibold text-ink/60">alcance mensal médio</div>
            <svg viewBox="0 0 200 70" width="100%" height="70" preserveAspectRatio="none" role="img" aria-label="Gráfico de linha mostrando crescimento de alcance">
              <polyline points="0,62 30,52 60,48 90,34 120,30 150,14 180,9 200,4" fill="none" stroke="#2e4e78" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mt-2.5 text-[26px] font-bold text-ink">[75K]</div>
          </div>

          <div className="flex-1 basis-[220px] rounded-[18px] bg-bg p-6 text-center">
            <div className="mb-4 text-[13px] font-semibold text-ink/60">público por faixa etária</div>
            <div
              role="img"
              aria-label="Gráfico de pizza: 45% de 18 a 24 anos, 30% de 25 a 34, 25% acima de 35"
              className="mx-auto size-[108px] rounded-full"
              style={{ background: 'conic-gradient(#d7a33e 0 45%, #2e4e78 45% 75%, #17181a 75% 100%)' }}
            />
            <div className="mt-3.5 text-xs text-ink/55">18–24 · 25–34 · 35+</div>
          </div>

          <div className="flex-1 basis-[260px] rounded-[18px] bg-bg p-6">
            <div className="mb-4 text-[13px] font-semibold text-ink/60">engajamento por formato</div>
            <div
              role="img"
              aria-label="Gráfico de barras: Reels é o formato com mais engajamento, seguido de carrossel, stories e estático"
              className="flex h-[84px] items-end gap-2.5"
            >
              <div className="h-[95%] flex-1 rounded-t-md bg-gold" />
              <div className="h-[68%] flex-1 rounded-t-md bg-blue-deep" />
              <div className="h-[46%] flex-1 rounded-t-md bg-gold-deep" />
              <div className="h-[24%] flex-1 rounded-t-md bg-ink" />
            </div>
            <div className="mt-2.5 text-[11px] text-ink/55">Reels · Carrossel · Stories · Estático</div>
          </div>
        </div>
      </div>
    </section>
  )
}
