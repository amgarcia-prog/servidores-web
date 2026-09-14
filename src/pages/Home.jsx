import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const QUOTES = [
  '"El Corazón de Nuestro Divino Maestro no conoce otra ley que la de la dulzura, la humildad y del amor".',
  '"La caridad es la reina de las virtudes. Como el hilo entrelaza las perlas, así la caridad a las otras virtudes; cuando se rompe el hilo caen las perlas. Por eso cuando falta la caridad, las virtudes se pierden".',
  '"En todo pobre está Jesús agonizante; en todo enfermo está Jesús sufriente; en todo enfermo pobre está Jesús dos veces presente".',
]

const OBRAS_CARDS = [
  {
    title: 'Quiénes Somos',
    img: '/images/quienes-somos.jpg',
    to: '/quienes-somos',
  },
  {
    title: 'Espiritualidad',
    img: '/images/espiritualidad.jpg',
    to: '/espiritualidad',
  },
]

const PUBLICACIONES = [
  {
    title: 'Asamblea Servidores del Servidor',
    excerpt:
      '¡Servido sea Jesucristo! Con alegría en el Señor, queremos compartirles e invitarles a unirnos en fe y oración a la Asamblea General 2025 que se llevará […]',
    img: '/images/noticia-asamblea.jpg',
    href: 'https://servidoresdelservidor.org/saludonavidad/',
  },
  {
    title: 'Día Santo Padre Pío 2024',
    excerpt:
      '¡Servido sea Jesucristo! Con gozo y alegría la comunidad apostólica Servidores del Servidor queremos hacerles participe de la fiesta en honor a nuestro Santo Patrono, el […]',
    img: '/images/noticia-padre-pio.jpg',
    href: 'https://servidoresdelservidor.org/celebracionpadrepio/',
  },
  {
    title: 'VII Encuentro Torreta',
    excerpt:
      'Servido sea Jesucristo Queridos hermanos, compartimos un vídeo muy especial para ti. Esperamos que te alegre y motive para vivir nuestro VII […]',
    img: '/images/noticia-torreta.jpg',
    href: 'https://servidoresdelservidor.org/asambleaservidores/',
  },
]

export default function Home() {
  return (
    <>
      <Carousel />

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
          <div className="mb-14 border-b border-brand-border pb-6">
            <h2 className="font-serif-display text-[30px] text-brand-blue font-medium">Nuestras Obras</h2>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-16">
            {OBRAS_CARDS.map((card) => (
              <Link key={card.title} to={card.to} className="group block">
                <div className="overflow-hidden mb-5 aspect-[4/5]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif-display text-[22px] text-brand-blue font-medium">{card.title}</h3>
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

      {/* ULTIMAS PUBLICACIONES */}
      <section className="px-[72px] pb-[120px]">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-brand-border pb-6">
            <h2 className="font-serif-display text-[30px] text-brand-blue font-medium">Últimas publicaciones</h2>
            <a
              href="https://servidoresdelservidor.org/noticias/"
              className="text-xs font-semibold tracking-[0.04em] uppercase border-b-2 border-brand-terracotta pb-1"
            >
              Ver todas
            </a>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {PUBLICACIONES.map((post) => (
              <article key={post.title}>
                <div className="h-[220px] mb-5 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif-display text-[20px] text-brand-blue font-medium mb-3 leading-[1.3]">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-brand-ink-muted mb-4">{post.excerpt}</p>
                <a href={post.href} className="text-[13px] font-semibold">
                  Leer más →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
