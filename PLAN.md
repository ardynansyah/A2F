# Plan: Landing Page Profil Tim A2F

Status per 12 Oktober 2026: rencana awal (tema terang olive, navbar tipis) **diganti**.
Desain baru diambil dari ekspor Google Stitch dan dipecah menjadi komponen React:
tema gelap, aksen indigo, Plus Jakarta Sans/Geist, navbar penuh, dan dark/light toggle.
Halaman sekarang punya tujuh section (navbar, hero, tentang, tim, tech stack, proyek,
kontak + footer). Rencana lama di bawah disimpan sebagai catatan sejarah.

Isi plan: bagian 3 dan 4 adalah rencana **isi halaman**, yaitu apa yang tertulis di
halaman dan siapa yang mengisinya. Bagian 5 sampai 9 adalah rencana cara mengerjakannya.

---

## 1. Apa yang dibangun

Halaman satu halaman (one page) yang memperkenalkan tim A2F: tiga orang, siapa mereka,
skill apa yang dikuasai, dan bagaimana cara menghubungi mereka.

Yang **bukan** tujuan halaman ini:

- Bukan halaman jualan produk atau jasa.
- Bukan form pendaftaran atau login (tidak ada backend, murni frontend).
- Bukan portofolio klien, karena belum ada proyek nyata yang dikumpulkan.

Pengunjung yang dituju: calon klien, calon kolaborator, atau orang yang dikirim ke link
ini dari CV dan media sosial.

Stack yang sudah terpasang: React 19, Vite 8, Tailwind CSS 4 lewat plugin Vite (tanpa
`tailwind.config.js`, semua token di CSS pakai `@theme`).

---

## 2. Aturan yang membentuk plan ini

Plan ini bukan daftar section hasil template. Isinya dibatasi lima hal:

1. **Tidak ada data karangan.** Skill, angka, testimoni, nama, dan jabatan harus asli.
   Kalau belum ada, section-nya tidak dibuat, atau diisi placeholder yang jelas
   (`[REAL DATA]`, bukan angka palsu yang terlihat meyakinkan).
2. **Tidak ada persentase skill.** Bar "React 90%" adalah angka tanpa sumber. Skill
   ditampilkan sebagai daftar tag, bukan bar.
3. **Tidak ada tombol mati.** Setiap link dan tombol harus benar-benar bekerja. Link
   kontak yang belum ada tidak dirender sama sekali.
4. **Section hanya ada kalau kontennya ada.** Halaman dengan 4 section berisi jauh lebih
   baik daripada 8 section yang setengahnya kosong.
5. **Mobile, keyboard, dan kontras dihitung sebagai bagian desain**, bukan pekerjaan
   tambahan di akhir.

Section yang sengaja **tidak** dibangun (semuanya butuh data yang belum kalian punya):
testimoni, statistik ("10+ proyek"), logo klien, FAQ, pricing, skill bar persentase,
"How it works" tiga langkah.

---

## 3. Status konten

Halaman ini tidak boleh diisi data karangan. Jadi bagian ini memisahkan apa yang sudah
ada dari apa yang masih kosong.

### Sudah ada

| Slot | Isi | Sumber |
|---|---|---|
| Nama tim | A2F | keputusan kalian |
| Headline hero | Keep consistence | kalimat kalian |
| Perkenalan anggota 01 | Halo saya Ardy | kalimat kalian |
| Perkenalan anggota 02 | Halo saya Ayip | kalimat kalian |
| Perkenalan anggota 03 | Halo saya Ferdy | kalimat kalian |

Catatan ejaan: "consistence" ditulis persis seperti yang kalian berikan. Bentuk bakunya
"consistent". Aku tidak mengubahnya sendiri. Sebutkan kalau mau diperbaiki, dan sebutkan
juga kalau kalian memang mau huruf kecil semua ("keep consistence", bukan "Keep
consistence").

### Masih kosong, dan tidak bisa diisi AI

Setiap anggota mengisi satu blok berikut. Ini bagian yang paling lama, dan halaman tidak
bisa dianggap selesai sebelum terisi.

```
Role / posisi       : (mis. Frontend, Backend, UI)
Skill nyata         : (4 sampai 8 item, hanya yang benar-benar dipakai)
Skill unggulan      : (satu saja, harus ada di daftar skill)
Link GitHub         : (atau kosongkan)
Link LinkedIn       : (atau kosongkan)
Email               : (atau kosongkan)
Foto                : (kosongkan kalau belum ada)
```

Selama blok ini belum masuk, halaman menampilkan penanda yang terlihat jelas seperti
`[ROLE]`, `[SKILL]`, dan `[KONTAK]`. Penanda itu bukan kegagalan tampilan, itu memang
sengaja supaya tidak ada yang menyangka datanya sudah asli.

Yang juga belum diputuskan: **satu alamat kontak nyata** (email atau WhatsApp). Tanpa itu,
section kontak tidak bisa dibangun sama sekali, karena halaman tanpa jalan menghubungi
tidak ada gunanya.

### Keputusan yang menyertai

| Hal | Keputusan | Catatan |
|---|---|---|
| Nama tim | **A2F**, tetap, ditulis sebagai teks | tidak dibuatkan logo |
| Logo | belum ada | nama tim ditulis dengan font display serif |
| Foto | belum ada | avatar inisial (huruf pertama nama di bidang olive), jelas sebagai placeholder |
| Warna brand | aksen **olive** (dikonfirmasi) | lihat bagian 5 |
| Font | **opsi A**, serif editorial untuk judul (dikonfirmasi) | lihat bagian 5 |
| Bahasa halaman | **Indonesia** (dikonfirmasi) | konsisten dari hero sampai footer, termasuk `lang="id"` di `index.html` |

---

## 4. Isi halaman, section per section

Urutannya mengikuti cerita: kenalan dulu, lalu detail orang, lalu cara menghubungi. Total
4 blok, bukan 8. Di bawah ini setiap slot teks yang muncul di halaman, isinya, dan
statusnya.

### 4.1 Header

| Slot | Isi | Status |
|---|---|---|
| Nama tim | A2F, teks dengan font display | ada |
| Link navigasi | satu link "Kontak" menuju `#kontak` | belum, jangan dirender sebelum section kontak ada |

Alasan tanpa navbar penuh: halaman ini pendek dan hanya punya satu tujuan, yaitu
menghubungi. Menu empat item di halaman sependek ini hanya menambah tempat kosong.

### 4.2 Hero

| Slot | Isi | Status |
|---|---|---|
| Judul (H1) | Keep consistence | ada, kalimat kalian |
| Paragraf pendukung | Kami bertiga, Ardy, Ayip, Ferdy. Halaman ini berisi siapa kami dan keahlian yang kami pakai. | draf, silakan ganti dengan kalimat kalian |

Alasan paragraf itu ada: judul saja tidak memberi tahu pengunjung halaman ini tentang apa.
Kalimat itu hanya menyebut hal yang sudah pasti (jumlah orang, nama, dan isi halaman),
tidak menambah klaim baru.

### 4.3 Profil anggota (inti halaman)

Tiga baris, satu per orang. Nomor 01 / 02 / 03 jadi motif identitas halaman.

| Slot | Sumber | Status |
|---|---|---|
| Nomor urut | otomatis | ada |
| Nama | `data/members.js` | ada |
| Role | anggota | kosong, tampil `[ROLE]` |
| Perkenalan | kalimat kalian | ada |
| Tag skill | anggota | kosong, tampil `[SKILL]` |
| Skill unggulan | anggota | kosong |
| Avatar inisial | otomatis dari nama | belum dibuat (M3) |
| Link kontak | anggota | kosong, tampil `[KONTAK]` |

Bentuknya baris penuh dipisah garis tipis, bukan tiga kartu. Alasan: tiga kartu identik
membuat mata melompat dan membuat halaman terlihat seperti template.

### 4.4 Kontak

| Slot | Isi | Status |
|---|---|---|
| Kalimat ajakan | satu kalimat, mis. "Kirim brief ke email di bawah" | belum, menunggu alamat kontak |
| Daftar link | `mailto:` dan profil yang benar-benar ada | belum |

Section ini tidak dibangun sebelum ada satu alamat nyata. Form kontak tidak dipakai,
karena tanpa backend form itu jadi tombol mati.

### 4.5 Footer

| Slot | Isi | Status |
|---|---|---|
| Nama tim dan tahun | A2F, 2026 | ada |
| Kontak | sama dengan section kontak | belum |

Satu kolom. Tidak ada empat kolom Product / Company / Resources / Legal, karena halaman
ini tidak punya link sebanyak itu.

### 4.6 Yang sengaja tidak dibuat

Semuanya butuh data yang belum kalian punya, jadi tidak ada tempatnya di halaman:

- Testimoni, karena belum ada pelanggan yang memberi komentar
- Statistik seperti "10+ proyek" atau "3 tahun pengalaman"
- Logo klien
- FAQ
- Pricing
- Skill bar persentase
- Bagian "cara kerja" tiga langkah
- Halaman detail per orang, karena butuh router dan itu pekerjaan besar

Kalau nanti salah satu datanya ada, section-nya bisa ditambahkan. Sampai saat itu, halaman
pendek yang jujur lebih baik daripada halaman panjang yang setengahnya karangan.

---

## 5. Arah desain (dikonfirmasi)

Kalian memilih mood "bersih dan tenang". Mood itu bagus, tapi kalau dibiarkan apa adanya
hasilnya cenderung jadi putih datar tanpa karakter. Jadi arahnya dikonkretkan seperti ini.

**Design Read:** halaman profil tim tiga orang untuk calon klien atau kolaborator, dengan
bahasa visual editorial yang tenang, dial **ENERGY 1 / RHYTHM 2 / MOTION 1**.

Artinya: tidak ada yang berteriak, komposisi antar section bervariasi, dan gerak hanya
sebatas hover serta focus.

**Palet (2 warna inti + 1 aksen, netral tidak dihitung):**

| Peran | Nilai | Alasan |
|---|---|---|
| Latar | off-white hangat | putih murni yang jadi default terasa steril dan menyilaukan |
| Teks | near-black hangat | kontras tinggi, tidak sekaku hitam pekat |
| Aksen | olive tua | dipakai hanya di skill unggulan, link, dan focus ring |

Aksen tidak dipakai di semua tombol, ikon, garis, dan latar sekaligus. Satu tempat
penting saja. Olive dipakai dalam dua tingkat: olive tua untuk teks dan elemen yang harus
terbaca, olive muda hanya untuk bidang latar avatar inisial. Kombinasi teks di atas olive
wajib diuji kontras, karena olive muda dan teks putih sering gagal 4.5:1.

**Tipografi (opsi A, dikonfirmasi):**

| Peran | Font | Alasan |
|---|---|---|
| Judul | Newsreader (serif editorial) | serif memberi kehangatan dan karakter, menghindari kesan template |
| Teks | Public Sans (sans humanis) | netral dan sangat terbaca di ukuran kecil, tidak bersaing dengan judul |

Keduanya font terbuka dan sudah terpasang lewat paket `@fontsource-variable`, jadi file
`.woff2` ikut di dalam bundle dan tidak ada request ke domain luar. Paket ini juga sudah
membawa `font-display: swap`, sehingga teks tetap terbaca saat font belum selesai dimuat.
Cara memasangnya cukup satu baris import di `index.css`, tidak perlu menulis `@font-face`
manual.

**Motif identitas:** satu sistem label kecil berulang, nomor urut `01 / 02 / 03` di
samping tiap anggota, dihubungkan garis tipis. Ini memberi karakter tanpa menambah
dekorasi. Menggantikan pil badge, dot berkedip, dan garis warna di tepi kartu.

**Radius dan bayangan:** satu nilai radius kecil sampai sedang dipakai konsisten. Bayangan
tidak dipakai sebagai default di setiap kartu. Kalau sebuah elemen perlu terangkat, itu
keputusan sadar dan alasannya dicatat.

**Soal tema:** halaman ini dibuat terang saja. Alasannya, identitas yang dipilih adalah
editorial tenang dan produknya bukan alat developer, jadi tidak ada alasan kuat untuk tema
gelap. Kalau nanti kalian tetap mau dark mode, harus dibuat penuh dan diuji di dua mode,
karena dark mode setengah jalan lebih buruk daripada tidak ada.

---

## 6. Struktur teknis

```
src/
  main.jsx
  index.css              # @theme: warna (gelap/terang), font, spacing, tipografi + focus ring
  App.jsx                # menyusun section, hanya ini yang tahu urutan
  data/                  # konten nyata, satu sumber per section
    navigation.js        # link navbar + footer
    members.js           # Ardy, Ferdy, Ayip
    hero.js              # metrik hero
    about.js             # tiga pilar
    techStack.js         # tiga layer teknologi
    projects.js          # tiga kartu portofolio
  hooks/
    useTheme.js          # state tema gelap/terang + localStorage
  lib/
    tones.js             # pemetaan nada -> kelas Tailwind
  components/
    Navbar.jsx           # navigasi sticky + toggle tema + menu mobile
    Hero.jsx             # judul, sub-judul, CTA, jendela kode
    About.jsx            # "Di Balik A2F" + tiga pilar
    TeamSection.jsx      # grid kartu anggota + filter peran
    MemberCard.jsx       # satu kartu anggota
    TechStack.jsx        # tiga layer teknologi
    Projects.jsx         # showcase portofolio
    ProjectCard.jsx      # satu kartu proyek
    Footer.jsx           # section kontak + copyright
    SectionHeading.jsx   # judul section yang dipakai berulang
    ThemeToggle.jsx      # tombol ganti tema
    Icon.jsx             # ikon Material Symbols
```

Catatan baru (menggantikan catatan lama di bawah):

- Konten disimpan di `src/data/*`, komponen tidak menyimpan teks di dalamnya.
- Warna dan font ditulis sekali di `index.css` sebagai variabel `--a2f-*` untuk dua
  mode, lalu dipakai sebagai utility class. Tidak ada nilai hex di komponen.
- Navbar, hero, tentang, tim, tech stack, proyek, dan footer adalah komponen terpisah.
- Gambar (foto anggota dan mockup proyek) memakai URL dari desain Stitch. Dua URL
  sudah mati dan diberi fallback di komponen, bukan dibiarkan rusak.
- Tombol dengan `href="#"` (mis. Live Demo, Repositori) diambil apa adanya dari desain
  dan masih perlu diarahkan ke tautan asli sebelum rilis.

- `data/members.js` adalah satu-satunya tempat konten orang disimpan. Komponen tidak
  menyimpan nama atau skill di dalamnya. Ini yang membuat tiga orang bisa kerja paralel
  tanpa saling menimpa file.
- `Members.jsx` memakai satu pola baris yang diulang tiga kali lewat `map`, jadi tidak ada
  tiga blok kode yang isinya sama. Kalau nanti barisnya jadi beda per orang, baru dipecah
  jadi komponen sendiri.
- Token warna dan font ditulis sekali di `index.css` pakai `@theme`, lalu dipakai sebagai
  utility class seperti `bg-paper` dan `text-olive`. Tidak ada nilai hex yang ditulis ulang
  di komponen.
- Tidak ada state global, tidak ada router, tidak ada data fetching. Kalau sebuah
  dependensi tidak dipakai untuk salah satu dari empat blok di atas, tidak dipasang.

---

## 7. Pembagian tugas bertiga

Satu orang satu wilayah file, supaya tidak ada dua orang menyunting file yang sama.

| Orang | Wilayah | File | Output |
|---|---|---|---|
| 1 | Fondasi dan tampilan luar | `index.css`, `App.jsx`, `SiteHeader.jsx`, `Hero.jsx`, `SiteFooter.jsx` | token desain jadi, hero dan footer tampil, section tersusun |
| 2 | Konten inti | `data/members.js`, `MemberRow.jsx`, `MemberAvatar.jsx`, `SkillTags.jsx` | tiga profil tampil dari data, avatar inisial jalan |
| 3 | Kualitas dan kontak | `Contact.jsx`, responsive, aksesibilitas, konten | breakpoint aman, keyboard jalan, kontras lolos, link kontak nyata |

Aturan bersama:

- `data/members.js` hanya diubah oleh orang 2 setelah konten dari ketiga anggota terkumpul.
- Siapa pun yang mengubah `index.css` memberi tahu yang lain, karena token dipakai semua
  komponen.
- Satu commit satu perubahan kecil, pesan commit jelas.

---

## 8. Urutan kerja

| Tahap | Isi | Status | Selesai kalau |
|---|---|---|---|
| M0 | Kumpulkan konten nyata (bagian 3) | jalan sebagian: headline dan 3 perkenalan sudah ada, role, skill, dan kontak belum | `members.js` terisi lengkap untuk 3 orang |
| M1 | Token desain dan font di `index.css` | selesai | warna, font, radius terpasang; halaman polos jalan |
| M2 | Kerangka: header, hero, footer, susunan di `App.jsx` | selesai | halaman tampil tanpa error di console |
| M3 | Profil anggota: avatar inisial, skill tag, kontak | sebagian: struktur baris sudah ada, data dan avatar belum | tiga profil tampil dari data asli, bukan placeholder |
| M4 | Responsive dan aksesibilitas | sebagian: sudah diperiksa di 360, 768, dan 1280 px, target sentuh dan focus ring sudah dibetulkan | tidak ada sisa temuan saat diperiksa ulang setelah data masuk |
| M5 | Pemeriksaan akhir | belum | build lolos, semua elemen diklik satu per satu, hasilnya dicatat |

M0 hampir selalu jadi tahap paling lama, karena bergantung pada kalian mengisi data, bukan
pada ngoding. M1 sampai M3 bisa paralel sebagian dan biasanya beberapa hari kerja. M4 dan
M5 sekitar satu hari. Angka ini kasar, bukan janji.

---

## 9. Pemeriksaan sebelum rilis

Dijalankan di M5, satu baris per item, setiap jawaban harus "ya":

- [ ] Semua nama, role, skill, dan link adalah data asli, tidak ada yang dikarang
- [ ] Tidak ada persentase skill, angka statistik, atau testimoni
- [ ] Setiap tombol dan link benar-benar bekerja; tidak ada link kosong
- [ ] Tidak ada link navigasi ke section yang tidak ada
- [ ] Tidak ada emoji di judul, tombol, atau daftar
- [ ] Copy bebas dari kata seperti "seamless", "powerful", "next generation", "revolutionary"
- [ ] CTA spesifik, bukan "Get Started" atau "Learn More"
- [ ] Kontras teks minimal 4.5:1 untuk teks normal, 3:1 untuk teks besar
- [ ] Semua elemen interaktif bisa dicapai dan dijalankan dengan keyboard
- [ ] Focus ring terlihat, tidak ada `outline: none` tanpa pengganti
- [ ] Tidak ada overflow horizontal di 360px
- [ ] `index.html` memakai `lang="id"`
- [ ] Font dimuat lokal dengan `font-display: swap`, halaman tetap terbaca saat font belum termuat
- [ ] Teks di atas bidang olive lolos kontras 4.5:1
- [ ] `npm run build` lolos dan console bersih
- [ ] Setiap elemen sudah diklik satu per satu dan hasilnya dicatat sebagai bukti

---

## 10. Ide yang saya usulkan, tunggu konfirmasi kalian

1. **Header tipis tanpa navbar penuh.** Halaman ini terlalu pendek untuk navbar empat menu.
2. **Avatar inisial, bukan foto generate.** Foto asli nanti bisa masuk kapan saja, tapi
   jangan sampai AI membuat wajah yang tidak ada.
3. **Skill ditampilkan sebagai tag, bukan bar persentase.** Kalau kalian memang mau
   menunjukkan tingkat, pakai label jujur yang kalian isi sendiri (mis. "sering dipakai"
   dan "pernah dipakai"), bukan angka.
4. **Section kemampuan gabungan ditunda.** Awalnya aku usul membuat section yang
   menggabungkan skill bertiga. Sekarang section itu keluar dari plan, karena tanpa daftar
   skill yang asli, isinya cuma akan mengulang profil per orang. Kalau nanti skill kalian
   ternyata saling melengkapi, section ini bisa dimasukkan lagi.
5. **Section karya ditunda.** Kalau nanti ada 1 sampai 2 proyek nyata yang boleh
   dipublikasikan, section ini layak ditambahkan setelahnya.
6. **Satu halaman saja, tanpa halaman detail per orang.** Kalau tiap orang ingin halaman
   sendiri, plan ini perlu ditambah rute dan itu menambah pekerjaan cukup banyak.

Sudah dikonfirmasi: font opsi A, aksen olive, nama tim tetap A2F, bahasa Indonesia.

Yang masih perlu kalian berikan:

1. Role, daftar skill, skill unggulan, dan link kontak untuk tiap anggota (bagian 3).
2. Satu alamat kontak nyata untuk section kontak.
3. Konfirmasi ejaan headline: tetap "Keep consistence" atau diperbaiki.
4. Satu kalimat pengganti untuk paragraf pendukung di hero, kalau kalian mau menulis
   sendiri.
