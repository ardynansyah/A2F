// Satu-satunya sumber data anggota. Komponen membaca dari sini, tidak menyimpan
// nama atau skill di dalam dirinya sendiri.
//
//   track   : 'frontend' | 'backend'  -> dipakai filter dan warna aksen
//   status  : label kecil di kartu
//   skills  : daftar tag teknologi
//   links   : { github, linkedin, email } masing-masing string | null
const members = [
  {
    id: 'ardy',
    name: 'Ardy',
    role: 'Front-End Developer',
    track: 'frontend',
    status: 'Available for Projects',
    bio: 'Berfokus pada pembuatan antarmuka web yang responsif, interaktif, dan estetik dengan detail komponen yang presisi.',
    skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML/CSS'],
    links: { github: '#', linkedin: '#', email: 'ardy@a2f.team' },
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7vO31X4kv6QRfn5_TTuUOz8afgC5HgxuDHreaEGwux-8XqCWFBDmcsi1UJ_6X1mDJq67V-F_gSUnU1frWJ8BwQJCxFk6cFN2TCDR1rFag6pl7GBZNDonkHIqbSc94NXVmAPsLVeykeQdjRu_vCl58Lxbhyb5d1lJoRc4C09DBXiN42EHFwOCUPefFZBOzyVaTj7MZjcJOUsoqO-C3r5wRYPlDYHCXKzWsPjdRktLyt6crA3G3whKNBw',
    photoAlt: 'Foto Ardy, front-end developer',
  },
  {
    id: 'ferdy',
    name: 'Ferdy',
    role: 'Front-End Developer',
    track: 'frontend',
    status: 'Available for Projects',
    bio: 'Spesialis struktur layout, performa UI, dan pengalaman pengguna yang halus dengan optimasi interaksi interaktif.',
    skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Component Architecture'],
    links: { github: '#', linkedin: '#', email: 'ferdy@a2f.team' },
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB329M6Rz3pJHgaMQpFnuo1Yg1mm4I8c1dSMzeXmgINZC1lXj93zSor67eYS2DYAXLVE8v8q-aha96X8Zlbfk59PvDY2JRk9h_-MFqrjhJaucneuMQlJWV93q3xB_WaZ1eNfqLoW4ySVo6h36JxXkbSIYnnJ7HfXoKMMZyjrHVXSyLdJ8oI8UGMc2d4cyeANJVw3kCjxvq6dg6GelHX8iufd5oyaCi7c04wlBQWQwS7VnFREoD1F4CnA',
    photoAlt: 'Foto Ferdy, front-end developer',
  },
  {
    id: 'ayip',
    name: 'Ayip',
    role: 'Back-End Developer',
    track: 'backend',
    status: 'Building APIs',
    bio: 'Merancang arsitektur server yang efisien, manajemen basis data berkinerja tinggi, dan integrasi RESTful API yang aman.',
    skills: ['Express.js', 'Node.js', 'REST API', 'PostgreSQL / MySQL'],
    links: { github: '#', linkedin: '#', email: 'ayip@a2f.team' },
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAblzzS30nhkqphj82wl_ad6gi0nJaxbKlAFAuAV2F8MpfrJjEZqLOSvsLTLW2dSxlpdOviD5Z_PUeXwb9V0oLUzavhmNGRy-dGDPFGM6fw1Xuuqh_iTptuUBUcWMb4nk60_R3EH1BdiX902I97HyOlewxvxwacg5ZtMNHCP8X4HirqaXYWkOLK5V4l15srUtgb46Qd18_vwte0IBYvTCfGcRZjrqSvIXfqbgpFJih7ytqaTCGkTlvpMw',
    photoAlt: 'Foto Ayip, back-end developer',
  },
]

export default members
