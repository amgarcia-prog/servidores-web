import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { CIUDADES } from '../data/ciudades'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C7.03 3 3 7.03 3 12C3 13.65 3.45 15.19 4.24 16.51L3 21L7.62 19.79C8.89 20.49 10.4 20.9 12 20.9C16.97 20.9 21 16.87 21 11.9C21 6.93 16.97 3 12 3ZM12 19.2C10.58 19.2 9.25 18.79 8.13 18.09L7.84 17.91L5.06 18.64L5.8 15.94L5.6 15.64C4.83 14.47 4.4 13.09 4.4 11.65C4.4 7.63 7.98 4.4 12 4.4C16.02 4.4 19.6 7.63 19.6 11.65C19.6 15.67 16.02 19.2 12 19.2Z"
        fill="currentColor"
      />
      <path
        d="M9.1 8.4C8.9 7.95 8.7 7.94 8.5 7.93C8.35 7.92 8.17 7.92 8 7.92C7.83 7.92 7.55 7.98 7.31 8.24C7.07 8.5 6.4 9.12 6.4 10.38C6.4 11.64 7.33 12.86 7.46 13.03C7.59 13.2 9.25 15.87 11.86 16.9C14.03 17.76 14.47 17.59 14.94 17.55C15.41 17.5 16.47 16.92 16.69 16.31C16.91 15.7 16.91 15.18 16.85 15.07C16.78 14.96 16.61 14.9 16.35 14.77C16.09 14.64 14.85 14.03 14.61 13.94C14.37 13.86 14.2 13.81 14.03 14.07C13.86 14.33 13.37 14.9 13.22 15.07C13.07 15.24 12.92 15.26 12.66 15.13C12.4 15 11.58 14.72 10.61 13.86C9.85 13.19 9.34 12.36 9.19 12.1C9.04 11.84 9.17 11.7 9.3 11.57C9.42 11.45 9.56 11.26 9.7 11.11C9.83 10.96 9.88 10.85 9.97 10.68C10.06 10.51 10.02 10.36 9.96 10.23C9.9 10.1 9.4 8.85 9.1 8.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Ciudad() {
  const { slug } = useParams()
  const ciudad = CIUDADES[slug]

  if (!ciudad) {
    return (
      <section className="px-[72px] py-[120px] text-center">
        <h1 className="font-serif-display text-[28px] text-brand-blue font-medium mb-4">
          Estamos preparando esta página
        </h1>
        <p className="text-brand-ink-muted mb-8">Muy pronto tendremos más información de esta ciudad.</p>
        <Link
          to="/donde-estamos"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue border-b-2 border-brand-terracotta pb-1"
        >
          ← Volver a Dónde Estamos
        </Link>
      </section>
    )
  }

  const waHref = `https://wa.me/${ciudad.whatsapp}?text=${encodeURIComponent(
    `¡Servido sea Jesucristo! Quisiera más información sobre el servicio en ${ciudad.nombre}.`
  )}`

  return (
    <>
      <PageBanner title={ciudad.nombre} img={ciudad.banner} />

      {ciudad.cuentaBancaria && (
        <section className="px-[72px] pt-[60px] pb-4 text-center">
          <Link
            to={`/donde-estamos/${slug}/donar`}
            className="inline-flex items-center gap-2.5 px-[34px] py-4 bg-brand-terracotta text-white font-semibold text-[16px] hover:bg-[#9c5525] transition-colors"
          >
            Dona aquí para los servicios de {ciudad.nombre}
          </Link>
        </section>
      )}

      {ciudad.subtitulo && (
        <section className="px-[72px] pt-[60px] pb-4 text-center">
          <p className="max-w-[800px] mx-auto font-serif-display text-[22px] italic text-brand-blue leading-[1.5]">
            {ciudad.subtitulo}
          </p>
        </section>
      )}

      {/* HISTORIA */}
      {ciudad.historia && (
        <section className="px-[72px] py-[50px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">
                {ciudad.historia.titulo}
              </h2>
              <p className="text-[15px] leading-[1.8] text-brand-ink-muted">{ciudad.historia.texto}</p>
            </div>
            {ciudad.historia.foto && (
              <img src={ciudad.historia.foto} alt={ciudad.historia.titulo} className="w-full aspect-[4/3] object-cover" />
            )}
          </div>
        </section>
      )}

      {/* LABOR HOY */}
      {ciudad.labor && (
        <section className="px-[72px] py-[50px] bg-white">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_1.2fr] gap-14 items-center">
            {ciudad.labor.foto && (
              <img src={ciudad.labor.foto} alt={ciudad.labor.titulo} className="w-full aspect-[4/3] object-cover" />
            )}
            <div>
              <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">
                {ciudad.labor.titulo}
              </h2>
              <p className="text-[15px] leading-[1.8] text-brand-ink-muted">{ciudad.labor.texto}</p>
            </div>
          </div>
        </section>
      )}

      {/* DONDE SERVIMOS */}
      <section className="px-[72px] py-[70px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 border-b border-brand-border pb-6">
            <h2 className="font-serif-display text-[28px] text-brand-blue font-medium">Dónde servimos</h2>
          </div>

          {ciudad.puntos.length === 0 ? (
            <p className="text-brand-ink-muted text-[15px]">
              Muy pronto publicaremos aquí los puntos de servicio de {ciudad.nombre}.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-10">
              {ciudad.puntos.map((punto) => (
                <div key={punto.nombre}>
                  <h3 className="font-serif-display text-[21px] text-brand-blue font-medium mb-1.5">
                    {punto.nombre}
                  </h3>
                  {punto.horario && (
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-terracotta mb-3">
                      {punto.horario}
                    </p>
                  )}
                  {punto.descripcion && (
                    <p className="text-[14.5px] leading-[1.75] text-brand-ink-muted mb-4">{punto.descripcion}</p>
                  )}
                  {punto.fotos?.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {punto.fotos.map((foto) => (
                        <div key={foto} className="aspect-square overflow-hidden">
                          <img src={foto} alt={punto.nombre} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CIERRE */}
      {ciudad.cierre && (
        <section className="px-[72px] py-[60px] bg-white text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">
              {ciudad.cierre.titulo}
            </h2>
            <p className="text-[15px] leading-[1.8] text-brand-ink-muted">{ciudad.cierre.texto}</p>
          </div>
        </section>
      )}

      {/* CONTACTO */}
      <section className="px-[72px] py-[70px] bg-brand-blue text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif-display text-[26px] text-white font-medium mb-4">
            Contáctanos en {ciudad.nombre}
          </h2>
          <p className="text-[15px] leading-[1.7] text-brand-border mb-6">
            Escríbenos por WhatsApp y con gusto te contamos cómo puedes servir o recibir ayuda.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-[26px] py-3.5 bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#1EBE5A] transition-colors"
          >
            <WhatsAppIcon />
            +57 301 673 0620
          </a>
        </div>
      </section>
    </>
  )
}
