import Nav from "@/components/Nav";
import styles from "./page.module.css";

const pillars = [
  {
    title: "Applied experience",
    body: "Work on live legal, ethics, and AI projects that ship—not simulations.",
  },
  {
    title: "Cross-functional skills",
    body: "Blend research, drafting, product thinking, and automation to deliver useful outcomes.",
  },
  {
    title: "Mentorship and feedback",
    body: "Get guidance from practitioners and founders with clear expectations for every sprint.",
  },
];

const steps = [
  "Share your goals and background so we can place you on the right track.",
  "Match with a project that needs legal, ethics, or compliance expertise.",
  "Build alongside mentors, ship deliverables, and iterate with real feedback.",
  "Showcase outcomes, capture portfolio artifacts, and plan your next move.",
];

const outcomes = [
  "Portfolio-ready work that demonstrates real-world impact.",
  "Fluency with AI tools, automation, and compliance workflows.",
  "Confidence collaborating with founders, operators, and technical teams.",
  "A network of mentors and peers focused on the future of law and ethics.",
];

const profiles = [
  "Law students and grads who want modern, applied experience.",
  "Professionals pivoting into AI, compliance, or tech-enabled practice.",
  "Builders and founders seeking legal-ops rigor for their products.",
];

export default function LearnMorePage() {
  return (
    <main className={styles.page}>
      <Nav />

      <section className={`container ${styles.hero}`}>
        <div className={styles.heroContent}>
          <p className="kicker">Learn more</p>
          <h1 className="h1">Learn more about Legal &amp; Ethics Ventures Institute</h1>
          <p className="p">
            See how we combine legal rigor, ethics, and AI to help you build the next generation of solutions.
            If you want work that moves from concept to delivery, you are in the right place.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="https://hephaestus.international/"
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </a>
            <a className={styles.secondary} href="/contact">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <header className={styles.sectionHead}>
          <p className="kicker">What we focus on</p>
          <h2 className="h2">Where learning meets delivery</h2>
          <p className="p">
            Every track is built around real deliverables: research, drafting, compliance, automation, and product
            validation.
          </p>
        </header>
        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.card}>
              <p className={styles.cardTitle}>{pillar.title}</p>
              <p className="p">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <header className={styles.sectionHead}>
          <p className="kicker">Who thrives here</p>
          <h2 className="h2">People who want real momentum</h2>
          <p className="p">If you are ready to ship and learn fast, you will fit right in.</p>
        </header>
        <ul className={styles.list}>
          {profiles.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <header className={styles.sectionHead}>
          <p className="kicker">How it works</p>
          <h2 className="h2">A clear path from start to finish</h2>
        </header>
        <ol className={styles.steps}>
          {steps.map((step, idx) => (
            <li key={step} className={styles.stepItem}>
              <span className={styles.stepBadge}>{idx + 1}</span>
              <span className={styles.stepText}>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={`container ${styles.section}`}>
        <header className={styles.sectionHead}>
          <p className="kicker">What you gain</p>
          <h2 className="h2">Outcomes that move you forward</h2>
        </header>
        <div className={styles.grid}>
          {outcomes.map((item) => (
            <div key={item} className={styles.card}>
              <p className="p">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.cta}`}>
        <div className={styles.ctaInner}>
          <div>
            <p className="kicker">Ready to start?</p>
            <h2 className="h2">Take the next step with Legal &amp; Ethics Ventures Institute</h2>
            <p className="p">
              Tell us your goals. We will recommend the right track and set you up to deliver meaningful work from day one.
            </p>
          </div>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="https://hephaestus.international/"
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </a>
            <a className={styles.secondary} href="/contact">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
