import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { API_URL } from '../config'

const BIBLIOTECA = 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/Biblioteca/oraciones'

const ORACIONES_TEXTO = [
  { titulo: 'Oración al levantarse', href: `${BIBLIOTECA}/Oracion-Levantarse.pdf` },
  { titulo: 'Oración de Intercesión', href: `${BIBLIOTECA}/Oracion-Intercesion.pdf` },
  { titulo: 'Cinco Visitas', href: `${BIBLIOTECA}/Cinco-Visitas.pdf` },
  { titulo: 'Oración de la mañana', href: `${BIBLIOTECA}/Oracion-Manana.pdf` },
  { titulo: 'Oración de la noche', href: `${BIBLIOTECA}/Oracion-Noche.png` },
  { titulo: 'Oración al acostarse', href: `${BIBLIOTECA}/Oracion-Acostarse.png` },
  { titulo: 'Oración para iniciar el servicio', href: `${BIBLIOTECA}/Oracion-Iniciar-Servicio.png` },
  { titulo: 'Oración para terminar el servicio', href: `${BIBLIOTECA}/Oracion-Terminar-Servicio.png` },
  { titulo: 'Oración al Espíritu Santo', href: `${BIBLIOTECA}/Oracion-Espiritu-Santo.pdf` },
  { titulo: 'Oración de sellamiento', href: `${BIBLIOTECA}/Oracion-Sellamiento.png` },
]

const ORACIONES_AUDIO = [
  { titulo: 'Oración de la mañana - Audio', href: `${BIBLIOTECA}/Oracion-Manana-Audio.mp3` },
  { titulo: 'Oración de la noche - Audio', href: `${BIBLIOTECA}/Oracion-Noche-Audio.mp3` },
]

const NOVENA_PADRE_PIO = [
  { titulo: 'Día Primero', href: `${BIBLIOTECA}/Novena-PadrePio-Dia1.pdf` },
  { titulo: 'Día Segundo', href: `${BIBLIOTECA}/Novena-PadrePio-Dia2.pdf` },
  { titulo: 'Día Tercero', href: `${BIBLIOTECA}/Novena-PadrePio-Dia3.pdf` },
  { titulo: 'Día Cuarto', href: `${BIBLIOTECA}/Novena-PadrePio-Dia4.pdf` },
  { titulo: 'Día Quinto', href: `${BIBLIOTECA}/Novena-PadrePio-Dia5.pdf` },
  { titulo: 'Día Sexto', href: `${BIBLIOTECA}/Novena-PadrePio-Dia6.pdf` },
  { titulo: 'Día Séptimo', href: `${BIBLIOTECA}/Novena-PadrePio-Dia7.pdf` },
  { titulo: 'Día Octavo', href: `${BIBLIOTECA}/Novena-PadrePio-Dia8.pdf` },
  { titulo: 'Día Noveno', href: `${BIBLIOTECA}/Novena-PadrePio-Dia9.pdf` },
]

const NOVENA_MARIA = {
  titulo: 'Novena María Madre de los Servidores',
  href: `${BIBLIOTECA}/Novena-Maria-Madre-Servidores.pdf`,
}

const PROTOCOLOS = [
  { titulo: 'Protocolo Santo Rosario de la Comunidad', href: `${BIBLIOTECA}/Protocolo-Santo-Rosario.pdf` },
  { titulo: 'Protocolo de Vigilias', href: `${BIBLIOTECA}/Protocolo-Vigilias.pdf` },
  { titulo: 'Protocolo de Retiros Espirituales', href: `${BIBLIOTECA}/Protocolo-Retiros-Espirituales.pdf` },
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
      <section className="px-6 lg:px-[72px] py-10 lg:py-[70px]">
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
