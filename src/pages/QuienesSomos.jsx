import PageBanner from '../components/PageBanner'
import PageSection from '../components/PageSection'

export default function QuienesSomos() {
  return (
    <>
      <PageBanner title="Quiénes Somos" img="/images/qs-banner.jpg" />

      <PageSection>
        <p className="font-serif-display text-[22px] italic text-brand-blue leading-[1.6]">
          Servidores del servidor, es una asociación de fieles laicos sin ánimo de lucro, de la Iglesia
          Católica, con personería jurídica y aprobación Eclesiástica de la Arquidiócesis de Bogotá,
          Decreto 1339 - Diciembre 18 de 2007; conformada por laicos, todos con un solo ideal: “SER
          SERVIDORES DEL SERVIDOR”.
        </p>
      </PageSection>

      <PageSection eyebrow="¿Qué hacemos?">
        <p>
          La comunidad apostólica SERVIDORES DEL SERVIDOR, por voluntad de Dios, convoca a construir y ser
          iglesia. Es así que desde la oración: planea, incentiva, organiza y funda puntos de servicio; en
          donde los más necesitados de ayuda física y/o espiritual encuentran en el abrazo y en las obras,
          el amor de Cristo, la providencia de Dios para suplir sus necesidades básicas; vivencia de las
          palabras de Nuestro Señor Jesús en el evangelio de Mateo 25:31-46.
        </p>
      </PageSection>

      <div className="h-[380px] overflow-hidden">
        <img src="/images/qs-panel-calle.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <PageSection eyebrow="Nuestro carisma" className="bg-white">
        <p>
          El carisma que sustenta y da vida a la comunidad se llama “servicio”. Siguiendo los pasos de San
          Pío de Pietrelcina, Servir a Cristo presente en el hermano necesitado a ejemplo del Buen
          Samaritano, ayudando a descubrir en los hombres su don de servicio para su salvación y la de
          muchos.
        </p>
      </PageSection>

      <div className="h-[380px] overflow-hidden">
        <img src="/images/qs-panel-grupo.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-12">
          <div>
            <div className="mb-6 overflow-hidden">
              <img src="/images/qs-mision.jpeg" alt="Misión de Servidores del Servidor" className="w-full" />
            </div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">Misión</h2>
            <p className="text-[16px] leading-[1.8] text-brand-ink-muted">
              Invitar, acoger y enseñar a los hombres del mundo a servir a los más necesitados, para que en
              el servicio, servidores y servidos encuentren a Cristo y con Él, el camino de la Santidad.
            </p>
          </div>
          <div>
            <div className="mb-6 overflow-hidden">
              <img src="/images/qs-vision.jpeg" alt="Visión de Servidores del Servidor" className="w-full" />
            </div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">Visión</h2>
            <p className="text-[16px] leading-[1.8] text-brand-ink-muted">
              De la mano de la Iglesia Católica, ser una comunidad de laicos extendida por el mundo viviendo
              el carisma del servicio a ejemplo del buen samaritano.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[380px] overflow-hidden">
        <img src="/images/qs-panel-servicio.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <PageSection eyebrow="¿Dónde queremos estar?" className="bg-white">
        <div className="grid grid-cols-4 gap-6">
          <img src="/images/qs-donde-1.jpeg" alt="En toda actividad humanitaria, pero también en el silencio" className="w-full" />
          <img src="/images/qs-donde-2.jpeg" alt="En los sitios de la ciudad en donde están concentrados los hermanos mendicantes" className="w-full" />
          <img src="/images/qs-donde-3.jpeg" alt="En los diferentes grupos de oración y acción pastoral en las parroquias" className="w-full" />
          <img src="/images/qs-donde-4.jpg" alt="En cada familia orante y en el corazón de cada hombre que ame a Cristo Eucaristía" className="w-full" />
        </div>
      </PageSection>
    </>
  )
}
