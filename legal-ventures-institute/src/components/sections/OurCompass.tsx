import styles from "./OurCompass.module.css";

const focusAreas = [
  {
    title: "Supporting Responsible Innovation",
    detail: "by championing ethical, transparent, and responsible work.",
  },
  {
    title: "Ensuring Clarity & Consistency",
    detail: "by turning complex topics into simple, understandable guidance.",
  },
  {
    title: "Collaborating Across Teams",
    detail: "",
  },
  {
    title: "Approaching Every Task Thoughtfully",
    detail: "by bringing curiosity, precision, and care to everything we do.",
  },
];

export default function OurCompass() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/8th image.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/Assets/8thvideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.backgroundOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>Our Compass</h2>
            <p className={styles.lead}>
              We believe thoughtful legal guidance{" "}
              <span className="em-accent">empowers innovation</span>, laying the groundwork for{" "}
              <span className="em-accent">sustainable growth</span> and{" "}
              <span className="em-accent">responsible technology</span>.
            </p>
            <p className={styles.label}>We focus on:</p>
            <ul className={styles.list}>
              {focusAreas.map((item) => (
                <li key={item.title} className={styles.item}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  {item.detail && <span className={styles.itemDetail}> {item.detail}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
