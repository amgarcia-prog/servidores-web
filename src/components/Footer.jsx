export default function Footer() {
  return (
    <footer className="px-[72px] py-[52px] flex items-center justify-between flex-wrap gap-5">
      <span className="text-[13px]" style={{ color: '#6E685C' }}>
        © {new Date().getFullYear()} Servidores del Servidor · Asociación de fieles laicos sin ánimo de lucro
      </span>
      <div className="flex gap-7">
        <a href="#" className="text-[13px] text-brand-ink-muted font-medium hover:text-brand-terracotta transition-colors">
          Biblioteca
        </a>
        <a href="#" className="text-[13px] text-brand-ink-muted font-medium hover:text-brand-terracotta transition-colors">
          Publicaciones
        </a>
        <a href="#" className="text-[13px] text-brand-ink-muted font-medium hover:text-brand-terracotta transition-colors">
          [correo@servidoresdelservidor.org]
        </a>
      </div>
    </footer>
  )
}
