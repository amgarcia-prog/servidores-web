import PageBanner from '../components/PageBanner'

const PAISES = [
  {
    pais: 'Colombia',
    ciudades: [
      { nombre: 'Bogotá', img: '/images/ciudad-bogota.jpg' },
      { nombre: 'Bucaramanga', img: '/images/ciudad-bucaramanga.jpg' },
      { nombre: 'Medellín', img: '/images/ciudad-medellin.jpg' },
      { nombre: 'Tuluá', img: '/images/ciudad-tulua.jpg' },
      { nombre: 'Barranquilla', img: '/images/ciudad-barranquilla.jpg' },
      { nombre: 'Neiva', img: '/images/ciudad-neiva.jpg' },
      { nombre: 'Cúcuta', img: '/images/ciudad-cucuta.webp' },
      { nombre: 'Cartagena', img: '/images/ciudad-cartagena.jpg' },
    ],
  },
  {
    pais: 'Estados Unidos',
    ciudades: [{ nombre: 'Miami', img: '/images/ciudad-miami.jpg' }],
  },
  {
    pais: 'Paraguay',
    ciudades: [{ nombre: 'Villarrica del Espíritu Santo', img: null }],
  },
]

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
                  <div key={c.nombre}>
                    <div className="aspect-[4/3] mb-3 overflow-hidden bg-brand-border">
                      {c.img && <img src={c.img} alt={c.nombre} className="w-full h-full object-cover" />}
                    </div>
                    <p className="text-[15px] font-medium text-brand-blue text-center">{c.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
