import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const GRUPOS = [
  {
    titulo: 'Oraciones diarias',
    recursos: [
      { titulo: 'Oración al levantarse', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-al-levantarse.pdf' },
      { titulo: 'Oración de Intercesión', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-de-Intercesio%CC%81n.pdf' },
      { titulo: 'Cinco Visitas', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Las-cinco-Visitas.pdf' },
      { titulo: 'Oración de la mañana', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-de-la-man%CC%83ana.pdf' },
      { titulo: 'Oración de la noche', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionNoche.png' },
      { titulo: 'Oración al acostarse', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionAcostarse.png' },
      { titulo: 'Oración para iniciar el servicio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionIniciar.png' },
      { titulo: 'Oración para terminar el servicio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionTerminar.png' },
      { titulo: 'Oración al Espíritu Santo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2021/08/OracionEspirituSanto2.pdf' },
      { titulo: 'Oración de sellamiento', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionSellamiento.png' },
      { titulo: 'Oración de la mañana - Audio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2020/07/ORACION-DE-LA-MAN%CC%83ANA.mp3' },
      { titulo: 'Oración de la noche - Audio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2020/07/ORACION-DE-LA-NOCHE.mp3' },
    ],
  },
]

const NOVENA_PADRE_PIO = [
  { titulo: 'Día Primero', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Introduccion-y-Dia-uno.pdf' },
  { titulo: 'Día Segundo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Nevena-PP-Dia-Dos.pdf' },
  { titulo: 'Día Tercero', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Tres.pdf' },
  { titulo: 'Día Cuarto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Cuatro.pdf' },
  { titulo: 'Día Quinto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Quinto.pdf' },
  { titulo: 'Día Sexto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Sexto.pdf' },
  { titulo: 'Día Séptimo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Septimo.pdf' },
  { titulo: 'Día Octavo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Ocavo.pdf' },
  { titulo: 'Día Noveno', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Noveno.pdf' },
]

const SIMPLES = [
  { titulo: 'Lectio del Servicio', href: '/biblioteca/oracion/lectio-servicio' },
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

function Enlace({ titulo, href }) {
  const interno = href.startsWith('/')
  const Tag = interno ? Link : 'a'
  const tagProps = interno ? { to: href } : { href, target: '_blank', rel: 'noreferrer' }
  return (
    <Tag
      {...tagProps}
      className="flex items-center justify-between py-5 gap-6 group"
    >
      <span className="font-serif-display text-[19px] text-brand-blue group-hover:text-brand-terracotta transition-colors">
        {titulo}
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-brand-blue group-hover:text-brand-terracotta transition-colors">
        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Tag>
  )
}

export default function BibliotecaOracion() {
  return (
    <>
      <PageBanner title="Oración" />
      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto space-y-12">
          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo}>
              <h2 className="font-serif-display text-[19px] text-white font-medium mb-4 px-5 py-3 bg-brand-blue">
                {grupo.titulo}
              </h2>
              <div className="divide-y divide-brand-border border-b border-brand-border">
                {grupo.recursos.map((r) => (
                  <Enlace key={r.titulo} {...r} />
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-serif-display text-[19px] text-white font-medium mb-4 px-5 py-3 bg-brand-blue">
              Novena de Padre Pío
            </h2>
            <div className="divide-y divide-brand-border border-b border-brand-border">
              {NOVENA_PADRE_PIO.map((r) => (
                <Enlace key={r.titulo} {...r} />
              ))}
            </div>
          </div>

          <div>
            <div className="divide-y divide-brand-border border-t border-b border-brand-border">
              {SIMPLES.map((r) => (
                <Enlace key={r.titulo} {...r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
