import styles from '../styles/Website.module.css';

export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`${styles['kbc-logo-mark']} ${className}`}
      viewBox="0 0 116 116"
      aria-hidden="true"
    >
      <rect width="116" height="116" fill="#f5eeee" />
      <rect
        x="0.5"
        y="0.5"
        width="115"
        height="115"
        fill="none"
        stroke="#c4a882"
      />
      <text
        x="58"
        y="73"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="47"
        fontWeight="400"
        letterSpacing="-2"
        fill="#2e2b26"
      >
        KBT
      </text>
    </svg>
  );
}
