import Image from "next/image";
import styles from "./JoinJourney.module.css";

const copyLines = [
  "Every challenge is an opportunity to learn, innovate, and push boundaries.",
  "Here, legal rigor meets ethical responsibility. Curiosity meets initiative. Ideas meet execution.",
];

export default function JoinJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/Assets/13th image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>Join Us on This Journey</h2>
            <p className={styles.subhead}>Take action. Make impact. Lead responsibly.</p>
            <div className={styles.stack}>
              {copyLines.map((line) => (
                <p key={line} className={styles.text}>
                  {line}
                </p>
              ))}
            </div>
            <p className={styles.highlight}>
              <span className="em-accent">Together</span>, we don't just react to change...
            </p>
            <p className={styles.highlight}>We drive it.</p>
            <div className={styles.footer}>
              <p className={styles.footerLine}>
                Here, at Legal &amp; Ethics Ventures Institute
              </p>
              <p className={styles.footerLine}>
                <span className="em-danger">Advance your career.</span> Be at the center of the
                future.
              </p>
            </div>
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Legal & Ethics Ventures Institute logo"
                width={42}
                height={42}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
