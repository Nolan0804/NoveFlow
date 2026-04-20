export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__section navbar__section--brand">
        <a href="#" className="navbar__brand">
            <img src="" alt="Logo NoveFlow" />
        </a>
      </div>

      <div className="navbar__section navbar__section--nav">
        <nav className="navbar__nav">
          <a href="#fonctionnalites" className="navbar__link">
            Fonctionnalites
          </a>
          <a href="#prix" className="navbar__link">
            Prix
          </a>
          <a href="#contact" className="navbar__link">
            Nous contacter
          </a>
        </nav>
      </div>

      <div className="navbar__section navbar__section--cta">
        <a href="#prix" className="navbar__cta">
          Essaie gratuit
        </a>
      </div>
    </header>
  );
}
