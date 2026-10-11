// Satu-satunya sumber data anggota di halaman ini. Komponen membaca dari sini,
// tidak menyimpan nama atau skill di dalam dirinya sendiri.
//
// Field yang belum diisi dibiarkan null atau kosong, dan komponen merendernya
// sebagai placeholder yang terlihat jelas. Jangan isi dengan data perkiraan.
//   role      : string  | null
//   skills    : string[]        (tag, tanpa persentase)
//   highlight : string  | null  (satu skill unggulan, harus ada di skills)
//   links     : { github, linkedin, email } masing-masing string | null
const members = [
  {
    id: 'ardy',
    name: 'Ardy',
    role: null,
    intro: 'Halo saya Ardy',
    skills: [],
    highlight: null,
    links: { github: null, linkedin: null, email: null },
  },
  {
    id: 'ayip',
    name: 'Ayip',
    role: null,
    intro: 'Halo saya Ayip',
    skills: [],
    highlight: null,
    links: { github: null, linkedin: null, email: null },
  },
  {
    id: 'ferdy',
    name: 'Ferdy',
    role: null,
    intro: 'Halo saya Ferdy',
    skills: [],
    highlight: null,
    links: { github: null, linkedin: null, email: null },
  },
]

export default members
