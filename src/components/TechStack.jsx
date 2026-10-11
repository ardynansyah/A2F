import techStack from '../data/techStack'
import { toneText } from '../lib/tones'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const layerTone = {
  primary: { glow: 'bg-primary/10' },
  secondary: { glow: 'bg-secondary/10' },
  tertiary: { glow: 'bg-tertiary/10' },
}

const itemNoteTone = {
  status: 'text-status-emerald',
  secondary: 'text-secondary',
  muted: 'text-outline',
}

export default function TechStack() {
  return (
    <section
      id="tech"
      className="mx-auto w-full max-w-[1200px] px-margin-mobile py-16 md:py-24 lg:px-margin"
    >
      <SectionHeading
        align="center"
        className="mb-space-xl"
        eyebrow="Stack Teknologi"
        title="Senjata & Teknologi Utama Kami"
        description="Teknologi modern yang kami pakai untuk membangun produk digital handal dan scalable."
      />

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {techStack.map((layer) => (
          <div
            key={layer.id}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-low/70 p-space-xl backdrop-blur-xl transition-all hover:bg-surface-container-low"
          >
            <div
              className={`pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full blur-2xl ${layerTone[layer.tone].glow}`}
              aria-hidden="true"
            />

            <div>
              <div className="mb-space-lg flex items-center justify-between">
                <span
                  className={`font-label text-label-sm font-bold tracking-wider uppercase ${toneText[layer.tone]}`}
                >
                  {layer.layer}
                </span>
                <Icon name={layer.icon} size={28} className={toneText[layer.tone]} />
              </div>

              <h3 className="mb-space-sm font-display text-headline-md font-bold text-on-surface">
                {layer.title}
              </h3>
              <p className="mb-space-lg font-sans text-body-md text-on-surface-variant">
                {layer.description}
              </p>
            </div>

            <div className="space-y-space-sm">
              {layer.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-space-sm rounded-lg bg-surface-container p-space-sm"
                >
                  <div className="flex items-center gap-space-sm">
                    <Icon name={item.icon} size={20} className={toneText[layer.tone]} />
                    <span className="font-label text-label-md font-semibold text-on-surface">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 font-label text-label-sm ${
                      itemNoteTone[item.noteTone] ?? 'text-outline'
                    }`}
                  >
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
