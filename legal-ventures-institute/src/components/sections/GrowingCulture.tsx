import styles from "./GrowingCulture.module.css";

const statements = [
  <>
    <span className="em-accent">Culture</span> isn't just written, it's{" "}
    <span className="em-accent">lived</span>.
  </>,
  <>
    In our team, different perspectives are welcomed, ideas are challenged respectfully, and{" "}
    <span className="em-accent">we learn from each other every day</span>.
  </>,
  <>Every small decision shapes how we show up, listen, and act.</>,
  <>
    One small decision, repeated daily,{" "}
    <span className="em-accent">becomes culture</span>.
  </>,
];

export default function GrowingCulture() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/4th image.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/Assets/4th video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Growing the Culture</h2>
          <div className={styles.stack}>
            {statements.map((statement, idx) => (
              <p key={idx} className={styles.text}>
                {statement}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
