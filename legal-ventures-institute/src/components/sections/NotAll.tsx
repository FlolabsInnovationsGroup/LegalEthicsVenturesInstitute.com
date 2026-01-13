import Image from "next/image";
import styles from "./NotAll.module.css";

const initiatives = [
  {
    title: "Space Forum - Nikkei Forum",
    summary:
      "Attended expert discussions on space industry topics, partnerships, and regulatory frameworks.",
    notes: [
      "Comprehensive briefing delivered to company leadership, ensuring we stay informed on space law developments.",
    ],
  },
  {
    title: "Cybersecurity Tokyo Initiative 2025 - Nikkei Forum",
    summary:
      "Attended expert talks on cybersecurity trends, emerging threats, and strategic recommendations.",
    notes: [
      "Actionable insights shared across teams, keeping the company aligned with cutting-edge security practices.",
    ],
  },
];

export default function NotAll() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/Assets/10th image.png"
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
            <h2 className={styles.title}>But That's Not All</h2>
            <p className={styles.lead}>
              We take initiative, stay informed and ensure we{" "}
              <span className="em-accent">remain at the forefront</span> of legal and technological
              developments.
            </p>
            <p className={styles.lead}>
              We act as a <span className="em-accent">catalyst</span> by supporting{" "}
              <span className="em-accent">cross-collaboration</span>, connecting insights across
              teams, and ensuring external developments translate into internal value.
            </p>
            <h3 className={styles.subhead}>Recent Initiatives</h3>
            <div className={styles.initiatives}>
              {initiatives.map((item) => (
                <div key={item.title} className={styles.initiative}>
                  <p className={styles.initiativeTitle}>
                    <span className="em-accent">{item.title}:</span> {item.summary}
                  </p>
                  <ul className={styles.notes}>
                    {item.notes.map((note) => (
                      <li key={note} className={styles.note}>
                        <span className={styles.arrow} aria-hidden="true">
                          -&gt;
                        </span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
