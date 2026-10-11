import { useState } from 'react'
import navigation from '../data/navigation'
import Icon from './Icon'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-space-md px-margin-mobile py-3 lg:px-margin">
        <a
          href="#utama"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-space-sm font-display text-xl font-bold tracking-tight text-on-surface"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-indigo text-xs font-extrabold text-on-accent">
            A
          </span>
          A2F<span className="text-accent-indigo">.</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-space-lg md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface md:hidden"
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="menu-mobile"
          aria-label="Navigasi seluler"
          className="border-t border-outline-variant/40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1200px] flex-col px-margin-mobile py-space-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center font-label text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
