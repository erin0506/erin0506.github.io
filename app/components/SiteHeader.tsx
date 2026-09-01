type ActivePage = "about" | "research" | "teaching";

const navigation = [
  { label: "About", href: "/", page: "about" as const },
  { label: "Research", href: "/research/", page: "research" as const },
  { label: "Teaching", href: "/teaching/", page: "teaching" as const },
];

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-name" href="/" aria-label="Sujin Cha, home">
          SUJIN CHA
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              aria-current={active === item.page ? "page" : undefined}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-link"
            href="/assets/Sujin_Cha_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
