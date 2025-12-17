import styles from "./Offerings.module.css";

const offerings = [
  "Hands-on client work",
  "AI tools for the modern legal world",
  "Legal drafting, research, and strategy",
  "Startup building experience",
  "Ethics & compliance training",
  "Immediate impact on real projects - from day one",
];

const accent = "var(--accent)";

export default function Offerings() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">We offer you</h2>
        </div>
        <div className={styles.grid}>
          {offerings.map((title) => {
            return (
              <div key={title} className={styles.card} style={{ borderColor: accent }}>
                <div className={styles.icon} style={{ background: accent }} />
                <p className={styles.label}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
