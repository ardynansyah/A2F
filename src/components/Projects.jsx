import projects from '../data/projects'
import Icon from './Icon'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      id="proyek"
      className="mx-auto w-full max-w-[1200px] px-margin-mobile py-16 md:py-24 lg:px-margin"
    >
      <div className="mb-space-xl flex flex-col justify-between gap-space-lg md:flex-row md:items-end">
        <div>
          <div className="mb-space-xs inline-flex items-center gap-space-xs font-label text-label-sm font-semibold tracking-widest text-accent-indigo uppercase">
            <span className="h-0.5 w-6 rounded bg-accent-indigo" aria-hidden="true" />
            Showcase Portofolio
          </div>
          <h2 className="font-display text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
            Karya &amp; Eksperimen Kami
          </h2>
          <p className="mt-space-xs font-sans text-body-lg text-on-surface-variant">
            Beberapa solusi web dan aplikasi yang telah kami kembangkan bersama.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-space-xs font-label text-label-md text-primary transition-colors hover:text-on-surface"
        >
          <span>Lihat Semua Repositori</span>
          <Icon name="open_in_new" size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
