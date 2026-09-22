import { useState, useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import { API_URL } from '../config'

export default function BibliotecaLectio() {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/lectio-servicio`)
      .then((r) => r.json())
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setCargando(false))
  }, [])

  return (
    <>
      <PageBanner title="Lectio del Servicio" />
      <section className="px-6 lg:px-[72px] py-10 lg:py-[70px]">
        <div className="max-w-[900px] mx-auto">
          {cargando ? (
            <p className="text-center text-brand-ink-muted">Cargando...</p>
          ) : items.length === 0 ? (
            <p className="text-center text-brand-ink-muted">Aún no hay Lectios publicadas.</p>
          ) : (
            <div className="divide-y divide-brand-border border-t border-b border-brand-border">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.archivo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-5 gap-6 group"
                >
                  <span className="font-serif-display text-[19px] text-brand-blue group-hover:text-brand-terracotta transition-colors">
                    {item.titulo}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-brand-blue group-hover:text-brand-terracotta transition-colors">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
