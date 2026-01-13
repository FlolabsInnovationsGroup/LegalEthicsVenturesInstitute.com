import styles from "./InitiativesNumbers.module.css";

const stats = [
  {
    value: "13",
    label: "Finalized Projects",
    detail:
      "Completed initiatives that have laid the groundwork for innovation and operational clarity.",
  },
  {
    value: "8+",
    label: "Active Projects",
    detail: "Currently underway, generating insights and supporting ongoing initiatives.",
  },
  {
    value: "5",
    label: "Planned Projects",
    detail: "Upcoming initiatives we are preparing to explore.",
  },
];

export default function InitiativesNumbers() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Initiatives: By the Numbers</h2>
        </header>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
              <p className={styles.detail}>{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
