# A2F

Proyek React + Vite + Tailwind CSS.

## Stack

| Tool          | Versi    |
| ------------- | -------- |
| React         | 19.3.0   |
| Vite          | 8.3.4    |
| Tailwind CSS  | 4.3.3    |
| @tailwindcss/vite | 4.3.3 |
| Oxlint        | 1.87.0   |

## Menjalankan proyek

```bash
npm install     # pasang dependency (sekali saja)
npm run dev     # jalankan dev server + HMR -> http://localhost:5173
```

## Perintah lain

```bash
npm run build     # build untuk produksi ke folder dist/
npm run preview   # cek hasil build secara lokal
npm run lint      # jalankan Oxlint
```

## Struktur

```
.
├── index.html
├── vite.config.js        # plugin React + Tailwind
├── package.json
├── public/
└── src/
    ├── main.jsx          # entry point React
    ├── App.jsx           # komponen utama (contoh pakai class Tailwind)
    ├── index.css         # @import "tailwindcss";
    └── assets/
```

## Tailwind CSS v4

Proyek ini memakai Tailwind v4 yang dikonfigurasi lewat plugin Vite resmi —
tidak ada `tailwind.config.js` dan tidak ada `postcss.config.js`.

- Plugin didaftarkan di `vite.config.js`:

  ```js
  import tailwindcss from '@tailwindcss/vite'
  import react from '@vitejs/plugin-react'
  import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [react(), tailwindcss()],
  })
  ```

- Tailwind di-import di `src/index.css`:

  ```css
  @import 'tailwindcss';
  ```

- Kustomisasi tema dilakukan langsung di CSS memakai `@theme`, contoh:

  ```css
  @import 'tailwindcss';

  @theme {
    --color-brand: oklch(0.72 0.17 250);
  }
  ```

Setelah itu `bg-brand`, `text-brand`, dan seterusnya bisa dipakai sebagai
utility class.

Referensi: <https://tailwindcss.com/docs/installation/using-vite>
