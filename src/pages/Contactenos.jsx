import PageBanner from '../components/PageBanner'

const COLABORAR = [
  'Conocer la obra por medio de un servidor que te muestre, te acompañe y te integre a la comunidad.',
  'Disponer tu corazón para aprender a servir de acuerdo a tu carisma y a tu vocación de servicio.',
  'Disponer y destinar de un tiempo de tu quehacer semanal para realizar tu servicio a los hermanos necesitados. (Mínimo dos horas a la semana, el día que prefieras)',
  'Integrarte decididamente a servir en uno de los puntos de servicio a los hermanos necesitados.',
  'Acompañar con tu oración constante todo aquello que harás de hoy en adelante.',
]

const PERTENECER = [
  ['Servidor laborioso', 'que colabora con su trabajo en las obras de caridad a los miseritos.'],
  ['Servidor mensajero', 'que da a conocer la obra y consigue nuevos servidores.'],
  ['Servidor orante', 'que reza diariamente por la fecundidad de las obras de la comunidad.'],
  ['Servidor predicador', 'que enseña y da a conocer la palabra de Dios y el magisterio de la Santa Madre Iglesia.'],
  ['Servidor providente', 'que aporta recursos mensualmente, ya sea en dinero o en especie para financiar los servicios de ayuda al miserito.'],
  ['Hermano paciente', 'miembro consagrado en la comunidad y comprometido con todas las actividades de la comunidad.'],
]

export default function Contactenos() {
  return (
    <>
      <PageBanner title="Contáctenos" />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-6">
            ¿Cómo colaborar o participar de este apostolado?
          </h2>
          <ul className="space-y-3 mb-14">
            {COLABORAR.map((c) => (
              <li key={c} className="flex gap-3 text-[15px] leading-[1.8] text-brand-ink-muted">
                <span className="text-brand-terracotta mt-1.5 flex-shrink-0">✦</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-6">¿Cómo pertenecer?</h2>
          <p className="text-[15px] leading-[1.8] text-brand-ink-muted mb-6">
            Se puede pertenecer, ser miembro y servir en esta santa comunidad de la siguiente manera:
          </p>
          <div className="grid grid-cols-2 gap-5">
            {PERTENECER.map(([titulo, desc]) => (
              <div key={titulo} className="p-5 bg-white border border-brand-border">
                <p className="font-serif-display text-[17px] text-brand-blue font-medium mb-1.5">
                  {titulo}
                </p>
                <p className="text-[14px] leading-[1.7] text-brand-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
