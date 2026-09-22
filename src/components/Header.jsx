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
  const [menuMovil, setMenuMovil] = useState(false)
  const [comunidadMovil, setComunidadMovil] = useState(false)

  const cerrarMovil = () => {
    setMenuMovil(false)
    setComunidadMovil(false)
  }

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-[72px] py-4 lg:py-5 bg-brand-cream">
        <Link to="/" className="flex items-center gap-3" onClick={cerrarMovil}>
          <img src="/images/logo.png" alt="Servidores del Servidor" className="h-10 w-10 lg:h-12 lg:w-12" />
          <span className="font-serif-display text-[16px] lg:text-[22px] font-semibold text-brand-blue tracking-tight leading-tight">
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
          className="hidden lg:block text-[13px] font-semibold uppercase tracking-wider text-brand-ink border-b-2 border-brand-terracotta pb-1"
        >
          Contáctenos
        </Link>

        <button
          onClick={() => setMenuMovil((v) => !v)}
          aria-label="Abrir menú"
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center flex-shrink-0"
        >
          <span className={`block w-6 h-[2px] bg-brand-blue transition-transform ${menuMovil ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-brand-blue transition-opacity ${menuMovil ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-brand-blue transition-transform ${menuMovil ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </header>

      <div className="h-px bg-brand-border mx-6 lg:mx-[72px]" />

      {menuMovil && (
        <nav className="lg:hidden bg-brand-cream border-b border-brand-border px-6 py-4">
          <Link to="/" onClick={cerrarMovil} className="block py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-ink">
            Inicio
          </Link>
          <Link to="/padre-pio" onClick={cerrarMovil} className="block py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-ink">
            Padre Pío
          </Link>

          <button
            onClick={() => setComunidadMovil((v) => !v)}
            className="w-full flex items-center justify-between py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-ink"
          >
            Nuestra Comunidad
            <span className={`transition-transform ${comunidadMovil ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {comunidadMovil && (
            <div className="pl-4 pb-2">
              {COMUNIDAD.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={cerrarMovil}
                  className="block py-2 text-[13px] font-medium text-brand-ink-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/donde-estamos" onClick={cerrarMovil} className="block py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-ink">
            ¿Dónde Estamos?
          </Link>
          <Link to="/biblioteca" onClick={cerrarMovil} className="block py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-ink">
            Biblioteca
          </Link>
          <Link to="/contactenos" onClick={cerrarMovil} className="block py-2.5 text-[14px] font-semibold uppercase tracking-wider text-brand-terracotta">
            Contáctenos
          </Link>
        </nav>
      )}
    </>
  )
}
