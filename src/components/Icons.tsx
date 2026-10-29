import type { ReactNode } from 'react'

type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" />
    </svg>
  )
}

export function TiktokIcon({ className }: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M16 3v9.5a4.5 4.5 0 1 1-4.5-4.5" />
      <path d="M16 3a5 5 0 0 0 5 5" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M11 9.5l4 2.5-4 2.5z" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  )
}

export function IconButton({ href, label, children, dark = false }: { href: string; label: string; children: ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={
        dark
          ? 'group flex size-[38px] items-center justify-center rounded-full border-[1.5px] border-bg/45 transition hover:bg-bg'
          : 'group flex size-[38px] items-center justify-center rounded-full border-[1.5px] border-ink transition hover:bg-ink'
      }
    >
      <span className={dark ? 'text-bg transition group-hover:text-ink [&_svg]:stroke-current' : 'text-ink transition group-hover:text-bg [&_svg]:stroke-current'}>
        {children}
      </span>
    </a>
  )
}
