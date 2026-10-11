import members from '../data/members'

const namaTim = members.map((member) => member.name)

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
      <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-ink sm:text-6xl">
        Keep consistence
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Kami bertiga, {namaTim.join(', ')}. Halaman ini berisi siapa kami dan
        keahlian yang kami pakai.
      </p>
    </section>
  )
}
