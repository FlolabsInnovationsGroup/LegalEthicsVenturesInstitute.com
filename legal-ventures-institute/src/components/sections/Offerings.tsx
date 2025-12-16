import styles from "./Offerings.module.css";

const offerings = [
  "Hands-on client work",
  "AI tools for the modern legal world",
  "Legal drafting, research, and strategy",
  "Startup building experience",
  "Ethics & compliance training",
  "Immediate impact on real projects - from day one",
];

const palette = ["var(--accent)", "var(--danger)"];

export default function Offerings() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="kicker">Curriculum</div>
          <h2 className="h2">We offer you</h2>
        </div>
        <div className={styles.grid}>
          {offerings.map((title, idx) => {
            const color = palette[idx % palette.length];
            return (
              <div key={title} className={styles.card} style={{ borderColor: color }}>
                <div className={styles.icon} style={{ background: color }} />
                <p className={styles.label}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
