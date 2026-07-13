/*
  Slow, living molten light source for the hero. Two heavily-blurred
  conic-gradient discs counter-rotating - reads as flowing heat, not a gimmick.
  Under prefers-reduced-motion the global CSS block halts the rotation, leaving
  a static warm glow.
*/
export default function MoltenOrb({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div
        className="absolute inset-0 rounded-full blur-[90px] animate-spin-slow"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(34,211,238,0) 0%, rgba(103,232,249,0.38) 22%, rgba(34,211,238,0.16) 45%, rgba(14,116,144,0.30) 68%, rgba(34,211,238,0) 100%)',
        }}
      />
      <div
        className="absolute inset-[14%] rounded-full blur-[70px]"
        style={{
          animation: 'spin-slow 64s linear infinite reverse',
          background:
            'conic-gradient(from 160deg, rgba(56,189,248,0) 0%, rgba(34,211,238,0.30) 30%, rgba(103,232,249,0.20) 55%, rgba(56,189,248,0) 100%)',
        }}
      />
    </div>
  )
}
