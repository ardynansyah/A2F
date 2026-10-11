import { useState } from 'react'
import Icon from './Icon'

// Warna aksen mengikuti peran anggota, sama seperti desain Stitch.
const trackTone = {
  frontend: {
    text: 'text-primary',
    ring: 'ring-primary/30 group-hover:ring-primary',
    statusBg: 'bg-status-emerald/10',
    statusText: 'text-status-emerald',
    avatarBg: 'bg-primary/15',
  },
  backend: {
    text: 'text-secondary',
    ring: 'ring-secondary/30 group-hover:ring-secondary',
    statusBg: 'bg-secondary/10',
    statusText: 'text-secondary',
    avatarBg: 'bg-secondary/15',
  },
}

export default function MemberCard({ member }) {
  const tone = trackTone[member.track] ?? trackTone.frontend
  const [photoFailed, setPhotoFailed] = useState(!member.photo)

  const socials = [
    { key: 'github', icon: 'terminal', href: member.links.github, label: `GitHub ${member.name}` },
    { key: 'linkedin', icon: 'link', href: member.links.linkedin, label: `LinkedIn ${member.name}` },
    {
      key: 'email',
      icon: 'mail',
      href: member.links.email ? `mailto:${member.links.email}` : null,
      label: `Email ${member.name}`,
    },
  ].filter((social) => social.href)

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-low/80 p-space-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]">
      <div className="flex flex-col">
        <div className="mb-space-md flex items-start justify-between gap-space-md">
          <div className="relative">
            {photoFailed ? (
              // Fallback kalau foto tidak tersedia: blok inisial nama.
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ring-2 transition-all ${tone.ring} ${tone.avatarBg}`}
                role="img"
                aria-label={member.photoAlt}
              >
                <span className={`font-display text-2xl font-bold ${tone.text}`}>
                  {member.name.charAt(0)}
                </span>
              </div>
            ) : (
              <img
                src={member.photo}
                alt={member.photoAlt}
                loading="lazy"
                onError={() => setPhotoFailed(true)}
                className={`h-16 w-16 rounded-xl object-cover ring-2 transition-all ${tone.ring}`}
              />
            )}
            <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-status-emerald ring-2 ring-surface-container-low">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white" />
            </span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-space-sm py-1 font-label text-label-sm ${tone.statusBg} ${tone.statusText}`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-status-emerald" />
            <span>{member.status}</span>
          </div>
        </div>

        <h3 className="font-display text-headline-md font-bold text-on-surface">{member.name}</h3>
        <span className={`mb-space-md font-label text-label-md font-medium ${tone.text}`}>
          {member.role}
        </span>

        <p className="mb-space-lg font-sans text-body-md leading-relaxed text-on-surface-variant">
          {member.bio}
        </p>

        <div className="mb-space-lg flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-surface-container-high px-2.5 py-1 font-label text-label-sm text-on-surface"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-surface-variant/40 pt-space-md">
        <span className="font-label text-label-sm text-outline">Terhubung:</span>
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
            >
              <Icon name={social.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
