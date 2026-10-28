import { steps } from '../data/content'

const colors = ['bg-gold', 'bg-blue', 'bg-gold', 'bg-blue']

export default function Trabalho() {
  return (
    <section id="trabalho" className="w-full bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold tracking-[0.2em] text-blue-deep">PROCESSO</span>
        <h2 className="mt-2.5 mb-11 text-[34px] text-ink">Como eu trabalho</h2>

        <div className="relative flex flex-wrap justify-between gap-6">
          <div className="absolute top-[27px] left-[54px] right-[54px] h-0.5 bg-[repeating-linear-gradient(90deg,rgba(23,24,26,.2)_0_10px,transparent_10px_20px)]" />
          {steps.map((step, i) => (
            <div key={step.title} className="min-w-[180px] flex-1 basis-[200px] text-center">
              <div className={`relative z-10 mx-auto mb-4 flex size-[54px] items-center justify-center rounded-full text-xl font-bold text-ink ${colors[i]}`}>
                {i + 1}
              </div>
              <h3 className="mb-2 text-[17px] text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
