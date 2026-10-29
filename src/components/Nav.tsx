import { useState } from 'react'
import { creator, nav } from '../data/content'
import { CloseIcon, IconButton, InstagramIcon, MenuIcon, TiktokIcon } from './Icons'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative w-full bg-bg py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 sm:px-10">
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className="font-display text-2xl font-bold uppercase tracking-wide text-gold-deep sm:text-[28px]">{creator.firstName}</span>
            {creator.lastName && (
              <span className="-ml-1.5 font-script text-[26px] font-bold text-ink sm:text-[30px]">{creator.lastName}</span>
            )}
          </div>
          <span className="mt-0.5 text-[10px] font-bold tracking-[0.2em] text-ink/55 sm:text-[11px]">{creator.tagline}</span>
        </div>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-[15px] font-semibold text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
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

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink text-ink xl:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 flex flex-col gap-6 border-t border-ink/10 bg-bg px-6 py-7 shadow-[0_16px_30px_rgba(23,24,26,.1)] sm:px-10 xl:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-semibold text-ink">
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
          </div>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-blue px-7 py-3.5 text-[15px] font-bold text-ink"
          >
            Vamos criar :)
          </a>
        </div>
      )}
    </header>
  )
}
