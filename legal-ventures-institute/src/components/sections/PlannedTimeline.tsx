import styles from "./PlannedTimeline.module.css";

const timeline = [
  {
    numeral: "I.",
    title: "Funding Pathways",
    detail:
      "Building on prior research, we aim to provide a well-informed overview of EU and US funding opportunities to support the company in identifying suitable calls and preparing for application.",
  },
  {
    numeral: "II.",
    title: "Team Expansion",
    detail:
      "We are preparing to grow the legal team to scale impact, support emerging initiatives across the company, and support one another as we move forward, together.",
  },
  {
    numeral: "III.",
    title: "AI Legal Buddy",
    detail:
      "Research and concept development for a B2B and B2C AI Legal Buddy, forming part of a broader ecosystem of AI assistants. Building on market and landscape research to map demand, competitors, and potential features, informing product contribution and preparing for outreach as the product matures.",
  },
  {
    numeral: "IV.",
    title: "European Entity",
    detail:
      "We are laying the groundwork to unlock growth through potential establishment of a European entity, informed by research and strategic planning.",
  },
  {
    numeral: "V.",
    title: "Cross-Team Collaboration",
    detail:
      "We are broadening the scope of the Legal & Ethics team to maintain and amplify collaboration across company verticals, including but not limited to space, quantum, and CAIPO. By stepping in where legal, ethical, and technological considerations intersect, we support team collaboration, provide insight, and help initiatives flourish, ensuring our work drives responsible and informed innovation.",
  },
];

const introLines = [
  "Planned where possible.",
  "Open where necessary. Some paths are defined. Others will emerge as we move forward.",
  "We are ready for what comes next...",
];

export default function PlannedTimeline() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Planned &amp; Ready: A Timeline of the Next 12 Months</h2>
          <div className={styles.intro}>
            {introLines.map((line) => (
              <p key={line} className={styles.introLine}>
                {line}
              </p>
            ))}
          </div>
        </header>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.numeral} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.numeral}>{item.numeral}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
              <p className={styles.itemDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
