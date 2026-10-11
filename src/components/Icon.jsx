// Ikon dari font Material Symbols yang dipasang lokal lewat @fontsource.
// Nama ikon ditulis sebagai teks (ligatur), mis. <Icon name="group" />.
export default function Icon({ name, size = 24, className = '', style, ...props }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols select-none ${className}`}
      style={{ fontSize: size, ...style }}
      {...props}
    >
      {name}
    </span>
  )
}
