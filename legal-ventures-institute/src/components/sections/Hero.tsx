import styles from "./Hero.module.css";

const heroLines = [
  <h2 className="text-2xl">Advance your career. Be at the center of the future.<h2/>,
  <>Elevating the <span className="em-danger">game.</span></>,
  <>From textbooks to <span className="em-accent">real-world impact.</span></>,
  <>
    No frontiers. <span className="em-danger">No limits.</span>
  </>,
];

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/1st image.jpg"
        >
          <source src="/Assets/1stvideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.imageOverlay} />
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.panel}>
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
              <a
                className={styles.primary}
                href="https://hephaestus.international/internships/ethical-legal-research-intern"
                target="_blank"
                rel="noreferrer"
              >
                Apply
              </a>
              <a className={styles.secondary} href="/learn-more">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
