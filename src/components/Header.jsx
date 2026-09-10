import { useState } from 'react'
import { Link } from 'react-router-dom'

const COMUNIDAD = [
  { label: 'Quiénes Somos', href: 'https://servidoresdelservidor.org/quienes-somos/' },
  { label: 'Obras', href: 'https://servidoresdelservidor.org/obras/' },
  { label: 'Espiritualidad', href: 'https://servidoresdelservidor.org/espiritualidad/' },
  { label: 'Nuestros Símbolos', href: 'https://servidoresdelservidor.org/nuestros-simbolos/' },
  { label: 'Historia', href: 'https://servidoresdelservidor.org/historia/' },
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
          <a
            href="https://servidoresdelservidor.org/padre-pio/"
            className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors"
          >
            Padre Pío
          </a>
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
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-2.5 text-[13px] font-medium text-brand-ink hover:text-brand-terracotta hover:bg-brand-cream transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href="https://servidoresdelservidor.org/donde-estamos-3/"
            className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors"
          >
            ¿Dónde Estamos?
          </a>
          <a
            href="https://servidoresdelservidor.org/biblioteca/"
            className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors"
          >
            Biblioteca
          </a>
        </nav>
        <a
          href="https://servidoresdelservidor.org/contactenos/"
          className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink border-b-2 border-brand-terracotta pb-1"
        >
          Contáctenos
        </a>
      </header>
      <div className="h-px bg-brand-border mx-[72px]" />
    </>
  )
}
