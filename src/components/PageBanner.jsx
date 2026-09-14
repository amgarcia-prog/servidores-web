export default function PageBanner({ title, img }) {
  return (
    <section className="relative h-[220px] flex items-center justify-center overflow-hidden bg-brand-blue">
      {img && (
        <>
          <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-brand-blue/70" />
        </>
      )}
      <h1 className="relative font-serif-display text-[38px] text-white font-medium tracking-tight">{title}</h1>
    </section>
  )
}
