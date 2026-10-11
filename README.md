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
├── index.html                 # <html class="dark"> + skrip anti-kedip tema
├── vite.config.js             # plugin React + Tailwind
├── package.json
├── public/
├── stitch_a2f_team_landing_page/   # file desain mentah (referensi, tidak diimpor)
└── src/
    ├── main.jsx               # entry point React
    ├── App.jsx                # menyusun semua section, hanya ini yang tahu urutan
    ├── index.css              # @import tailwindcss + font + @theme (token desain)
    ├── data/                  # satu sumber konten, komponen tidak menyimpan teks
    │   ├── navigation.js      # link navbar + footer
    │   ├── members.js         # Ardy, Ferdy, Ayip
    │   ├── hero.js            # metrik hero
    │   ├── about.js           # tiga pilar
    │   ├── techStack.js       # tiga layer teknologi
    │   └── projects.js        # tiga kartu portofolio
    ├── hooks/
    │   └── useTheme.js        # state tema gelap/terang + localStorage
    ├── lib/
    │   └── tones.js           # pemetaan nama nada -> kelas Tailwind
    └── components/
        ├── Navbar.jsx         # navigasi sticky + toggle tema + menu mobile
        ├── Hero.jsx           # judul, sub-judul, CTA, jendela kode
        ├── About.jsx          # "Di Balik A2F" + tiga pilar
        ├── TeamSection.jsx    # grid kartu anggota + filter peran
        ├── MemberCard.jsx     # satu kartu anggota
        ├── TechStack.jsx      # tiga layer teknologi
        ├── Projects.jsx       # showcase portofolio
        ├── ProjectCard.jsx    # satu kartu proyek
        ├── Footer.jsx         # section kontak + copyright
        ├── SectionHeading.jsx # judul section yang dipakai berulang
        ├── ThemeToggle.jsx    # tombol ganti tema
        └── Icon.jsx           # ikon Material Symbols
```

## Tema gelap/terang

Halaman default **gelap** (`<html class="dark">`). Tombol di navbar menukar ke terang
dan pilihannya disimpan di `localStorage`. Skrip kecil di `index.html` menerapkan tema
sebelum paint supaya tidak ada kedipan warna.

Nilai warna ditulis sekali di `src/index.css` sebagai variabel (`--a2f-*`) untuk mode
terang dan gelap, lalu didaftarkan ke Tailwind lewat `@theme inline`. Komponen cukup
memakai satu nama utility (mis. `bg-surface-container-low`, `text-on-surface`), tidak
ada nilai hex yang ditulis ulang.

## Font

Font dipasang lokal lewat `@fontsource` (tanpa request ke Google Fonts):

| Peran   | Font                  | Paket                                   |
| ------- | --------------------- | --------------------------------------- |
| Judul   | Plus Jakarta Sans     | `@fontsource-variable/plus-jakarta-sans` |
| Teks    | Plus Jakarta Sans     | `@fontsource-variable/plus-jakarta-sans` |
| Label   | Geist                 | `@fontsource-variable/geist`             |
| Ikon    | Material Symbols      | `@fontsource/material-symbols`           |

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
