import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import styles from "./page.module.css";

type ContactPageData = {
  formDisclaimer?: string;
};

async function fetchContact(): Promise<ContactPageData | null> {
  const baseUrl = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseUrl) return null;

  const headers: Record<string, string> = {};
  if (process.env.STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${process.env.STRAPI_TOKEN}`;
  }

  try {
    const res = await fetch(`${baseUrl}/api/contact-page`, {
      headers,
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const attrs = json?.data?.attributes;
    if (!attrs) return null;
    return {
      formDisclaimer: attrs.formDisclaimer,
    };
  } catch (err) {
    return null;
  }
}

const content = {
  kicker: "CONTACT US",
  title: "Contact Legal Ventures Institute",
  intro:
    "Questions. We've got answers. Whether you're exploring our programs, looking to collaborate on a legal tech or compliance project, or you simply want to understand how we work. We're here to help.",
  formHeading: "Use the contact form",
  formCopy: "Please share as much detail as you can so we can respond quickly and accurately. If you have a deadline or a specific goal, include it.",
  reasonsHeading: "Why contact Legal Ventures Institute?",
  reasons: [
    "Program guidance: Find the right track based on your background and goals",
    "Partnership inquiries: Collaboration with universities, organizations, and founders",
    "Practical support: Questions about deliverables, sprints, and what you will build",
    "Updates: Learn about new cohorts, events, and research initiatives",
  ],
  nextHeading: "What happens next?",
  nextSteps: [
    "Our team typically responds within 24 to 48 business hours.",
    "You will receive a confirmation message that we received your inquiry.",
    "If it's a program fit question, we may suggest the next best step or a short call.",
  ],
  closing: "Don't wait. Reach out today and let's build what comes after the bar.",
};

export default async function ContactPage() {
  const data = await fetchContact();

  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <Nav />
      <header className={styles.hero}>
        <p className="kicker">{content.kicker}</p>
        <h1 className="h1">{content.title}</h1>
        <div className={styles.stack}>
          <p className="p">{content.intro}</p>
        </div>
      </header>

      <div className={styles.grid}>
        <section
          className={`${styles.panel} ${styles.formPanel}`}
          aria-labelledby="contact-form"
        >
          <h2 id="contact-form" className="h2">
            {content.formHeading}
          </h2>
          <p className="p">{content.formCopy}</p>
          <ContactForm disclaimer={data?.formDisclaimer} />
        </section>

        <section
          className={`${styles.panel} ${styles.infoPanel}`}
          aria-labelledby="contact-reasons"
        >
          <h2 id="contact-reasons" className="h2">
            {content.reasonsHeading}
          </h2>
          <ul className={styles.list}>
            {content.reasons.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>

          <h2 id="contact-next" className="h2">
            {content.nextHeading}
          </h2>
          <ul className={styles.list}>
            {content.nextSteps.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>

          <p className="p">{content.closing}</p>
        </section>
      </div>
    </main>
  );
}
