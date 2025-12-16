import Image from "next/image";
import styles from "./Hero.module.css";

const heroLines = [
  <>Elevating the <span className="em-danger">game.</span></>,
  <>From textbooks to <span className="em-accent">real-world impact.</span></>,
  <>
    No frontiers. <span className="em-danger">No limits.</span>
  </>,
  <>Advance your career. Be at the center of the future.</>,
];

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.media}>
            <div className={styles.imageWrap}>
              <Image
                src="/Assets/1st image.png"
                alt="Legal & Ethics Ventures Institute hero"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Legal & Ethics Ventures Institute logo" width={72} height={72} />
            </div>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Legal &amp; Ethics
                <br />
                Ventures Institute
              </h1>
            </div>
            <div className={styles.lines}>
              {heroLines.map((line, idx) => (
                <p key={idx} className={styles.line}>
                  {line}
                </p>
              ))}
            </div>
            <div className={styles.actions}>
              <a className={styles.primary} href="#apply">
                Apply
              </a>
              <a className={styles.secondary} href="#learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
