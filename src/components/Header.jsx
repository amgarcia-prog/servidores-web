import { Link } from 'react-router-dom'

const NAV = [
  { label: 'Quiénes Somos', href: '#' },
  { label: 'Espiritualidad', href: '#' },
  { label: 'Padre Pío', href: '#' },
  { label: 'Dónde Estamos', href: '#' },
  { label: 'Biblioteca', href: '#' },
]

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-[72px] py-7 bg-brand-cream">
        <Link to="/" className="font-serif-display text-[22px] font-semibold text-brand-blue tracking-tight">
          Servidores del Servidor
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-terracotta transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="text-[13px] font-semibold uppercase tracking-wider text-brand-ink border-b-2 border-brand-terracotta pb-1"
        >
          Contáctenos
        </a>
      </header>
      <div className="h-px bg-brand-border mx-[72px]" />
    </>
  )
}
