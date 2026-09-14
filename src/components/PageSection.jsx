export default function PageSection({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`px-[72px] py-[70px] ${className}`}>
      <div className="max-w-[900px] mx-auto">
        {eyebrow && (
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-terracotta mb-4">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="font-serif-display text-[28px] text-brand-blue font-medium mb-6">{title}</h2>
        )}
        <div className="text-[16px] leading-[1.8] text-brand-ink-muted space-y-5">{children}</div>
      </div>
    </section>
  )
}
