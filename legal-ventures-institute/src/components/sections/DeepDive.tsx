import styles from "./DeepDive.module.css";

const pillars = [
  {
    number: "01",
    title: "Legal Frameworks Review",
    detail:
      "Identifying and summarizing relevant legislation, including the GDPR, the EU AI Act, and other applicable privacy and data governance laws.",
  },
  {
    number: "02",
    title: "Comparative & Regulatory Analysis",
    detail:
      "Reviewing available case law, regulatory guidance, and organizational best practices that reflect user-centric privacy models.",
  },
  {
    number: "03",
    title: "Emerging Trends Monitoring",
    detail:
      "Ongoing monitoring of emerging legal, policy, and technological trends in data protection and AI governance, including insights from expert forums and global discussions.",
  },
  {
    number: "04",
    title: "Internal Application & Synthesis",
    detail:
      "Translating complex legal and governance research into clear, practical, and user-centered internal insights. Synthesizing findings into preliminary notes and a concise summary report to inform future discussions and responsible next steps.",
  },
];

export default function DeepDive() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <h2 className={styles.title}>
              Deep Dive: AI Governance &amp; Data Privacy
              <br />
              <span className={styles.subtitle}>A Foundational Pillar</span>
            </h2>
            <div className={styles.stack}>
              <p className={styles.text}>
                This initiative is an example of how the company strengthens its data privacy
                framework through a{" "}
                <span className="em-accent">user-centric and responsible approach</span>,
                particularly in the context of AI.
              </p>
              <p className={styles.text}>
                From an ethics standpoint, we prioritize{" "}
                <span className="em-accent">privacy-by-design</span> and{" "}
                <span className="em-accent">responsible AI</span>, avoiding practices that
                compromise user trust, especially when handling highly sensitive health data.
              </p>
              <p className={styles.text}>
                The work focuses on{" "}
                <span className="em-accent">preliminary legal and policy research</span> to gather
                insights, examples, and emerging practices that can inform future discussions and
                strategic decisions.
              </p>
              <p className={styles.text}>
                Exploratory research, intended for internal review, serving as a foundation for AI
                development with a user-centered focus.
              </p>
            </div>
          </div>
          <div className={styles.pillars}>
            {pillars.map((item) => (
              <div key={item.number} className={styles.pillar}>
                <span className={styles.number}>{item.number}</span>
                <div className={styles.pillarBody}>
                  <h3 className={styles.pillarTitle}>{item.title}</h3>
                  <p className={styles.pillarDetail}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
