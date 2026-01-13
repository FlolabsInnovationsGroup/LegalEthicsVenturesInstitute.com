/* Navigation with theme toggle. */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

type ThemeMode = "dark" | "light";

const THEME_STORAGE_KEY = "levi-theme";

const applyTheme = (theme: ThemeMode) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
};

const links = [
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
  { label: "Internships", href: "https://hephaestus.international/", external: true },
];

export default function Nav() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const label = theme === "dark" ? "Dark" : "Light";

  useEffect(() => {
    const initial = getStoredTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const handleThemeToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  };

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
            <button
              type="button"
              className={styles.themeToggle}
              onClick={handleThemeToggle}
              aria-pressed={theme === "dark"}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className={styles.themeIcon} aria-hidden="true">
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                )}
              </span>
              <span className={styles.themeLabel}>{label}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
