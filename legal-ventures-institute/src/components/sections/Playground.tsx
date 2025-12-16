import styles from "./Playground.module.css";

const items = [
  {
    number: "1",
    title: "Legal AI Buddy & Humanoid Legal Assistant",
    detail: "tools to help pro se litigants navigate small claims, immigration, or consumer disputes.",
  },
  {
    number: "2",
    title: "Experiential Ventures Pipeline for legal and ethics",
    detail: "turn ideas into real-world impact.",
  },
  {
    number: "3",
    title: "Ethics & Legal Framework Research",
    detail: "research and shape the rules guiding law, AI, and ethics.",
  },
];

export default function Playground() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">
            Robotics, AI &amp; Legal Innovation - your <span className="em-accent">legal playground</span>
          </h2>
          <p className="p">
            Here&apos;s a glimpse of the kinds of projects and possibilities you could dive into:
          </p>
        </div>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.number} className={styles.row}>
              <div className={styles.num}>{item.number}</div>
              <div className={styles.panel}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.footer}>
          ... and many more to come along the journey.{" "}
          <span className="em-accent">This is just the beginning.</span>
        </p>
      </div>
    </section>
  );
}
