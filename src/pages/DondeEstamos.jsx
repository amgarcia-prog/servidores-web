import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { CIUDADES } from '../data/ciudades'

const PAISES = [
  {
    pais: 'Colombia',
    ciudades: [
      { nombre: 'Bogotá', img: '/images/ciudad-bogota.jpg', slug: 'bogota' },
      { nombre: 'Bucaramanga', img: '/images/ciudad-bucaramanga.jpg', slug: 'bucaramanga' },
      { nombre: 'Medellín', img: '/images/ciudad-medellin.jpg', slug: 'medellin' },
      { nombre: 'Tuluá', img: '/images/ciudad-tulua.jpg', slug: 'tulua' },
      { nombre: 'Barranquilla', img: '/images/ciudad-barranquilla.jpg', slug: 'barranquilla' },
      { nombre: 'Neiva', img: '/images/ciudad-neiva.jpg', slug: 'neiva' },
      { nombre: 'Cúcuta', img: '/images/ciudad-cucuta.webp', slug: 'cucuta' },
      { nombre: 'Cartagena', img: '/images/ciudad-cartagena.jpg', slug: 'cartagena' },
    ],
  },
  {
    pais: 'Estados Unidos',
    ciudades: [{ nombre: 'Miami', img: '/images/ciudad-miami.jpg', slug: 'miami' }],
  },
  {
    pais: 'Paraguay',
    ciudades: [{ nombre: 'Villarrica del Espíritu Santo', img: '/images/py-villarica.jpg', slug: 'paraguay' }],
  },
]

function CiudadCard({ c }) {
  const clickable = c.slug && CIUDADES[c.slug]
  const content = (
    <>
      <div className="aspect-[4/3] mb-3 overflow-hidden bg-brand-border">
        {c.img && (
          <img
            src={c.img}
            alt={c.nombre}
            className={`w-full h-full object-cover ${clickable ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}
          />
        )}
      </div>
      <p
        className={`text-[15px] font-medium text-center ${
          clickable ? 'text-brand-blue group-hover:text-brand-terracotta transition-colors' : 'text-brand-blue'
        }`}
      >
        {c.nombre}
      </p>
    </>
  )

  if (clickable) {
    return (
      <Link to={`/donde-estamos/${c.slug}`} className="group block">
        {content}
      </Link>
    )
  }
  return <div>{content}</div>
}

export default function DondeEstamos() {
  return (
    <>
      <PageBanner title="Dónde Estamos" />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {PAISES.map((p) => (
            <div key={p.pais}>
              <h2 className="font-serif-display text-[26px] text-brand-blue font-medium mb-8 pb-4 border-b border-brand-border">
                {p.pais}
              </h2>
              <div className="grid grid-cols-4 gap-8">
                {p.ciudades.map((c) => (
                  <CiudadCard key={c.nombre} c={c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
