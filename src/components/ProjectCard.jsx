import { useState } from 'react'
import Icon from './Icon'

const categoryTone = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}

export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(!project.image)
  const showImage = !imageFailed

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-low/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface-container">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-highest">
          {showImage ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            // Fallback kalau gambar tidak tersedia: panel gradien dengan ikon.
            <div
              className="flex h-full w-full items-center justify-center bg-linear-to-br from-surface-container-highest to-surface-container-low"
              role="img"
              aria-label={project.imageAlt}
            >
              <Icon name="monitoring" size={40} className="text-outline" />
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-surface-container-low via-transparent to-transparent opacity-80" />
          <div
            className={`absolute top-3 left-3 rounded-md bg-bg-dark/80 px-2.5 py-1 font-label text-label-sm backdrop-blur-md ${
              categoryTone[project.tone]
            }`}
          >
            {project.category}
          </div>
        </div>

        <div className="p-space-lg">
          <h3 className="mb-space-xs font-display text-headline-sm font-bold text-on-surface transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-space-md line-clamp-3 font-sans text-body-sm text-on-surface-variant">
            {project.description}
          </p>
          <div className="mb-space-md flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-surface-container-high px-2 py-0.5 font-label text-label-sm text-on-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-space-sm p-space-lg pt-0">
        <a
          href={project.demo}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent-indigo px-3 py-2 font-label text-label-md text-on-accent transition-opacity hover:opacity-90"
        >
          <span>Live Demo</span>
          <Icon name="visibility" size={16} />
        </a>
        <a
          href={project.repo}
          title="GitHub Repo"
          aria-label={`Repositori GitHub ${project.title}`}
          className="inline-flex items-center justify-center rounded-lg bg-surface-container-high p-2 text-on-surface transition-colors hover:bg-surface-container-highest hover:text-primary"
        >
          <Icon name="code" size={18} />
        </a>
      </div>
    </article>
  )
}
