import { creator, nav } from '../data/content'
import { IconButton, InstagramIcon, TiktokIcon } from './Icons'

export default function Nav() {
  return (
    <header className="w-full bg-bg py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 sm:px-10">
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className="font-display text-[28px] font-bold uppercase tracking-wide text-gold-deep">{creator.firstName}</span>
            <span className="-ml-1.5 font-script text-[30px] font-bold text-ink">{creator.lastName}</span>
          </div>
          <span className="mt-0.5 text-[11px] font-bold tracking-[0.2em] text-ink/55">{creator.tagline}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-7">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-[15px] font-semibold text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <IconButton href="#" label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" label="TikTok">
            <TiktokIcon />
          </IconButton>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-blue px-7 py-3.5 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
          >
            Vamos criar :)
          </a>
        </div>
      </div>
    </header>
  )
}
