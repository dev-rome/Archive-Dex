export default function Footer() {
  return (
    <footer className="px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm text-muted">built by Jerome Haynes</p>
        <ul className="flex items-center gap-4 font-mono text-sm">
          <li>
            <a
              href="https://github.com/dev-rome/Archive-Dex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-paper"
            >
              source
            </a>
          </li>
          <li>
            <a
              href="https://jeromehaynes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-paper"
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jerome-haynes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-paper"
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
