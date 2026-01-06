import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Internships", href: "https://hephaestus.international/", external: true },
];

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/" className={styles.brand} aria-label="Legal & Ethics Ventures Institute">
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Brand logo" width={32} height={32} />
            </div>
            <span className={styles.brandName}>Legal &amp; Ethics Ventures Institute</span>
          </Link>

          <nav className={styles.links} aria-label="Main navigation">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.contact}>
              <span className={styles.dot} aria-hidden />
              Talk to us
            </Link>
            <a
              href="https://hephaestus.international/"
              className={styles.apply}
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
