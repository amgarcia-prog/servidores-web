import PageBanner from '../components/PageBanner'

const GRUPOS = [
  {
    titulo: 'Documentos para Consejos de Ciudades',
    recursos: [
      {
        titulo: 'Reglamento de consejos de ciudades (Incluye funciones)',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Reglamento-Consejos-Ciudades.pdf',
      },
      {
        titulo: 'Formato de acta de reunión',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Formato-acta-reunion.docx',
      },
      {
        titulo: 'Formato de planeación anual de actividades',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Calendario-anual-2026.xlsx',
      },
    ],
  },
  {
    titulo: 'Gobierno Comunidad',
    recursos: [
      {
        titulo: 'Estatutos de la comunidad',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Estatutos-Comunidad.pdf',
      },
      {
        titulo: 'Reglamento de la comunidad',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Reglamento-Comunidad.pdf',
      },
    ],
  },
  {
    titulo: 'Protocolo de los Servicios',
    recursos: [
      {
        titulo: 'Protocolo de comedor',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Protocolo-Comedores.pdf',
      },
      {
        titulo: 'Protocolo servicio de recorrido (canelazo)',
        href: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/documentos/Protocolo-Canelazo.pdf',
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
              <h2 className="font-serif-display text-[19px] text-white font-medium mb-4 px-5 py-3 bg-brand-blue">
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
