import styles from "./KeyMilestones.module.css";

const milestones = [
  {
    title: "Legal & Ethics Ventures Institute",
    detail:
      "Prepared foundational content and materials supporting the Institute's mission and future initiatives.",
  },
  {
    title: "Corporate Structure",
    detail:
      "Research into flexible corporate structures, including Series LLC frameworks, to support future growth and strategic needs.",
  },
  {
    title: "Funding Landscape Exploration",
    detail:
      "Conducted initial research into potential U.S. & EU funding opportunities and explored early partnership prospects.",
  },
  {
    title: "Internal Documentation Review",
    detail:
      "Conducted structured document review to identify clarity and consistency improvements.",
  },
];

export default function KeyMilestones() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/9th image.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/Assets/9th video.mp4" type="video/mp4" />
        </video>
        <div className={styles.backgroundOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>Key Milestones Achieved</h2>
            <ul className={styles.list}>
              {milestones.map((item) => (
                <li key={item.title} className={styles.item}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemDetail}>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
