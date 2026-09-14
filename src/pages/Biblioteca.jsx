import PageBanner from '../components/PageBanner'

const RECURSOS = [
  { titulo: 'Oraciones diarias', href: 'https://servidoresdelservidor.org/oraciones/' },
  { titulo: 'Lectio del Servicio', href: 'https://servidoresdelservidor.org/lectioservicio/' },
  { titulo: 'Novena de Padre Pío', href: 'https://servidoresdelservidor.org/diapadrepio/' },
  {
    titulo: 'Novena María Madre de los Servidores',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-a-Maria-Madre-de-los-Servidores-Agosto-6-2025-1.pdf',
  },
  {
    titulo: 'Protocolo Santo Rosario de la Comunidad',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-Santo-Rosario-Servidores_V1.3.pdf',
  },
  {
    titulo: 'Protocolo de Vigilias',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-de-Vigilia-para-los-Servidores-del-Servidor.pdf',
  },
  {
    titulo: 'Protocolo de Retiros Espirituales',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-de-un-retiro-Espritual-SDS.pdf',
  },
]

export default function Biblioteca() {
  return (
    <>
      <PageBanner title="Biblioteca" />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto">
          <div className="divide-y divide-brand-border border-t border-b border-brand-border">
            {RECURSOS.map((r) => (
              <a
                key={r.titulo}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-5 group"
              >
                <span className="font-serif-display text-[19px] text-brand-blue group-hover:text-brand-terracotta transition-colors">
                  {r.titulo}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-brand-blue group-hover:text-brand-terracotta transition-colors">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
