import { videos } from '../data/content'

const gradients = [
  'from-ink to-blue-deep',
  'from-blue-deep to-gold-deep',
  'from-gold-deep to-ink',
  'from-ink to-gold-deep',
  'from-blue-deep to-ink',
]

export default function Videos() {
  return (
    <section id="videos" className="w-full bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold tracking-[0.2em] text-blue-deep">PORTFÓLIO</span>
        <h2 className="mt-2.5 mb-7 text-[34px] text-ink">Vídeos &amp; conceitos pra feed</h2>

        <div className="hscroll flex gap-5.5 overflow-x-auto pb-4.5 [scroll-snap-type:x_mandatory]">
          {videos.map((v, i) => (
            <div key={v.client + i} className="media-card w-[220px] flex-none rounded-[22px] bg-bg p-2.5 [scroll-snap-align:start]">
              <div
                className={`media-card-img flex aspect-[9/16] items-center justify-center rounded-[20px] bg-gradient-to-br ${gradients[i % gradients.length]} text-sm font-semibold text-white/85 transition-transform duration-400`}
              >
                [ vídeo ]
              </div>
              <p className="mt-2.5 mb-0.5 ml-1 text-[13px] font-semibold text-ink">{v.client}</p>
              <p className="ml-1 text-xs text-ink/55">{v.tag}</p>
            </div>
          ))}
        </div>
        <p className="-mt-1 text-[13px] text-ink/50">arraste pro lado pra ver mais →</p>
      </div>
    </section>
  )
}
