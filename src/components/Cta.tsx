import { creator, creatorFullName } from '../data/content'
import { IconButton, InstagramIcon, TiktokIcon, YoutubeIcon } from './Icons'

export default function Cta() {
  return (
    <section id="cta" className="w-full bg-ink px-6 py-22.5 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <h2 className="max-w-[560px] text-[30px] text-bg sm:text-[40px]">
          Vamos <span className="font-script text-[34px] text-gold sm:text-[46px]">criar</span> juntos?
        </h2>
        <p className="mt-4.5 mb-8 max-w-[460px] text-base text-bg/70">
          Me chama e conta sobre a sua marca — adoro conhecer histórias novas pra contar em vídeo.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href={`mailto:${creator.email}`}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-blue px-7 py-3.5 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-bg"
          >
            [{creator.email}]
          </a>
        </div>
        <div className="mt-8 flex gap-3.5">
          <IconButton href="#" label="Instagram" dark>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" label="TikTok" dark>
            <TiktokIcon />
          </IconButton>
          <IconButton href="#" label="YouTube" dark>
            <YoutubeIcon />
          </IconButton>
        </div>
        <p className="mt-12 text-xs text-bg/40">
          © 2026 {creatorFullName}. Feito com carinho.
        </p>
      </div>
    </section>
  )
}
