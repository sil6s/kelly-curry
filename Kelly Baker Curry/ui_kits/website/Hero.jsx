/* global React, SectionEyebrow, PillButton */

function Hero() {
  return (
    <section className="kbc-hero" id="top">
      <div className="kbc-hero-grid">
        <div className="kbc-hero-text">
          <SectionEyebrow>Talk Therapy in Fort Thomas</SectionEyebrow>
          <h1 className="kbc-h1">
            A practice that <em>heals</em> from the inside out.
          </h1>
          <p className="kbc-hero-body">
            Thoughtful, relational therapy for individuals, couples, and families. In person in Fort Thomas, Kentucky, and virtually across Kentucky and Ohio.
          </p>
          <div className="kbc-hero-cta">
            <PillButton href="#contact">Schedule a Call</PillButton>
            <a href="#approach" className="kbc-link-quiet">Learn about the approach</a>
          </div>
        </div>
        <div className="kbc-hero-photo">
          <svg viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice" className="kbc-photo-svg" aria-hidden="true">
            <defs>
              <linearGradient id="warmA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8bfb3"/>
                <stop offset="100%" stopColor="#a89888"/>
              </linearGradient>
            </defs>
            <rect width="600" height="700" fill="url(#warmA)"/>
            <circle cx="120" cy="180" r="180" fill="#c4a882" opacity="0.18"/>
            <circle cx="480" cy="540" r="220" fill="#c4a882" opacity="0.22"/>
            <rect x="0" y="540" width="600" height="160" fill="#9a8a7a" opacity="0.35"/>
            <g opacity="0.55" fill="#5d4f42">
              <rect x="180" y="380" width="180" height="20" rx="2"/>
              <rect x="180" y="395" width="20" height="160"/>
              <rect x="340" y="395" width="20" height="160"/>
              <rect x="200" y="300" width="140" height="90" rx="6"/>
            </g>
            <g opacity="0.45" fill="#5d4f42">
              <rect x="420" y="430" width="90" height="8"/>
              <rect x="430" y="438" width="6" height="120"/>
              <rect x="494" y="438" width="6" height="120"/>
            </g>
            <g opacity="0.6">
              <path d="M 450 430 C 442 400, 458 380, 466 372 C 462 386, 462 410, 460 430 Z" fill="#7d8c76"/>
              <path d="M 460 430 C 470 405, 488 395, 498 392 C 488 408, 478 422, 472 432 Z" fill="#7d8c76"/>
              <rect x="448" y="428" width="48" height="14" fill="#5d4f42"/>
            </g>
          </svg>
          <div className="kbc-photo-caption">The Fort Thomas office. In person sessions Monday through Thursday.</div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
