import styles from "./InMotion.module.css";

const initiatives = [
  {
    title: "Funding Opportunities",
    detail:
      "Identifying and assessing EU, US, and private funding opportunities aligned with our strategic direction and mission. A mission reflected in a learning-focused center of excellence, scaling innovative solutions to reach those who need them most, and seeking partners and team members who share the vision and can help pave the path forward.",
  },
  {
    title: "Incentive & Corporate Structures",
    detail:
      "Researching the feasibility and implementation of incentive mechanisms, i.e. equity and stock option plan, within a corporate structure to support growth and alignment.",
  },
  {
    title: "Data Privacy & AI Governance",
    detail:
      "Ongoing research into data protection and AI governance to inform responsible, future-ready decision-making. Embedding legal thinking early in development to ensure compliance is built in from the start, not added later.",
  },
];

export default function InMotion() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>In Motion: What We're Advancing Now</h2>
          <p className={styles.lead}>
            We're not standing still. The team's work is active and evolving. These initiatives are
            currently in motion, translating our foundations into practical impact and shaping what
            comes next.
          </p>
          <p className={styles.sublead}>Here is a glimpse of what we are working on...</p>
        </header>
        <div className={styles.grid}>
          {initiatives.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.ribbon} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
