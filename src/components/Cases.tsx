import { cases } from '../data/content'

const gradients = ['from-ink to-gold-deep', 'from-blue-deep to-ink', 'from-gold-deep to-blue-deep']
const borderColors = ['border-gold', 'border-blue', 'border-gold']
const metricColors = ['text-blue-deep', 'text-gold-deep', 'text-blue-deep']

export default function Cases() {
  return (
    <section id="cases" className="w-full bg-bg px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold tracking-[0.2em] text-gold-deep">RESULTADOS</span>
        <h2 className="mt-2.5 mb-3 text-[34px] text-ink">Cases de sucesso</h2>
        <p className="mb-9 max-w-[520px] text-[15px] text-ink/65">
          Três exemplos de como conteúdo autêntico virou resultado de verdade pra quem confiou no meu trabalho.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {cases.map((c, i) => (
            <div key={c.brand} className="media-card overflow-hidden rounded-[22px] bg-white shadow-[0_12px_30px_rgba(23,24,26,.08)]">
              <div className={`media-card-img flex aspect-video items-center justify-center bg-gradient-to-br ${gradients[i]} text-[13px] text-white/85 transition-transform duration-400`}>
                [ case ]
              </div>
              <div className="p-6.5">
                <span className="text-xs font-bold tracking-wide text-ink/50">{c.brand}</span>
                <p className="mt-2 mb-4.5 text-sm leading-relaxed text-ink/70">{c.challenge}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-[32px] font-bold ${metricColors[i]}`}>{c.metric}</span>
                  <span className="text-[13px] text-ink/55">{c.metricLabel}</span>
                </div>
                <p className={`mt-4 border-l-[3px] ${borderColors[i]} pl-2.5 text-[13px] text-ink/60 italic`}>{c.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
