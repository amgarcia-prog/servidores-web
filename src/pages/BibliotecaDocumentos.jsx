import PageBanner from '../components/PageBanner'

const GRUPOS = [
  {
    titulo: 'Documentos para Consejos de Ciudades',
    recursos: [
      {
        titulo: 'Reglamento de consejos de ciudades (Incluye funciones)',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2026/04/Reglamento-de-Consejos-de-Ciudades-V2-Octubre-26-2025.pdf',
      },
      {
        titulo: 'Formato de acta de reunión',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2026/05/Formato-acta-de-reuniones-de-consejos.docx',
      },
      {
        titulo: 'Formato de planeación anual de actividades',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2026/02/Calendario-anual-2026.xlsx',
      },
    ],
  },
  {
    titulo: 'Gobierno Comunidad',
    recursos: [
      {
        titulo: 'Estatutos de la comunidad',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/ESTATUTOS-COMUNIDAD-DECRETO-152-AGTO202021.pdf',
      },
      {
        titulo: 'Reglamento de la comunidad',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/REGLAMENTO-COMUNIDAD-SERVIDORES.pdf',
      },
    ],
  },
  {
    titulo: 'Protocolo de los Servicios',
    recursos: [
      {
        titulo: 'Protocolo de comedor',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2026/02/PROTOCOLO-DE-COMEDORES-2024.pdf',
      },
      {
        titulo: 'Protocolo servicio de recorrido (canelazo)',
        href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/PROTOCOLO-SERVICIOS-DE-RECORRIDO-CANELAZO-SDS.pdf',
      },
    ],
  },
]

export default function BibliotecaDocumentos() {
  return (
    <>
      <PageBanner title="Documentos" />
      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto space-y-12">
          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo}>
              <h2 className="font-serif-display text-[22px] text-brand-blue font-medium mb-4 pb-3 border-b border-brand-border">
                {grupo.titulo}
              </h2>
              <div className="divide-y divide-brand-border border-b border-brand-border">
                {grupo.recursos.map((r) => (
                  <a
                    key={r.titulo}
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-5 gap-6 group"
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
          ))}
        </div>
      </section>
    </>
  )
}
