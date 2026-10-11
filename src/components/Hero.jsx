import members from '../data/members'
import heroMetrics from '../data/hero'
import Icon from './Icon'

const teamList = members.map((member) => `'${member.name}'`).join(', ')

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1200px] px-margin-mobile pt-12 pb-20 md:pt-20 md:pb-28 lg:px-margin">
      <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
        {/* Kolom kiri: judul, sub-judul, CTA, metrik */}
        <div className="flex flex-col items-start gap-space-lg text-left lg:col-span-7">
          <div className="inline-flex items-center gap-space-sm rounded-full bg-surface-container-high/70 px-space-md py-space-xs shadow-sm backdrop-blur-md">
            <span className="text-[13px] leading-none" aria-hidden="true">
              🚀
            </span>
            <span className="font-label text-label-md tracking-wide text-primary">
              Full-Stack Web Development Team
            </span>
          </div>

          <h1 className="font-display text-display-hero-mobile tracking-tight text-on-surface md:text-display-hero">
            Kami Membangun Pengalaman Web yang{' '}
            <span className="bg-linear-to-r from-primary to-accent-indigo bg-clip-text text-transparent">
              Cepat, Responsif,
            </span>{' '}
            dan Andal.
          </h1>

          <p className="max-w-xl font-sans text-body-lg text-on-surface-variant">
            Kolaborasi 3 developer yang berfokus pada ekosistem JavaScript modern dari
            Front-End interaktif hingga Back-End performa tinggi.
          </p>

          <div className="flex w-full flex-wrap items-center gap-space-md pt-space-xs sm:w-auto">
            <a
              href="#tim"
              className="inline-flex items-center justify-center gap-space-sm rounded-lg bg-accent-indigo px-space-lg py-3 font-label text-label-md text-on-accent shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] active:scale-[0.98]"
            >
              <span>Lihat Anggota Tim</span>
              <Icon name="group" size={18} />
            </a>
            <a
              href="#proyek"
              className="inline-flex items-center justify-center gap-space-sm rounded-lg bg-surface-container-high/60 px-space-lg py-3 font-label text-label-md text-on-surface backdrop-blur-md transition-all hover:bg-surface-container-highest hover:text-primary"
            >
              <span>Eksplorasi Proyek</span>
              <Icon name="arrow_forward" size={18} />
            </a>
          </div>

          <div className="flex items-center gap-space-xl pt-space-md">
            {heroMetrics.map((metric, index) => (
              <div key={metric.label} className="flex items-center gap-space-xl">
                {index > 0 ? (
                  <span className="h-8 w-px bg-surface-variant" aria-hidden="true" />
                ) : null}
                <div className="flex flex-col">
                  <span
                    className={`font-display text-headline-md font-bold tracking-tight ${
                      metric.tone === 'status' ? 'text-status-emerald' : 'text-on-surface'
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span className="font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan: jendela kode */}
        <div className="relative mt-space-lg lg:col-span-5 lg:mt-0">
          <div
            className="absolute inset-0 -z-10 rounded-xl bg-accent-indigo/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="absolute -top-4 -right-2 z-20 hidden items-center gap-2 rounded-lg bg-surface-container-highest/90 px-3 py-1.5 shadow-lg backdrop-blur-xl sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-status-emerald" />
            <span className="font-label text-label-sm font-semibold text-secondary">
              Node.js Engine
            </span>
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 hidden items-center gap-2 rounded-lg bg-surface-container-highest/90 px-3 py-1.5 shadow-lg backdrop-blur-xl sm:flex">
            <Icon name="bolt" size={16} className="text-primary" />
            <span className="font-label text-label-sm font-semibold text-primary">
              Tailwind + React 19
            </span>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-surface-container-low/90 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between bg-surface-container-lowest/80 px-space-md py-space-sm">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-error" />
                <span className="h-3 w-3 rounded-full bg-tertiary" />
                <span className="h-3 w-3 rounded-full bg-secondary" />
              </div>
              <span className="font-mono text-label-sm tracking-wider text-outline">
                TeamManifest.ts
              </span>
              <Icon name="code" size={16} className="text-outline" />
            </div>

            <div className="overflow-x-auto p-space-md font-mono text-[13px] leading-relaxed text-on-surface-variant selection:bg-accent-indigo/30 sm:p-space-lg">
              <p>
                <span className="font-semibold text-accent-indigo">const</span>{' '}
                <span className="font-bold text-tertiary">A2F_Core</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="font-medium text-primary">team</span>:{' '}
                <span className="font-medium text-secondary">[{teamList}]</span>,
              </p>
              <p className="pl-4">
                <span className="font-medium text-primary">stack</span>: {'{'}
              </p>
              <p className="pl-8">
                <span className="text-on-surface">frontend</span>:{' '}
                <span className="text-secondary">'React.js &amp; Tailwind CSS'</span>,
              </p>
              <p className="pl-8">
                <span className="text-on-surface">backend</span>:{' '}
                <span className="text-secondary">'Express.js &amp; Node.js'</span>,
              </p>
              <p className="pl-8">
                <span className="text-on-surface">database</span>:{' '}
                <span className="text-secondary">'PostgreSQL &amp; REST APIs'</span>
              </p>
              <p className="pl-4">{'}'},</p>
              <p className="pl-4">
                <span className="font-medium text-primary">synergy</span>:{' '}
                <span className="font-semibold text-accent-indigo">async</span> () =&gt; {'{'}
              </p>
              <p className="pl-8 font-semibold text-on-surface">
                return <span className="text-status-emerald">"High-Performance Web Apps"</span>;
              </p>
              <p className="pl-4">{'}'}</p>
              <p>{'};'}</p>

              <div className="mt-4 flex items-center justify-between border-t border-surface-variant/40 pt-3 font-label text-[11px] text-outline">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-status-emerald" />
                  Build Status: Clean
                </span>
                <span>⚡ Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
