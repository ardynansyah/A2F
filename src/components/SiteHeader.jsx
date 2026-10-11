export default function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-5xl px-5 pt-5 sm:px-8 sm:pt-9">
      {/* min-h-11 menjaga target sentuh minimal 44px tanpa mengubah ukuran teks. */}
      <a
        href="#utama"
        className="inline-flex min-h-11 items-center font-display text-xl font-medium tracking-tight text-ink"
      >
        A2F
      </a>
      {/* Nav belum dirender: link kontak baru ditambahkan di M3, setelah section
          #kontak punya tujuan nyata. */}
    </header>
  )
}
