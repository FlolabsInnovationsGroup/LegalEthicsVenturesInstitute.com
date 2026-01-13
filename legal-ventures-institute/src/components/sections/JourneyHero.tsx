import Image from "next/image";
import styles from "./JourneyHero.module.css";

const journeyLines = [
  <>
    A visual journey through our <span className="em-accent">legal team evolution</span>. From
    foundational work to future vision.
  </>,
  <>
    A journey of <span className="em-accent">progress</span>,{" "}
    <span className="em-accent">collaboration</span>, and{" "}
    <span className="em-accent">growth</span>.
  </>,
];

export default function JourneyHero() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/6th image.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/Assets/6thvideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.backgroundOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h1 className={styles.title}>
              Legal &amp; Ethics Team
              <br />
              Our Journey Forward
            </h1>
            <div className={styles.copy}>
              {journeyLines.map((line, idx) => (
                <p key={idx} className={styles.line}>
                  {line}
                </p>
              ))}
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
