function Footer() {
  return (
    <footer className="page-footer blue darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/MaxYashch/searchfilms_app"
              target="_blank"
              rel="noreferrer"
              className="repo"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
