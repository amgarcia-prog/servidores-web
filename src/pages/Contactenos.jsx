import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { API_URL } from '../config'

const COLABORAR = [
  'Conocer la obra por medio de un servidor que te muestre, te acompañe y te integre a la comunidad.',
  'Disponer tu corazón para aprender a servir de acuerdo a tu carisma y a tu vocación de servicio.',
  'Disponer y destinar de un tiempo de tu quehacer semanal para realizar tu servicio a los hermanos necesitados. (Mínimo dos horas a la semana, el día que prefieras)',
  'Integrarte decididamente a servir en uno de los puntos de servicio a los hermanos necesitados.',
  'Acompañar con tu oración constante todo aquello que harás de hoy en adelante.',
]

const PERTENECER = [
  ['Servidor laborioso', 'que colabora con su trabajo en las obras de caridad a los miseritos.'],
  ['Servidor mensajero', 'que da a conocer la obra y consigue nuevos servidores.'],
  ['Servidor orante', 'que reza diariamente por la fecundidad de las obras de la comunidad.'],
  ['Servidor predicador', 'que enseña y da a conocer la palabra de Dios y el magisterio de la Santa Madre Iglesia.'],
  ['Servidor providente', 'que aporta recursos mensualmente, ya sea en dinero o en especie para financiar los servicios de ayuda al miserito.'],
  ['Hermano paciente', 'miembro consagrado en la comunidad y comprometido con todas las actividades de la comunidad.'],
]

const CAMPOS_INICIALES = { nombre: '', email: '', asunto: '', mensaje: '' }

export default function Contactenos() {
  const [form, setForm] = useState(CAMPOS_INICIALES)
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(`${API_URL}/api/contacto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).then((r) => r.json())
      if (res.ok) {
        setEstado('ok')
        setForm(CAMPOS_INICIALES)
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <>
      <PageBanner title="Contáctenos" img="/images/contacto-banner.jpg" />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[1.2fr_0.8fr] gap-14 items-center mb-16">
          <div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-6">
              ¿Cómo colaborar o participar de este apostolado?
            </h2>
            <ul className="space-y-3">
              {COLABORAR.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] leading-[1.8] text-brand-ink-muted">
                  <span className="text-brand-terracotta mt-1.5 flex-shrink-0">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src="/images/contacto-colaborar.jpeg" alt="" className="w-full object-cover" />
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-14 items-center mb-16">
          <img src="/images/contacto-pertenecer.jpg" alt="" className="w-full object-cover" />
          <div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-6">¿Cómo pertenecer?</h2>
            <p className="text-[15px] leading-[1.8] text-brand-ink-muted mb-6">
              Se puede pertenecer, ser miembro y servir en esta santa comunidad de la siguiente manera:
            </p>
            <div className="grid grid-cols-1 gap-4">
              {PERTENECER.map(([titulo, desc]) => (
                <div key={titulo} className="p-4 bg-white border border-brand-border">
                  <p className="font-serif-display text-[16px] text-brand-blue font-medium mb-1">{titulo}</p>
                  <p className="text-[14px] leading-[1.6] text-brand-ink-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="p-6 bg-brand-cream border border-brand-border mb-16 text-center">
            <p className="text-[15px] text-brand-ink-muted">
              Si buscas el contacto de una ciudad en particular, entra a{' '}
              <Link to="/donde-estamos" className="text-brand-blue font-semibold hover:text-brand-terracotta transition-colors">
                Dónde Estamos
              </Link>{' '}
              — ahí encuentras los datos de contacto de cada ciudad.
            </p>
          </div>

          <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-6">Envíanos un mensaje</h2>

          {estado === 'ok' ? (
            <div className="p-5 bg-brand-cream border border-brand-border">
              <p className="text-[15px] text-brand-blue font-medium">
                ¡Gracias por escribirnos! Pronto te responderemos.
              </p>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-brand-ink-muted mb-1.5">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="w-full border border-brand-border px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-brand-ink-muted mb-1.5">Correo electrónico *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border border-brand-border px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] text-brand-ink-muted mb-1.5">Asunto</label>
                <input
                  type="text"
                  value={form.asunto}
                  onChange={(e) => setForm((f) => ({ ...f, asunto: e.target.value }))}
                  className="w-full border border-brand-border px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-blue"
                />
              </div>
              <div>
                <label className="block text-[13px] text-brand-ink-muted mb-1.5">Mensaje *</label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                  className="w-full border border-brand-border px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-blue"
                />
              </div>
              <button
                type="submit"
                disabled={estado === 'enviando'}
                className="px-[30px] py-3.5 bg-brand-terracotta text-white font-semibold text-[15px] hover:bg-[#9c5525] transition-colors disabled:opacity-60"
              >
                {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              {estado === 'error' && (
                <p className="text-[13px] text-red-600">No se pudo enviar, intenta de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
