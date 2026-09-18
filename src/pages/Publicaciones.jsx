import { useState, useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import { API_URL } from '../config'

export default function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/publicaciones`)
      .then((r) => r.json())
      .then((data) => setPublicaciones(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setCargando(false))
  }, [])

  return (
    <>
      <PageBanner title="Publicaciones" />

      <section className="px-[72px] py-[70px]">
        <div className="max-w-[1296px] mx-auto">
          {cargando ? (
            <p className="text-center text-brand-ink-muted">Cargando...</p>
          ) : publicaciones.length === 0 ? (
            <p className="text-center text-brand-ink-muted">Aún no hay publicaciones.</p>
          ) : (
            <div className="grid grid-cols-3 gap-10">
              {publicaciones.map((post) => (
                <article key={post.id}>
                  {post.imagen_url && (
                    <div className="h-[220px] mb-5 overflow-hidden">
                      <img src={post.imagen_url} alt={post.titulo} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="font-serif-display text-[20px] text-brand-blue font-medium mb-3 leading-[1.3]">
                    {post.titulo}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-brand-ink-muted mb-2">{post.extracto}</p>
                  <p className="text-[12px] text-brand-ink-muted/70 mb-2">
                    {new Date(post.created_at).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  {post.enlace && (
                    <a href={post.enlace} className="text-[13px] font-semibold">
                      Leer más →
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
