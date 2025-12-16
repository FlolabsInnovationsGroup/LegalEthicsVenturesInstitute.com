import Image from "next/image";
import styles from "./WeAre.module.css";

const audience = ["students", "career changers", "international learners", "innovators"];

export default function WeAre() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <div className={styles.lines}>
              <p className={styles.kicker}>We are ...</p>
              <p className={styles.line}>
                <span className="em-accent">Not</span> a law school.
              </p>
              <p className={styles.line}>
                <span className="em-accent">Not</span> a clinic.
              </p>
              <p className={styles.line}>
                <span className="em-accent">Not</span> a bootcamp.
              </p>
            </div>
            <div className={styles.statement}>
              <h2 className="h2">
                But A Legal &amp; Ethics Ventures <span className="em-accent">Institute</span>
              </h2>
              <p className="p">
                where curiosity meets courage, and law, AI, and ethics collide.
              </p>
            </div>
            <div className={styles.divider} />
            <p className={styles.audience}>
              For{" "}
              {audience.map((item, idx) => (
                <span key={item} className="em-accent">
                  {item}
                  {idx < audience.length - 1 ? ", " : ""}
                </span>
              ))}
              - all welcome here.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/Assets/2nd image.png"
              alt="Collaborative learning"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}
