import { Link } from 'react-router-dom'

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Servidores-del-Servidor-159201044110118/?fref=ts',
    path: 'M15 8H17V4H15C12.8 4 11 5.8 11 8V10H9V14H11V21H15V14H17.5L18 10H15V8.5C15 8.2 15.2 8 15 8Z',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/ServdelServidor',
    path: 'M4 4L20 20M20 4L4 20',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCd7ioTsOBlhr5ZXQtYBdBnw',
    rect: true,
  },
]

export default function Footer() {
  return (
    <footer className="px-[72px] py-[52px] flex items-center justify-between flex-wrap gap-5">
      <span className="text-[13px]" style={{ color: '#6E685C' }}>
        © {new Date().getFullYear()} Servidores del Servidor. Todos los Derechos Reservados.
      </span>
      <div className="flex items-center gap-7">
        <Link to="/biblioteca" className="text-[13px] text-brand-ink-muted font-medium hover:text-brand-terracotta transition-colors">
          Biblioteca
        </Link>
        <Link to="/publicaciones" className="text-[13px] text-white bg-brand-terracotta font-semibold px-4 py-2 hover:bg-[#9c5525] transition-colors">
          Publicaciones
        </Link>
        <Link to="/contactenos" className="text-[13px] text-brand-ink-muted font-medium hover:text-brand-terracotta transition-colors">
          Contáctenos
        </Link>
        <div className="flex gap-4 pl-3 border-l border-brand-border">
          <a href={SOCIALS[0].href} aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d={SOCIALS[0].path} stroke="#6E685C" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={SOCIALS[1].href} aria-label="X (Twitter)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d={SOCIALS[1].path} stroke="#6E685C" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </a>
          <a href={SOCIALS[2].href} aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="12" rx="3" stroke="#6E685C" strokeWidth="1.3" />
              <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="#6E685C" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
