import { useState } from 'react'
import { Link } from 'react-router-dom'

const COMUNIDAD = [
  { label: 'Quiénes Somos', to: '/quienes-somos' },
  { label: 'Obras', to: '/obras' },
  { label: 'Espiritualidad', to: '/espiritualidad' },
  { label: 'Nuestros Símbolos', to: '/nuestros-simbolos' },
  { label: 'Historia', to: '/historia' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="flex items-center justify-between px-[72px] py-5 bg-brand-cream">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Servidores del Servidor" className="h-12 w-12" />
          <span className="font-serif-display text-[22px] font-semibold text-brand-blue tracking-tight">
            Servidores del Servidor
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          <Link to="/" className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors">
            Inicio
          </Link>
          <Link to="/padre-pio" className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors">
            Padre Pío
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors">
              Nuestra Comunidad
            </button>
            {open && (
              <div className="absolute top-full left-0 pt-3 z-10">
                <div className="bg-white border border-brand-border shadow-lg min-w-[200px] py-2">
                  {COMUNIDAD.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block px-5 py-2.5 text-[13px] font-medium text-brand-ink hover:text-brand-terracotta hover:bg-brand-cream transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/donde-estamos" className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors">
            ¿Dónde Estamos?
          </Link>
          <Link to="/biblioteca" className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors">
            Biblioteca
          </Link>
        </nav>
        <Link
          to="/contactenos"
          className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink border-b-2 border-brand-terracotta pb-1"
        >
          Contáctenos
        </Link>
      </header>
      <div className="h-px bg-brand-border mx-[72px]" />
    </>
  )
}
