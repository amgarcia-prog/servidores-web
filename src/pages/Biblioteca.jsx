import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const CATEGORIAS = [
  { titulo: 'Documentos', img: '/images/bib-documentos.png', to: '/biblioteca/documentos' },
  { titulo: 'Glosario de Términos', img: '/images/bib-glosario.png', to: '/biblioteca/glosario' },
  { titulo: 'Oración', img: '/images/bib-oracion.png', to: '/biblioteca/oracion' },
]

export default function Biblioteca() {
  return (
    <>
      <PageBanner title="Biblioteca" />

      <section className="px-6 lg:px-[72px] py-10 lg:py-[70px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          {CATEGORIAS.map((c) => (
            <Link key={c.titulo} to={c.to} className="group block">
              <div className="overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={c.img}
                  alt={c.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="font-serif-display text-[20px] text-brand-blue font-medium text-center group-hover:text-brand-terracotta transition-colors">
                {c.titulo}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
