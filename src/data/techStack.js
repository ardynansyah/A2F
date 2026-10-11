// Tiga layer teknologi di section "Stack Teknologi".
//   tone     : 'primary' | 'secondary' | 'tertiary'
//   noteTone : 'status' | 'secondary' | 'muted'
const techStack = [
  {
    id: 'frontend',
    layer: 'Layer 01',
    tone: 'primary',
    icon: 'devices',
    title: 'Front-End Layer',
    description:
      'Membangun antarmuka pengguna interaktif dengan React.js dan utility styling cepat berbasis Tailwind CSS yang ringan dan maintainable.',
    items: [
      { icon: 'web', label: 'React.js Ecosystem', note: 'SPAs & Hooks', noteTone: 'status' },
      { icon: 'brush', label: 'Tailwind CSS', note: 'Utility-First', noteTone: 'status' },
    ],
  },
  {
    id: 'backend',
    layer: 'Layer 02',
    tone: 'secondary',
    icon: 'database',
    title: 'Back-End Layer',
    description:
      'Kekuatan server non-blocking I/O menggunakan Node.js dan Express.js untuk pengolahan API super cepat dan persistensi data aman.',
    items: [
      { icon: 'api', label: 'Express.js & REST', note: 'Modular Routers', noteTone: 'secondary' },
      { icon: 'table_chart', label: 'PostgreSQL & SQL', note: 'Relational DB', noteTone: 'secondary' },
    ],
  },
  {
    id: 'workflow',
    layer: 'Workflow',
    tone: 'tertiary',
    icon: 'hub',
    title: 'Tools & Practices',
    description:
      'Standarisasi kode berbasis Git branching model, pengujian endpoint berkala dengan Postman, dan integrasi linting ketat.',
    items: [
      { icon: 'sync_alt', label: 'Git & GitHub', note: 'Pull Request Flow', noteTone: 'muted' },
      { icon: 'rocket_launch', label: 'Postman & CI/CD', note: 'API Validation', noteTone: 'muted' },
    ],
  },
]

export default techStack
