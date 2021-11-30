function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="page-footer__layout">
          <div className="page-footer__copyright">
            © {new Date().getFullYear()} Copyright Text
          </div>
          <nav className="page-footer__nav footer-nav">
            <a
              href="https://github.com/MaxYashch/searchfilms_app"
              target="_blank"
              rel="noreferrer"
              className="footer-nav__link"
            >
              Repo
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
