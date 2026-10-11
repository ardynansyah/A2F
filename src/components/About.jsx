import pillars from '../data/about'
import { toneSoftBg, toneText } from '../lib/tones'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section
      id="tentang"
      className="mx-auto w-full max-w-[1200px] px-margin-mobile py-16 md:py-24 lg:px-margin"
    >
      <div className="rounded-2xl bg-surface-container-low/70 p-space-lg shadow-xl backdrop-blur-xl md:p-space-xl">
        <SectionHeading
          className="mb-space-xl max-w-3xl"
          eyebrow="Tentang Filosofi"
          title="Di Balik A2F"
          description="Sinergi kolaborasi 3 developer yang menggabungkan presisi Front-End dan ketangguhan Back-End untuk menghasilkan arsitektur web modern yang skalabel, responsif, dan terintegrasi mulus."
        />

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group rounded-xl bg-surface-container/80 p-space-lg transition-all duration-200 hover:bg-surface-container-high"
            >
              <div
                className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${toneSoftBg[pillar.tone]}`}
              >
                <Icon name={pillar.icon} size={24} className={toneText[pillar.tone]} />
              </div>
              <h3 className="mb-space-xs font-display text-headline-sm font-semibold text-on-surface">
                {pillar.title}
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
