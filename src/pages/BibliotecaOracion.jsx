import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { API_URL } from '../config'

const ORACIONES_TEXTO = [
  { titulo: 'Oración al levantarse', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-al-levantarse.pdf' },
  { titulo: 'Oración de Intercesión', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-de-Intercesio%CC%81n.pdf' },
  { titulo: 'Cinco Visitas', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Las-cinco-Visitas.pdf' },
  { titulo: 'Oración de la mañana', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/Oracio%CC%81n-de-la-man%CC%83ana.pdf' },
  { titulo: 'Oración de la noche', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionNoche.png' },
  { titulo: 'Oración al acostarse', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionAcostarse.png' },
  { titulo: 'Oración para iniciar el servicio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionIniciar.png' },
  { titulo: 'Oración para terminar el servicio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionTerminar.png' },
  { titulo: 'Oración al Espíritu Santo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2021/08/OracionEspirituSanto2.pdf' },
  { titulo: 'Oración de sellamiento', href: 'https://servidoresdelservidor.org/wp-content/uploads/2019/06/OracionSellamiento.png' },
]

const ORACIONES_AUDIO = [
  { titulo: 'Oración de la mañana - Audio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2020/07/ORACION-DE-LA-MAN%CC%83ANA.mp3' },
  { titulo: 'Oración de la noche - Audio', href: 'https://servidoresdelservidor.org/wp-content/uploads/2020/07/ORACION-DE-LA-NOCHE.mp3' },
]

const NOVENA_PADRE_PIO = [
  { titulo: 'Día Primero', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Introduccion-y-Dia-uno.pdf' },
  { titulo: 'Día Segundo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Nevena-PP-Dia-Dos.pdf' },
  { titulo: 'Día Tercero', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Tres.pdf' },
  { titulo: 'Día Cuarto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Cuatro.pdf' },
  { titulo: 'Día Quinto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Quinto.pdf' },
  { titulo: 'Día Sexto', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Sexto.pdf' },
  { titulo: 'Día Séptimo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Septimo.pdf' },
  { titulo: 'Día Octavo', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Ocavo.pdf' },
  { titulo: 'Día Noveno', href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-PP-Dia-Noveno.pdf' },
]

const NOVENA_MARIA = {
  titulo: 'Novena María Madre de los Servidores',
  href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Novena-a-Maria-Madre-de-los-Servidores-Agosto-6-2025-1.pdf',
}

const PROTOCOLOS = [
  {
    titulo: 'Protocolo Santo Rosario de la Comunidad',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-Santo-Rosario-Servidores_V1.3.pdf',
  },
  {
    titulo: 'Protocolo de Vigilias',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-de-Vigilia-para-los-Servidores-del-Servidor.pdf',
  },
  {
    titulo: 'Protocolo de Retiros Espirituales',
    href: 'https://servidoresdelservidor.org/wp-content/uploads/2025/10/Protocolo-de-un-retiro-Espritual-SDS.pdf',
  },
]

function Chevron({ abierto }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`flex-shrink-0 transition-transform ${abierto ? 'rotate-180' : ''}`}>
      <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Enlace({ titulo, href, className = '' }) {
  const interno = href.startsWith('/')
  const Tag = interno ? Link : 'a'
  const tagProps = interno ? { to: href } : { href, target: '_blank', rel: 'noreferrer' }
  return (
    <Tag {...tagProps} className={`flex items-center justify-between px-5 py-5 gap-6 group ${className}`}>
      <span className="font-serif-display text-[18px] text-brand-blue group-hover:text-brand-terracotta transition-colors">
        {titulo}
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-brand-blue group-hover:text-brand-terracotta transition-colors">
        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Tag>
  )
}

function Categoria({ titulo, abierto, onToggle, children }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between font-serif-display text-[19px] text-white font-medium px-5 py-3 bg-brand-blue"
      >
        {titulo}
        <Chevron abierto={abierto} />
      </button>
      {abierto && <div className="border-b border-x border-brand-border">{children}</div>}
    </div>
  )
}

export default function BibliotecaOracion() {
  const [abierto, setAbierto] = useState(null)
  const [abiertoPadrePio, setAbiertoPadrePio] = useState(false)
  const [lectios, setLectios] = useState([])
  const [cargandoLectio, setCargandoLectio] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/lectio-servicio`)
      .then((r) => r.json())
      .then((data) => setLectios(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setCargandoLectio(false))
  }, [])

  const toggle = (id) => setAbierto(abierto === id ? null : id)

  return (
    <>
      <PageBanner title="Oración" />
      <section className="px-[72px] py-[70px]">
        <div className="max-w-[900px] mx-auto space-y-4">
          <Categoria titulo="Oraciones diarias - Texto" abierto={abierto === 'texto'} onToggle={() => toggle('texto')}>
            <div className="divide-y divide-brand-border">
              {ORACIONES_TEXTO.map((r) => <Enlace key={r.titulo} {...r} />)}
            </div>
          </Categoria>

          <Categoria titulo="Oraciones diarias - Audio" abierto={abierto === 'audio'} onToggle={() => toggle('audio')}>
            <div className="divide-y divide-brand-border">
              {ORACIONES_AUDIO.map((r) => <Enlace key={r.titulo} {...r} />)}
            </div>
          </Categoria>

          <Categoria titulo="Lectio del Servicio" abierto={abierto === 'lectio'} onToggle={() => toggle('lectio')}>
            <div className="divide-y divide-brand-border">
              {cargandoLectio ? (
                <p className="px-5 py-5 text-brand-ink-muted">Cargando...</p>
              ) : lectios.length === 0 ? (
                <p className="px-5 py-5 text-brand-ink-muted">Aún no hay Lectios publicadas.</p>
              ) : (
                lectios.map((l) => <Enlace key={l.id} titulo={l.titulo} href={l.archivo_url} />)
              )}
            </div>
          </Categoria>

          <Categoria titulo="Novenas" abierto={abierto === 'novenas'} onToggle={() => toggle('novenas')}>
            <div>
              <button
                onClick={() => setAbiertoPadrePio((v) => !v)}
                className="w-full flex items-center justify-between font-serif-display text-[18px] text-brand-blue font-medium px-5 py-5 border-b border-brand-border"
              >
                Novena de Padre Pío
                <Chevron abierto={abiertoPadrePio} />
              </button>
              {abiertoPadrePio && (
                <div className="divide-y divide-brand-border bg-brand-cream">
                  {NOVENA_PADRE_PIO.map((r) => <Enlace key={r.titulo} {...r} className="pl-9" />)}
                </div>
              )}
              <Enlace {...NOVENA_MARIA} className="border-b border-brand-border last:border-b-0" />
            </div>
          </Categoria>

          <Categoria titulo="Protocolos" abierto={abierto === 'protocolos'} onToggle={() => toggle('protocolos')}>
            <div className="divide-y divide-brand-border">
              {PROTOCOLOS.map((r) => <Enlace key={r.titulo} {...r} />)}
            </div>
          </Categoria>
        </div>
      </section>
    </>
  )
}
