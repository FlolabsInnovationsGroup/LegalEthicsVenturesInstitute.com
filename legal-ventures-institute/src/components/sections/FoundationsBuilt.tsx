import styles from "./FoundationsBuilt.module.css";

const foundations = [
  {
    number: "1",
    title: "Legal Structures & Agreements",
    detail:
      "Creating and reviewing scalable, clear, and reliable internal frameworks that enable the business to operate efficiently and confidently.",
  },
  {
    number: "2",
    title: "Data Governance & Compliance",
    detail:
      "Establishing frameworks and processes to ensure information is secure, consistent, and responsibly managed.",
  },
  {
    number: "3",
    title: "Research & Analysis",
    detail:
      "Serving as the backbone of our work as we continuously conduct deep-dive research into emerging regulations, industry best practices, and competitive landscape to inform strategic decisions.",
  },
];

export default function FoundationsBuilt() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Foundations: What We've Built</h2>
          <p className={styles.intro}>
            Before we map the road ahead... let's acknowledge the groundwork that makes everything
            possible.
          </p>
        </header>
        <div className={styles.grid}>
          {foundations.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.badge}>{item.number}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
