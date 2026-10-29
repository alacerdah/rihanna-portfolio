import type { CSSProperties } from 'react'
import { creator, creatorFullName, niches, whyList } from '../data/content'

const polaroids = [
  { src: '/images/sections/about1.jpg', r: '-9deg', top: 0, left: 0 },
  { src: '/images/sections/about2.jpg', r: '7deg', top: 64, left: 142 },
  { src: '/images/sections/about3.jpg', r: '-4deg', top: 160, left: 46 },
]

export default function Sobre() {
  return (
    <section id="sobre" className="w-full bg-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-14 px-6 pt-18 pb-18 sm:px-10">
        <div className="min-w-[300px] flex-1 basis-[420px]">
          <span className="text-[13px] font-bold tracking-[0.2em] text-gold">SOBRE MIM</span>
          <h2 className="mt-2.5 text-[36px] text-bg">Oi, eu sou {creator.firstName}.</h2>
          <p className="mt-4.5 max-w-[480px] text-base leading-relaxed text-bg/72">{creator.bio}</p>
        </div>

        <div className="relative h-[300px] min-w-[240px] flex-none basis-[260px] self-center">
          {polaroids.map((p) => (
            <div
              key={p.src}
              className="polaroid absolute w-[118px] rounded-[4px] bg-bg p-2 pb-5.5 shadow-[0_10px_22px_rgba(0,0,0,.35)]"
              style={{ '--r': p.r, top: p.top, left: p.left } as CSSProperties}
            >
              <img src={p.src} alt="" className="aspect-square w-full rounded-sm object-cover" />
            </div>
          ))}
        </div>

        <div className="card-tilt min-w-[280px] flex-1 basis-[320px] rounded-[20px] bg-bg p-7.5 shadow-[0_16px_36px_rgba(0,0,0,.3)]">
          <h3 className="mb-4 text-xl text-ink">por que trabalhar comigo</h3>
          <ul className="flex flex-col gap-3.5">
            {whyList.map((item, i) => (
              <li key={item} className="flex gap-2.5 text-[15px] text-ink">
                <span className={i % 2 === 0 ? 'font-extrabold text-gold-deep' : 'font-extrabold text-blue-deep'}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-blue py-11">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-6 text-center sm:px-10">
          <div className="flex-none">
            <span className="text-[13px] font-bold tracking-[0.2em] text-ink">NICHOS &amp; SERVIÇOS</span>
            <div className="mt-4 flex flex-col items-center gap-2.5">
              {niches.map((n) => (
                <span
                  key={n}
                  className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition hover:-translate-y-1 hover:bg-gold-deep"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-none items-center justify-center">
            <img
              src="/images/sections/nicho-cutout.webp"
              alt={creatorFullName}
              className="animate-float max-h-[600px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
