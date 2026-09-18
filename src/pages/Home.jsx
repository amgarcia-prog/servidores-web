import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { API_URL } from '../config'

const QUOTES = [
  '"El Corazón de Nuestro Divino Maestro no conoce otra ley que la de la dulzura, la humildad y del amor".',
  '"La caridad es la reina de las virtudes. Como el hilo entrelaza las perlas, así la caridad a las otras virtudes; cuando se rompe el hilo caen las perlas. Por eso cuando falta la caridad, las virtudes se pierden".',
  '"En todo pobre está Jesús agonizante; en todo enfermo está Jesús sufriente; en todo enfermo pobre está Jesús dos veces presente".',
]

const OBRAS_CARDS = [
  {
    title: 'Quiénes Somos',
    img: '/images/qs-banner.jpg',
    to: '/quienes-somos',
  },
  {
    title: 'Espiritualidad',
    img: '/images/esp-banner.jpg',
    to: '/espiritualidad',
  },
  {
    title: 'Obras',
    img: '/images/obras-calle.jpg',
    to: '/obras',
  },
]

export default function Home() {
  const [publicaciones, setPublicaciones] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/publicaciones`)
      .then((r) => r.json())
      .then((data) => setPublicaciones(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  return (
    <>
      <Carousel />

      <section className="px-[72px] pt-[60px] pb-4 text-center">
        <Link
          to="/donde-estamos"
          className="inline-flex items-center gap-2.5 px-[34px] py-4 bg-brand-terracotta text-white font-semibold text-[16px] hover:bg-[#9c5525] transition-colors"
        >
          Dona aquí
        </Link>
      </section>

      {/* NUESTRA PRIORIDAD — misión, texto completo */}
      <section className="px-[72px] pt-[100px] pb-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="font-serif-display text-[26px] leading-[1.6] text-brand-blue">
            Nuestra prioridad es el servicio al más necesitado. Aquellos a quienes la sociedad les ha
            negado el amor y la dignidad humana que se merecen. Pueden ser pobres o ricos y nosotros los
            llamamos <span className="italic">miseritos</span>, por ser necesitados de la misericordia de
            Dios, necesitados de su amor. Es por ello que en los espacios de servicio de la comunidad
            pueden compartir personas de diferentes condiciones sociales, económicas o religiosas que
            buscan darle sentido a su vida a través del amor. Tanto el servido como el servidor{' '}
            <span className="italic">urgen del amor</span>.
          </p>
        </div>
      </section>

      {/* NUESTRAS OBRAS — fotos reales + las tres citas del Padre Pío */}
      <section className="px-[72px] pb-[120px]">
        <div className="max-w-[1296px] mx-auto">
          <div className="grid grid-cols-3 gap-10 mb-16">
            {OBRAS_CARDS.map((card) => (
              <Link key={card.title} to={card.to} className="group block relative overflow-hidden aspect-[4/5]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent pt-16 pb-5 px-5">
                  <h3 className="font-serif-display text-[22px] text-white font-medium">{card.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-10">
            {QUOTES.map((q) => (
              <p key={q} className="font-serif-display text-[16px] leading-[1.7] italic text-brand-ink-muted">
                {q}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICACIONES */}
      {publicaciones.length > 0 && (
        <section className="px-[72px] pb-[120px]">
          <div className="max-w-[1296px] mx-auto">
            <div className="mb-12 border-b border-brand-border pb-6">
              <h2 className="font-serif-display text-[30px] text-brand-blue font-medium">Publicaciones</h2>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {publicaciones.map((post) => (
                <article key={post.id}>
                  {post.imagen_url && (
                    <div className="h-[220px] mb-5 overflow-hidden bg-white flex items-center justify-center">
                      <img src={post.imagen_url} alt={post.titulo} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <h3 className="font-serif-display text-[20px] text-brand-blue font-medium mb-3 leading-[1.3]">
                    {post.titulo}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-brand-ink-muted mb-4">{post.extracto}</p>
                  {post.enlace && (
                    <a href={post.enlace} className="text-[13px] font-semibold">
                      Leer más →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
