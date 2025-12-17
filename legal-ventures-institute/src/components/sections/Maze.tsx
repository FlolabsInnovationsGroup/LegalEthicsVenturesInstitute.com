import Image from "next/image";
import styles from "./Maze.module.css";

export default function Maze() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.imageWrap}>
            <Image
              src="/Assets/3rd image.jpg"
              alt="Maze representing legal world"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.panel}>
            <p className={styles.kicker}>Where the legal world is a maze...</p>
            <h3 className={styles.headline}>
              Breaking in shouldn&apos;t be harder than <span className="em-accent">learning...</span>
            </h3>
            <p className={styles.line}>
              Doors are <span className="em-accent">closed</span>. Opportunities are <span className="em-accent">rare</span>.
              Real practice? <span className="em-accent">For the few...</span>
            </p>
            <p className={styles.boldLine}>
              We&apos;re here to <span className="em-accent">widen the doors</span>, ignite{" "}
              <span className="em-accent">hands-on experience</span>, and make it real ... All for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
