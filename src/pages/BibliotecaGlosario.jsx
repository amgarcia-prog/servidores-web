import PageBanner from '../components/PageBanner'

const TERMINOS = [
  {
    termino: 'Servidor',
    def: 'persona que pertenece a la comunidad Servidores del Servidor, quién está comprometido para trabajar por el pobre y gente necesitada.',
  },
  {
    termino: 'Servidor Laborioso',
    def: 'trabaja en actividades para soportar la comunidad sin haber cumplido votos.',
  },
  { termino: 'Servidor Mensajero', def: 'da a conocer la obra y obtiene nuevos servidores.' },
  { termino: 'Servidor Orante', def: 'ora diariamente por la fecundidad de la comunidad.' },
  {
    termino: 'Patio',
    def: 'lugar, usualmente en barrios de bajos recursos, donde se llevan alimento y la palabra de Dios a los miseritos.',
  },
  {
    termino: 'Miserito',
    def: 'Es el nombre con que la comunidad denomina aquellos que merecen la misericordia de Dios. Pueden ser pobres, personas de la calle, niños, ancianos, enfermos, personas privadas de libertad e incluso los mismos servidores.',
  },
]

export default function BibliotecaGlosario() {
  return (
    <>
      <PageBanner title="Glosario de Términos" />
      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto space-y-8">
          {TERMINOS.map((t) => (
            <div key={t.termino}>
              <h2 className="font-serif-display text-[20px] text-brand-blue font-medium mb-1.5">
                {t.termino}
              </h2>
              <p className="text-[15px] leading-[1.8] text-brand-ink-muted">{t.def}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
