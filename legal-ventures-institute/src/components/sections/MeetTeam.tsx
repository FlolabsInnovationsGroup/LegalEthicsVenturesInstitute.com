import Image from "next/image";
import styles from "./MeetTeam.module.css";

const traits = [
  {
    verb: "Research",
    detail: "emerging technologies and legal landscapes",
  },
  {
    verb: "Listen",
    detail: "to diverse perspectives",
  },
  {
    verb: "Understand",
    detail: "complex challenges",
  },
  {
    verb: "Learn",
    detail: "continuously",
  },
  {
    verb: "Develop",
    detail: "solutions and skills",
  },
  {
    verb: "Shape",
    detail: "innovation responsibly",
  },
];

export default function MeetTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src="/Assets/7th image.jpg"
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
            <h2 className={styles.title}>Meet the Team</h2>
            <p className={styles.lead}>
              We are a collaborative, welcoming legal intern team working at the dynamic
              intersection of{" "}
              <span className="em-accent">artificial intelligence</span>,{" "}
              <span className="em-accent">robotics</span>, and{" "}
              <span className="em-accent">law</span>. A frontier that requires both technical
              insight and ethical judgment.
            </p>
            <p className={styles.label}>We:</p>
            <ul className={styles.list}>
              {traits.map((item) => (
                <li key={item.verb} className={styles.item}>
                  <span className="em-accent">{item.verb}</span> {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
