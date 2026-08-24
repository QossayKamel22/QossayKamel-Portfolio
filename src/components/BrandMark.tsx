/** The QK monogram used as the favicon, reused inline as the nav brand icon. */
export function BrandMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="brand-mark">
      <defs>
        <linearGradient id="brand-mark-gold" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F3D08A" />
          <stop offset="0.5" stopColor="#C9A15A" />
          <stop offset="1" stopColor="#8E6B32" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="32" r="10.5" fill="none" stroke="url(#brand-mark-gold)" strokeWidth="5" />
      <line x1="29.5" y1="38" x2="35" y2="44" stroke="url(#brand-mark-gold)" strokeWidth="5" strokeLinecap="round" />
      <line x1="42" y1="20" x2="42" y2="44" stroke="url(#brand-mark-gold)" strokeWidth="5" strokeLinecap="round" />
      <line x1="42.5" y1="32.5" x2="50.5" y2="20.5" stroke="url(#brand-mark-gold)" strokeWidth="5" strokeLinecap="round" />
      <line x1="42.5" y1="32.5" x2="50.5" y2="44" stroke="url(#brand-mark-gold)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
