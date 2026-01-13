import Image from "next/image";
import styles from "./PathForward.module.css";

export default function PathForward() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/Assets/11th image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.backgroundOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>The Path Forward</h2>
            <p className={styles.lead}>
              We're moving forward with <span className="em-accent">purpose</span>: from what we've
              built to what we are creating next.
            </p>
            <p className={styles.lead}>
              As we progress is about <span className="em-accent">growth</span>,{" "}
              <span className="em-accent">collaboration</span>, and turning challenges into
              opportunities... <span className="em-accent">Shaping the future responsibly</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
