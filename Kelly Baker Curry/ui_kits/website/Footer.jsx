/* global React */

function Footer() {
  return (
    <footer className="kbc-footer">
      <div className="kbc-footer-grid">
        <div className="kbc-footer-brand">
          <svg viewBox="0 0 36 32" width="32" height="32" aria-hidden="true">
            <path d="M 18 4 C 8 6, 2 18, 4 30 C 14 30, 26 22, 28 10 C 28 8, 24 4, 18 4 Z" fill="#7d8c76"/>
            <path d="M 6 28 C 10 22, 16 16, 24 12" stroke="#28241f" strokeWidth="0.8" fill="none" opacity="0.6"/>
          </svg>
          <div className="kbc-footer-wordmark">Kelly Baker Curry</div>
          <div className="kbc-footer-descriptor">LCSW · Talk Therapy</div>
        </div>
        <div className="kbc-footer-col">
          <div className="kbc-footer-col-head">Practice</div>
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#fees">Fees & Insurance</a>
          <a href="#office">Office</a>
        </div>
        <div className="kbc-footer-col">
          <div className="kbc-footer-col-head">Visit</div>
          <p>142 N Fort Thomas Ave<br/>Fort Thomas, KY 41075</p>
          <p>Mon to Thu, 9am to 6pm</p>
        </div>
        <div className="kbc-footer-col">
          <div className="kbc-footer-col-head">Contact</div>
          <p>hello@kellybakercurry.com</p>
          <p>(859) 555 0102</p>
        </div>
      </div>
      <div className="kbc-footer-base">
        <div>© 2025 Kelly Baker Curry, LCSW</div>
        <div>Licensed in Kentucky and Ohio</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
