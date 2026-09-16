import { useCallback, useEffect, useRef, useState } from 'react'
import { API_URL } from '../config'

export default function SelectorComprobante({ url, onChange, onError }) {
  const [subiendo, setSubiendo] = useState(false)
  const [modoCamara, setModoCamara] = useState(false)
  const inputFileRef = useRef(null)
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  const subir = async (archivo) => {
    if (!archivo) return
    setSubiendo(true)
    const fd = new FormData()
    fd.append('archivo', archivo)
    fd.append('bucket', 'Comprobantes')
    fd.append('carpeta', 'donaciones-web')
    const res = await fetch(`${API_URL}/api/upload`, { method: 'POST', body: fd })
      .then((r) => r.json())
      .catch(() => ({ ok: false }))
    if (res.ok) onChange(res.url)
    else onError('No se pudo subir el comprobante, intenta de nuevo.')
    setSubiendo(false)
  }

  const onPaste = useCallback((e) => {
    const items = e.clipboardData?.items
    if (!items) return
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault()
        subir(item.getAsFile())
        return
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('paste', onPaste)
    return () => document.removeEventListener('paste', onPaste)
  }, [onPaste])

  const abrirCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      streamRef.current = stream
      setModoCamara(true)
      setTimeout(() => {
        if (videoRef.current) videoRef.current.srcObject = stream
      }, 100)
    } catch {
      onError('No se pudo acceder a la cámara. Verifica los permisos del navegador.')
    }
  }

  const cerrarCamara = () => {
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop())
    setModoCamara(false)
  }

  const tomarFoto = () => {
    if (!videoRef.current) return
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0)
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop())
    setModoCamara(false)
    canvas.toBlob(async (blob) => {
      await subir(new File([blob], 'comprobante.jpg', { type: 'image/jpeg' }))
    }, 'image/jpeg', 0.9)
  }

  if (url) {
    return (
      <div className="flex items-center gap-3 p-2.5 bg-brand-cream border border-brand-border">
        <span className="text-[13px] text-brand-blue">✓ Comprobante adjunto</span>
        <a href={url} target="_blank" rel="noreferrer" className="text-[12px] font-semibold underline">Ver</a>
        <button type="button" onClick={() => onChange('')} className="text-[12px] text-brand-terracotta ml-auto">Quitar</button>
      </div>
    )
  }

  if (modoCamara) {
    return (
      <div className="border border-brand-border overflow-hidden">
        <video ref={videoRef} autoPlay playsInline className="w-full" />
        <div className="flex gap-2 p-2 bg-brand-cream">
          <button type="button" onClick={tomarFoto} className="flex-1 bg-brand-blue text-white py-2 text-[13px] font-semibold">
            Tomar foto
          </button>
          <button type="button" onClick={cerrarCamara} className="px-4 py-2 border border-brand-border text-[13px] text-brand-ink-muted">
            Cancelar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border-2 border-dashed border-brand-border p-3">
      {subiendo ? (
        <p className="text-[13px] text-brand-ink-muted text-center py-1">Subiendo...</p>
      ) : (
        <>
          <p className="text-[13px] text-brand-ink-muted text-center mb-2">Adjuntar comprobante de la transferencia *</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <button type="button" onClick={() => inputFileRef.current?.click()} className="text-[13px] bg-brand-cream hover:bg-brand-border text-brand-ink px-3 py-1.5">
              Archivo / Galería
            </button>
            <button type="button" onClick={abrirCamara} className="text-[13px] bg-brand-cream hover:bg-brand-border text-brand-ink px-3 py-1.5">
              Cámara
            </button>
          </div>
          <p className="text-[12px] text-brand-ink-muted text-center mt-2">
            También puedes pegar una imagen copiada (Ctrl+V)
          </p>
          <input
            ref={inputFileRef}
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={(e) => subir(e.target.files[0])}
          />
        </>
      )}
    </div>
  )
}
