import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { CIUDADES } from '../data/ciudades'
import { API_URL } from '../config'

const CAMPOS_INICIALES = { cedula: '', nombre: '', direccion: '', correo: '', telefono: '', valor: '' }

export default function Donar() {
  const { slug } = useParams()
  const ciudad = CIUDADES[slug]
  const [form, setForm] = useState(CAMPOS_INICIALES)
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  if (!ciudad || !ciudad.cuentaBancaria) {
    return (
      <section className="px-[72px] py-[120px] text-center">
        <h1 className="font-serif-display text-[28px] text-brand-blue font-medium mb-4">
          Aún no tenemos esta opción disponible
        </h1>
        <Link
          to={`/donde-estamos/${slug || ''}`}
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue border-b-2 border-brand-terracotta pb-1"
        >
          ← Volver
        </Link>
      </section>
    )
  }

  const cb = ciudad.cuentaBancaria
  const campo = (key, label, tipo = 'text', requerido = true) => (
    <div>
      <label className="block text-[13px] text-brand-ink-muted mb-1.5">
        {label} {requerido && '*'}
      </label>
      <input
        type={tipo}
        value={form[key]}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        required={requerido}
        className="w-full border border-brand-border px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand-blue"
      />
    </div>
  )

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(`${API_URL}/api/financiero/reportes-donacion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ciudad: ciudad.nombre,
          cedula: form.cedula,
          nombre_donante: form.nombre,
          direccion: form.direccion || null,
          correo: form.correo,
          telefono: form.telefono,
          valor: Number(form.valor),
        }),
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
      <PageBanner title={`Dona en ${ciudad.nombre}`} img={ciudad.banner} />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-5">
              Datos para transferir
            </h2>
            <div className="space-y-2.5 text-[15px] text-brand-ink-muted mb-6">
              <p><span className="font-semibold text-brand-blue">Banco:</span> {cb.banco}</p>
              <p><span className="font-semibold text-brand-blue">Cuenta de {cb.tipo}:</span> {cb.numero}</p>
              <p><span className="font-semibold text-brand-blue">A nombre de:</span> {cb.titular}</p>
              {cb.llaveBreB && (
                <p><span className="font-semibold text-brand-blue">Llave Bre-B:</span> {cb.llaveBreB}</p>
              )}
            </div>
            {cb.qr && <img src={cb.qr} alt="Código QR para donar" className="w-[180px]" />}
          </div>

          <div>
            <h2 className="font-serif-display text-[24px] text-brand-blue font-medium mb-3">
              Cuéntanos tu donación
            </h2>
            <p className="text-[14px] text-brand-ink-muted mb-6">
              Después de transferir, cuéntanos aquí para poderte enviar tu recibo de donación.
            </p>

            {estado === 'ok' ? (
              <div className="p-5 bg-brand-cream border border-brand-border">
                <p className="text-[15px] text-brand-blue font-medium">
                  ¡Gracias por tu donación! En breve te enviaremos tu recibo.
                </p>
              </div>
            ) : (
              <form onSubmit={enviar} className="space-y-4">
                {campo('cedula', 'Cédula')}
                {campo('nombre', 'Nombre completo')}
                {campo('direccion', 'Dirección de residencia', 'text', false)}
                {campo('correo', 'Correo electrónico', 'email')}
                {campo('telefono', 'Teléfono', 'tel')}
                {campo('valor', 'Valor donado', 'number')}

                <button
                  type="submit"
                  disabled={estado === 'enviando'}
                  className="w-full px-[26px] py-3.5 bg-brand-terracotta text-white font-semibold text-[15px] hover:bg-[#9c5525] transition-colors disabled:opacity-60"
                >
                  {estado === 'enviando' ? 'Enviando...' : 'Ya transferí, notificar'}
                </button>
                {estado === 'error' && (
                  <p className="text-[13px] text-red-600">No se pudo enviar, intenta de nuevo.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
