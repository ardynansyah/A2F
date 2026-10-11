import { useEffect, useRef, useState } from 'react'
import navigation from '../data/navigation'
import Icon from './Icon'

const EMAIL = 'hello@a2f.team'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  function handleCopyEmail() {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => setCopied(false), 2500)
      })
      .catch((error) => console.error('Copy failed: ', error))
  }

  return (
    <>
      {/* Section kontak & ajakan */}
      <section
        id="kontak"
        className="mx-auto w-full max-w-[1200px] px-margin-mobile py-16 md:py-24 lg:px-margin"
      >
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-surface-container to-surface-container-low p-space-xl text-center shadow-2xl md:p-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent-indigo/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-3 py-1 font-label text-label-sm text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-emerald" />
              Siap Untuk Kolaborasi Baru
            </div>

            <h2 className="mb-space-sm font-display text-headline-lg-mobile font-extrabold tracking-tight text-on-surface md:text-[44px]">
              Punya Ide Proyek? Mari Bicara.
            </h2>
            <p className="mb-space-xl font-sans text-body-lg text-on-surface-variant">
              Kami siap berkolaborasi untuk mewujudkan aplikasi web impian Anda dengan standar
              arsitektur kelas industri dan kecepatan pengiriman optimal.
            </p>

            <div className="flex w-full flex-wrap items-center justify-center gap-space-md sm:w-auto">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-space-sm rounded-lg bg-accent-indigo px-space-xl py-3.5 font-label text-label-md text-on-accent shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.65)] active:scale-[0.98]"
              >
                <Icon name="send" size={20} />
                <span>Kirim Pesan / Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-space-sm rounded-lg bg-surface-container-high/80 px-space-lg py-3.5 font-label text-label-md text-on-surface transition-all hover:bg-surface-container-highest hover:text-primary"
              >
                <Icon name={copied ? 'check' : 'content_copy'} size={18} />
                <span>{EMAIL}</span>
              </button>
            </div>

            <div
              aria-live="polite"
              className={`mt-space-sm flex items-center gap-1 font-label text-label-sm text-status-emerald transition-opacity duration-300 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Icon name="check_circle" size={16} />
              <span>Email disalin ke papan klip!</span>
            </div>

            <div className="mt-space-lg border-t border-surface-variant/40 pt-space-md font-label text-label-sm text-on-surface-variant">
              Tersedia untuk proyek freelance, kontrak tim, atau kemitraan startup.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-space-xl w-full bg-surface-container-lowest py-space-xl">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-space-lg px-margin-mobile text-center md:flex-row md:text-left lg:px-margin">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-center gap-space-sm md:justify-start">
              {/* Monogram CSS, bukan gambar: logo raster dari desain tidak tersedia. */}
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-indigo font-display text-xs font-extrabold text-on-accent">
                A
              </span>
              <span className="font-display text-headline-sm font-bold text-on-surface">
                A2F<span className="text-accent-indigo">.</span>
              </span>
            </div>
            <p className="max-w-sm font-sans text-body-sm text-on-surface-variant">
              High-performance engineering and craft for modern digital solutions.
            </p>
          </div>

          <nav
            aria-label="Navigasi footer"
            className="flex flex-wrap items-center justify-center gap-space-md font-label text-label-md text-on-surface-variant"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-on-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="font-label text-label-sm text-outline">
            © 2025 A2F Engineering Team. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
