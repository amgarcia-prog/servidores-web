import PageBanner from '../components/PageBanner'
import PageSection from '../components/PageSection'

export default function Historia() {
  return (
    <>
      <PageBanner title="Nuestra Historia" />

      <PageSection>
        <p>
          La Comunidad Apostólica Donum Christi Servidores del Servidor Hijos di Padre Pío, es una
          asociación privada de fieles laicos con personería jurídica eclesiástica que nace fruto de un
          grupo de oración a finales de los años 1990.
        </p>
        <p>
          Es así como en oración el Espíritu Santo nos ayuda a discernir la voluntad de Dios para esta
          comunidad naciente, y su palabra nos regala los textos bíblicos que fundamentan el carisma de
          nuestra comunidad. Así capítulo 2 de la carta del Apóstol Santiago “Muéstrame tu fe sin obras y yo
          te mostraré por las obras mi fe”. (St. 2, 14-26). “El hijo del Hombre no ha venido a ser servido
          sino a servir”. (Mateo 20, 28)
        </p>
        <p>
          Finalmente el Evangelio de San Mateo capítulo 25, 31-46 que nos llevó a Servir a las personas más
          necesitadas y excluidas, tomando como ejemplo de vida y servicio al fraile capuchino San Pío de
          Pietrelcina.
        </p>
        <p>
          Como un nuevo pentecostés, era claro el mensaje: había que servir, así nuestro Señor Jesús
          comunica su anhelo, amoroso y suplicante en el texto de Mateo 25, 31-40: "Entonces dirá el Rey:
          Venid, benditos de mi Padre... Porque tuve hambre y me disteis de comer; tuve sed, y me disteis de
          beber; era forastero y me acogisteis; estaba desnudo y me vestisteis; enfermo y me visitasteis; en
          la cárcel y vinisteis a verme... En verdad os digo que cuanto hicisteis a unos de estos hermanos
          míos más pequeños, a mí me lo hicisteis”, entonces el Espíritu inspira: ser “SERVIDORES A EJEMPLO
          DE CRISTO”. Así fue dado el anuncio, el llamado y el camino, en consecuencia se empieza a servir a
          los más necesitados realizando obras de Misericordia.
        </p>
      </PageSection>

      <PageSection className="bg-white" eyebrow="Línea de tiempo">
        <div className="space-y-6">
          {[
            {
              date: '1 de noviembre de 2003',
              text: 'Retiro espiritual en Piedecuesta (Santander, Colombia) bajo la dirección de los Ermitaños Eucarísticos del Padre Celestial; el padre Antonio Lutens confirmó el carisma de la Comunidad bajo la espiritualidad de San Pío de Pietrelcina.',
            },
            {
              date: '8 de diciembre de 2003',
              text: 'Fecha oficial de fundación de la Asociación Privada de Fieles Laicos Comunidad Apostólica Servidores del Servidor Hijos di Padre Pío, en la ciudad de Bogotá.',
            },
            {
              date: '9 de julio de 2005',
              text: 'Día de la Virgen de Chiquinquirá: la Conferencia Episcopal de Colombia aprueba los estatutos y da la directriz de encardinación en la Arquidiócesis de Bogotá.',
            },
            {
              date: '18 de diciembre de 2007',
              text: 'La Arquidiócesis de Bogotá aprueba a la Comunidad como Asociación Privada de fieles laicos bajo el Decreto 1339 de 2007.',
            },
          ].map((item) => (
            <div key={item.date} className="flex gap-6">
              <div className="w-[180px] flex-shrink-0 text-[13px] font-semibold uppercase tracking-wide text-brand-terracotta pt-0.5">
                {item.date}
              </div>
              <p className="text-[15px] leading-[1.8] text-brand-ink-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <div className="h-[380px] overflow-hidden">
        <img src="/images/historia-panel.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <PageSection>
        <p>
          Por voluntad de Dios, la comunidad Servidores del Servidor se ha extendido a otras ciudades de
          Colombia y el mundo, para así llevar el carisma del servicio a todos los lugares de la tierra para
          la mayor gloria de Dios y salvación de las almas.
        </p>
      </PageSection>
    </>
  )
}
