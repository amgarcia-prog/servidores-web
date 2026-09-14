import { useEffect, useState } from 'react'

const SLIDES = [
  {
    img: '/images/slide-padre-pio.jpg',
    quote: '"Santo Padre Pío, ruega por nosotros; y fortalécenos en el servicio".',
    source: '',
  },
  {
    img: '/images/slide-mt2540.jpg',
    quote:
      'Y el Rey les dirá: "En verdad os digo que cuanto hicisteis a unos de estos hermanos míos más pequeños, a mí me lo hicisteis".',
    source: 'Mt 25-40',
  },
  {
    img: '/images/slide-ora-espera.jpg',
    quote:
      'Ora, espera y no te preocupes. "La preocupación es inútil, Nuestro Padre Misericordioso escuchará tu oración".',
    source: 'San Padre Pío',
  },
  {
    img: '/images/slide-espiritualidad.jpg',
    quote: '"Une tu corazón al corazón de Jesús, y sé siempre humilde de corazón como lo quiere él".',
    source: 'San Padre Pío',
  },
]

export default function Carousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[560px] overflow-hidden bg-brand-ink">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="px-[72px] pb-16 max-w-[760px]">
              <p className="font-serif-display text-[26px] leading-[1.5] text-white italic">
                {slide.quote}
              </p>
              {slide.source && (
                <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-brand-border mt-4">
                  {slide.source}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 right-[72px] flex gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.img}
            onClick={() => setActive(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? 'w-7 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
