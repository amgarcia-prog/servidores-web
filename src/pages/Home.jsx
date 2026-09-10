const OBRAS = [
  {
    num: '01',
    title: 'Espiritualidad',
    text: 'Formación y vida de oración inspiradas en la sencillez y el amor del Divino Maestro.',
  },
  {
    num: '02',
    title: 'Servicio al miserito',
    text: 'Presencia en hogares, calles y hospitales, sirviendo a Jesús en el pobre y en el enfermo.',
  },
  {
    num: '03',
    title: 'Comunidad',
    text: 'Una familia de fieles laicos que camina unida en fe, fraternidad y apostolado.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-[72px] pt-[100px] pb-[140px]">
        <div className="max-w-[1296px] mx-auto grid grid-cols-[1.35fr_1fr] gap-16 items-start">
          <div>
            <div className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-[26px]">
              Comunidad católica apostólica
            </div>
            <h1 className="font-serif-display text-[64px] leading-[1.1] text-brand-blue font-medium mb-[30px] max-w-[680px]">
              Servir es la forma más alta de amar
            </h1>
            <p className="text-lg leading-[1.75] text-brand-ink-muted max-w-[520px] mb-10">
              Somos una asociación de fieles laicos que sirve al más necesitado — a quien llamamos{' '}
              <span className="font-serif-display italic">miserito</span>, necesitado de la misericordia de
              Dios — bajo el amparo de San Padre Pío.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-[30px] py-3.5 border border-brand-blue text-brand-blue font-semibold text-[15px] hover:bg-brand-blue hover:text-brand-cream transition-colors"
            >
              Conócenos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div
            className="mt-14 bg-brand-blue px-[38px] py-11 relative"
            style={{ boxShadow: '18px 18px 0 rgba(181,101,45,0.18)' }}
          >
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="mb-[18px]">
              <path
                d="M0 12C0 5 5 0 12 0V4C7.5 4 4.5 7 4.5 12H12V24H0V12ZM18 12C18 5 23 0 30 0V4C25.5 4 22.5 7 22.5 12H30V24H18V12Z"
                fill="#B5652D"
              />
            </svg>
            <p className="font-serif-display text-[22px] leading-[1.5] text-brand-cream italic mb-[22px]">
              La caridad es la reina de las virtudes. Como el hilo entrelaza las perlas, así la caridad a las
              otras virtudes.
            </p>
            <div className="h-px bg-brand-cream/20 mb-[18px]" />
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-border">
              Espiritualidad de la comunidad
            </div>
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="px-[72px] pb-[130px]">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-[22px]">
            Quiénes somos
          </div>
          <p className="font-serif-display text-[30px] leading-[1.55] text-brand-blue">
            Nuestra prioridad es el servicio al más necesitado: aquellos a quienes la sociedad les ha negado
            el amor y la dignidad que merecen. En nuestros espacios de servicio se encuentran personas de
            toda condición social, económica y religiosa — porque tanto el servido como el servidor{' '}
            <span className="italic">urgen del amor</span>.
          </p>
        </div>
      </section>

      {/* NUESTRAS OBRAS */}
      <section className="px-[72px] pb-[130px]">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex items-baseline justify-between mb-14 border-b border-brand-border pb-6">
            <h2 className="font-serif-display text-[30px] text-brand-blue font-medium">Nuestras obras</h2>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9A9488]">
              Espiritualidad y servicio
            </span>
          </div>
          <div className="grid grid-cols-3">
            {OBRAS.map((o, i) => (
              <div
                key={o.title}
                className={`px-10 ${i === 0 ? 'pl-0 border-r border-brand-border' : ''} ${
                  i === 1 ? 'border-r border-brand-border' : ''
                } ${i === 2 ? 'pr-0' : ''}`}
              >
                <div className="font-serif-display text-[15px] text-brand-terracotta mb-5">{o.num}</div>
                <h3 className="font-serif-display text-[23px] text-brand-blue font-medium mb-3.5">{o.title}</h3>
                <p className="text-[15px] leading-[1.75] text-brand-ink-muted">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ULTIMAS PUBLICACIONES */}
      <section className="px-[72px] pb-[130px]">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-brand-border pb-6">
            <h2 className="font-serif-display text-[30px] text-brand-blue font-medium">Últimas publicaciones</h2>
            <a
              href="#"
              className="text-xs font-semibold tracking-[0.04em] uppercase border-b-2 border-brand-terracotta pb-1"
            >
              Ver todas
            </a>
          </div>

          <div className="grid grid-cols-[1.3fr_1fr] gap-14">
            <article>
              <div className="h-[360px] mb-6 flex items-center justify-center relative bg-gradient-to-br from-brand-blue-light to-brand-blue">
                <svg width="46" height="46" viewBox="0 0 40 40" fill="none">
                  <path d="M8 30V14L20 6L32 14V30" stroke="#DED4C2" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M8 30H32" stroke="#DED4C2" strokeWidth="1.4" />
                </svg>
                <div className="absolute bottom-3.5 left-4 text-[11px] tracking-[0.08em] uppercase text-brand-cream/50">
                  Imagen ilustrativa
                </div>
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-3">
                Vida comunitaria
              </div>
              <h3 className="font-serif-display text-[27px] text-brand-blue font-medium mb-3.5 leading-[1.3]">
                Asamblea Servidores del Servidor
              </h3>
              <p className="text-[15px] leading-[1.75] text-brand-ink-muted mb-4 max-w-[520px]">
                Con alegría en el Señor, les invitamos a unirnos en fe y oración a la Asamblea General 2025.
              </p>
              <a href="#" className="text-[13px] font-semibold">
                Leer más →
              </a>
            </article>

            <div className="flex flex-col gap-11">
              <article className="grid grid-cols-[140px_1fr] gap-5">
                <div className="h-[104px] bg-gradient-to-br from-[#C4844F] to-brand-terracotta" />
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-2">
                    Espiritualidad
                  </div>
                  <h3 className="font-serif-display text-lg text-brand-blue font-medium mb-2 leading-[1.3]">
                    Día Santo Padre Pío 2024
                  </h3>
                  <a href="#" className="text-[12.5px] font-semibold">
                    Leer más →
                  </a>
                </div>
              </article>
              <div className="h-px bg-brand-border" />
              <article className="grid grid-cols-[140px_1fr] gap-5">
                <div className="h-[104px] bg-gradient-to-br from-[#8A93A6] to-[#5B6478]" />
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-2">
                    Encuentros
                  </div>
                  <h3 className="font-serif-display text-lg text-brand-blue font-medium mb-2 leading-[1.3]">
                    VII Encuentro Torreta
                  </h3>
                  <a href="#" className="text-[12.5px] font-semibold">
                    Leer más →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-[72px] py-[110px] border-t border-b border-brand-border text-center">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-5">Súmate</div>
        <h2 className="font-serif-display text-[38px] text-brand-blue font-medium mb-[34px] max-w-[600px] mx-auto">
          ¿Quieres servir con nosotros?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 px-[30px] py-3.5 border border-brand-blue text-brand-blue font-semibold text-[15px] hover:bg-brand-blue hover:text-brand-cream transition-colors"
        >
          Únete a la comunidad
        </a>
      </section>
    </>
  )
}
