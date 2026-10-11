import { useMemo, useState } from 'react'
import members from '../data/members'
import MemberCard from './MemberCard'

const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'frontend', label: 'Front-End' },
  { id: 'backend', label: 'Back-End' },
]

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const counts = useMemo(
    () => ({
      all: members.length,
      frontend: members.filter((member) => member.track === 'frontend').length,
      backend: members.filter((member) => member.track === 'backend').length,
    }),
    [],
  )

  const visibleMembers =
    activeFilter === 'all'
      ? members
      : members.filter((member) => member.track === activeFilter)

  return (
    <section
      id="tim"
      className="mx-auto w-full max-w-[1200px] px-margin-mobile py-16 md:py-24 lg:px-margin"
    >
      <div className="mb-space-xl flex flex-col justify-between gap-space-lg md:flex-row md:items-end">
        <div>
          <div className="mb-space-xs inline-flex items-center gap-space-xs font-label text-label-sm font-semibold tracking-widest text-accent-indigo uppercase">
            <span className="h-0.5 w-6 rounded bg-accent-indigo" aria-hidden="true" />
            Anggota Kami
          </div>
          <h2 className="font-display text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            Berkenalan dengan Tim A2F
          </h2>
          <p className="mt-space-xs max-w-xl font-sans text-body-lg text-on-surface-variant">
            Tiga Kepala, Satu Visi: Membangun Solusi Web Modern.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter anggota berdasarkan peran"
          className="inline-flex self-start rounded-xl bg-surface-container-low p-1 backdrop-blur-md md:self-auto"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`rounded-lg px-space-md py-space-xs font-label text-label-md transition-all ${
                  isActive
                    ? 'bg-accent-indigo font-semibold text-on-accent shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                {filter.label} ({counts[filter.id]})
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {visibleMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
