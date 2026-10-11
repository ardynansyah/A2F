// Judul section yang dipakai berulang: label kecil (eyebrow) + judul + deskripsi.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : ''} ${className}`}>
      {eyebrow ? (
        <div className="mb-space-xs inline-flex items-center gap-space-xs font-label text-label-sm font-semibold tracking-widest text-accent-indigo uppercase">
          <span className="h-0.5 w-6 rounded bg-accent-indigo" aria-hidden="true" />
          {eyebrow}
        </div>
      ) : null}

      <h2 className="font-display text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
        {title}
      </h2>

      {description ? (
        <p className="mt-space-xs font-sans text-body-lg text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  )
}
