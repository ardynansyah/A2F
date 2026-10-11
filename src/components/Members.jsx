import members from '../data/members'
import Placeholder from './Placeholder'

export default function Members() {
  return (
    <section
      id="anggota"
      className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8 sm:pb-24"
    >
      <h2 className="font-display text-2xl text-ink sm:text-3xl">
        Tiga orang di balik A2F
      </h2>

      <ul className="mt-10 border-t border-rule">
        {members.map((member, index) => (
          <li
            key={member.id}
            className="grid gap-3 border-b border-rule py-8 sm:grid-cols-[4rem_1fr] sm:gap-8"
          >
            <span className="font-display text-sm text-olive">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="max-w-2xl">
              <h3 className="font-display text-xl text-ink sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{member.intro}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Placeholder>{member.role ?? '[ROLE]'}</Placeholder>
                {member.skills.length === 0 ? (
                  <Placeholder>[SKILL]</Placeholder>
                ) : (
                  member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-rule px-2 py-0.5 text-xs text-ink"
                    >
                      {skill}
                    </span>
                  ))
                )}
                <Placeholder>[KONTAK]</Placeholder>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
