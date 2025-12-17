import Image from "next/image";
import styles from "./DoYou.module.css";

const checklist = [
  "Have a passion for law, ethics, and AI?",
  "Want hands-on experience solving real-world legal challenges?",
  "Dream of building AI-powered tools, platforms, or innovations in law?",
  "Value flexibility, learning and contributing from anywhere, on your own schedule?",
  "Want to turn curiosity into real-world skills?",
];

export default function DoYou() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.panel}>
            <p className={styles.title}>Do you...</p>
            <ul className={styles.list}>
              {checklist.map((item) => (
                <li key={item} className={styles.item}>
                  <span className={styles.bullet} />
                  <span className={styles.itemText}>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.divider} />
            <p className={styles.closing}>
              If <span className="em-accent">YES</span>, this is where your{" "}
              <span className="em-accent">journey starts.</span>
            </p>
            <div className={styles.actions}>
              <a className={styles.cta} href="/contact">
                Talk to us
              </a>
            </div>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/Assets/5th image.jpg"
              alt="Community and mentorship"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}
