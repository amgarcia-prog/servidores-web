import PageBanner from '../components/PageBanner'
import PageSection from '../components/PageSection'

const PRINCIPIOS = [
  'En plena e incondicional adhesión a la doctrina de la Iglesia Católica, guiada por el papa y por los obispos.',
  'En obediencia a los obispos, cuyo portavoz, dentro de la Comunidad, es el sacerdote Asesor Espiritual, nombrado por el Obispo diocesano.',
  'En oración con la Iglesia, por la Iglesia y en la Iglesia, con la participación activa en la vida litúrgica y sacramental, vivida como vértice de la íntima comunión con Dios.',
  'En reparación a través de la participación de los sufrimientos de Cristo, según las enseñanzas de la tradición de la Iglesia.',
  'Conforme a una caridad activa y laboriosa en el alivio de los que sufren y de los necesitados, como actuación práctica de la caridad hacia Dios y vivencia de nuestro carisma.',
  'El servicio comienza en la oración, por este motivo, el martes de oración en comunidad, La Santa misa, la Adoración Eucarística, la meditación del Santo Rosario diario y el amor filial a nuestra Madre, Santa María son los instrumentos de navegación que nos ayudan en el camino de santidad.',
]

export default function Espiritualidad() {
  return (
    <>
      <PageBanner title="Espiritualidad" img="/images/esp-banner.jpg" />

      <PageSection>
        <p>
          La comunidad Apostólica Servidores del Servidor, Hijos de Padre Pío sigue los principios generales
          de la espiritualidad franciscana vivenciadas por nuestro padre espiritual el santo padre Pío de
          Pietrelcina así:
        </p>
        <ul className="space-y-4 list-none">
          {PRINCIPIOS.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="text-brand-terracotta mt-1.5 flex-shrink-0">✦</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}
