import PageBanner from '../components/PageBanner'

const OBRAS = [
  {
    title: 'Servicio a las personas que viven en las calles',
    img: '/images/obras-calle.jpg',
    text: [
      'Los puntos de servicio están enfocados en brindar atención primaria a habitantes de la calle de la ciudad de Bogotá y de otras ciudades de país, a través de un sanduche de jamón y queso y un vaso de chocolate, siempre acompañado del alimento espiritual; Este servicio se realiza usualmente los domingos.',
      'Los puntos de servicio se sostienen por medio de donaciones, ya sea, en especie (jamón, chocolate, queso, vasos desechables, refrigerios para los niños, medicamentos) o monetaria para adquirir lo necesario para cada servicio.',
      'Los habitantes de la calle son llamados también "Miseritos", es decir, necesitados de misericordia.',
    ],
  },
  {
    title: 'Comedor para niños y abuelos',
    img: '/images/obras-comedor.jpeg',
    text: [
      'Los comedores son un punto de servicio enfocado a brindar alimento a poblaciones vulnerables de varios sectores de la ciudad, este alimento es gratuito y se da todos los días incluyendo domingos y festivos.',
      'La metodología de los comedores está enfocada a permitir que las personas que deseen servir tengan un lugar donde hacerlo, cada día del mes un grupo de personas, ya sea familiares, amigos, compañeros, etc, se organiza para conseguir, preparar y servir los alimentos; también es posible elaborar un día de comedor con dinero proveniente de personas que no pueden asistir por su trabajo u otras obligaciones pero gustan donar lo necesario para su realización.',
    ],
  },
  {
    title: 'Hogares de paso para habitantes de la calle',
    img: '/images/obras-hogar-calle.jpg',
    text: [
      'Nuestros hogares de paso consisten en un lugar adecuado para que las personas que viven en la calle puedan tener un plato de comida caliente, el aseo para su cuerpo, vestido y acompañamiento espiritual y humano.',
    ],
  },
  {
    title: 'Hogares de paso para enfermos',
    img: '/images/obras-hogar-enfermos.jpg',
    text: [
      'Tenemos hogares para recibir a los familiares y enfermos que vienen de poblaciones sin cobertura médica especializada y se les acoge durante su tratamiento en la ciudad.',
    ],
  },
]

export default function Obras() {
  return (
    <>
      <PageBanner title="Nuestras Obras" />

      <section className="px-6 lg:px-[72px] pt-10 lg:pt-[70px] pb-6">
        <p className="max-w-[900px] mx-auto text-[18px] leading-[1.8] text-brand-blue font-serif-display italic text-center">
          Como poblaciones vulnerables nos dedicamos a la caridad con el pobre, con el habitante de calle,
          con los niños de bajos recursos, con los abuelitos abandonados y con las trabajadoras sexuales. A
          todos ellos nos acercamos respetando y retribuyéndoles su dignidad como personas y como parte
          fundamental de la sociedad. A todos ellos les obsequiamos alimento material, pero nuestro fin más
          importante es ofrecerles el más esencial: el amor.
        </p>
      </section>

      {OBRAS.map((obra, i) => (
        <div key={obra.title}>
          <section className="px-6 lg:px-[72px] py-10 lg:py-[60px]">
            <div
              className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 items-center"
            >
              <div className={i % 2 === 1 ? 'order-2' : ''}>
                <img src={obra.img} alt={obra.title} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className={i % 2 === 1 ? 'order-1' : ''}>
                <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-4">
                  {obra.title}
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.8] text-brand-ink-muted">
                  {obra.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {i === 1 && (
            <img src="/images/obras-panel-1.jpg" alt="" className="w-full h-auto block" />
          )}
          {i === 2 && (
            <img src="/images/obras-panel-2.jpg" alt="" className="w-full h-auto block" />
          )}
        </div>
      ))}
    </>
  )
}
