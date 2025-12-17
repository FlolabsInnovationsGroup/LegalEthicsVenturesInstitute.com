import Image from "next/image";
import styles from "./BuildAfter.module.css";

export default function BuildAfter() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/Assets/4th image.jpg"
          alt="Students collaborating"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.panel}>
            <p className={styles.subtitle}>We don&apos;t train you to pass the bar.</p>
            <h2 className={styles.headline}>
              We train you to <span className="em-accent">build what comes after it.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
