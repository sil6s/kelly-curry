/* global React */

function SectionEyebrow({ children }) {
  return <div className="kbc-eyebrow">{children}</div>;
}

function PillButton({ children, variant = 'rose', onClick, href }) {
  const cls = `kbc-pill kbc-pill-${variant}`;
  if (href) return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}

function Diamond({ size = 80, className = '' }) {
  return (
    <svg className={`kbc-diamond ${className}`} viewBox="0 0 80 80" width={size} height={size} aria-hidden="true">
      <rect x="14" y="14" width="52" height="52" transform="rotate(45 40 40)" fill="none" stroke="#c4a882" strokeWidth="1.2"/>
      <rect x="26" y="26" width="28" height="28" transform="rotate(45 40 40)" fill="none" stroke="#c4a882" strokeWidth="0.7" opacity="0.5"/>
    </svg>
  );
}

window.SectionEyebrow = SectionEyebrow;
window.PillButton = PillButton;
window.Diamond = Diamond;
