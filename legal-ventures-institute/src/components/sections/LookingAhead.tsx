import styles from "./LookingAhead.module.css";

const items = [
  {
    title: "Regulatory Shifts",
    detail: "New governance and compliance questions as frameworks evolve",
  },
  {
    title: "Product-Driven Challenges",
    detail: "Legal and ethical questions emerging from new tools and features",
  },
  {
    title: "Growth & Funding Triggers",
    detail: "Strategic needs arising from expansion, partnerships, or investment",
  },
  {
    title: "Ethics in Innovation",
    detail: "Uncharted questions at the intersection of technology, users, and responsibility",
  },
];

export default function LookingAhead() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/12th image.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/Assets/12th video.mp4" type="video/mp4" />
        </video>
        <div className={styles.backgroundOverlay} />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>Looking Ahead...</h2>
            <ul className={styles.list}>
              {items.map((item) => (
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
