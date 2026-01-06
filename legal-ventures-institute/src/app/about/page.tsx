import Nav from "@/components/Nav";
import styles from "./page.module.css";

type ListItem = { text: string };

type AboutPageData = {
  title?: string;
  kicker?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  missionTitle?: string;
  missionBody?: string;
  whatWeDoTitle?: string;
  whatWeDoItems?: ListItem[];
  whoItsForTitle?: string;
  whoItsForItems?: ListItem[];
  howWeWorkTitle?: string;
  howWeWorkBody?: string;
  valuesTitle?: string;
  valuesItems?: ListItem[];
  closingBody?: string;
};

async function fetchAbout(): Promise<AboutPageData | null> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseUrl) return null;

  const headers: Record<string, string> = {};
  if (process.env.STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${process.env.STRAPI_TOKEN}`;
  }

  try {
    const res = await fetch(`${baseUrl}/api/about-page?populate=deep`, {
      headers,
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const attrs = json?.data?.attributes;
    if (!attrs) return null;

    const mapList = (items: any[] | undefined): ListItem[] | undefined =>
      items?.map((item) => ({ text: item?.text ?? "" })).filter((i) => i.text.trim().length > 0);

    return {
      title: attrs.title,
      heroHeadline: attrs.heroHeadline,
      heroSubheadline: attrs.heroSubheadline,
      missionTitle: attrs.missionTitle,
      missionBody: attrs.missionBody,
      whatWeDoTitle: attrs.whatWeDoTitle,
      whatWeDoItems: mapList(attrs.whatWeDoItems),
      whoItsForTitle: attrs.whoItsForTitle,
      whoItsForItems: mapList(attrs.whoItsForItems),
      howWeWorkTitle: attrs.howWeWorkTitle,
      howWeWorkBody: attrs.howWeWorkBody,
      valuesTitle: attrs.valuesTitle,
      valuesItems: mapList(attrs.valuesItems),
      closingBody: attrs.closingBody,
    };
  } catch (err) {
    return null;
  }
}

const toParagraphs = (copy?: string) =>
  copy
    ?.split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean) ?? [];

const fallbackContent: AboutPageData = {
  kicker: "ABOUT US",
  title: "About Legal Ventures Institute",
  heroHeadline: "About Legal Ventures Institute",
  heroSubheadline:
    "Legal Ventures Institute is where legal training meets real product building. We help aspiring legal professionals, technologists, and founders learn the practical skills needed to design, ship, and scale legal solutions. Not just pass exams.\n\n" +
    "Our approach is hands on and venture oriented. You will learn by working on real world problems, creating deliverables that mirror what modern legal teams, legal ops, and legal tech companies actually need. That includes research workflows, policy and compliance documentation, contract systems, automation, and AI enabled tools that improve how legal work gets done.",
  missionTitle: "Our Mission",
  missionBody:
    "To develop the next generation of legal builders. People who can think like attorneys, operate like product teams, and execute like entrepreneurs.",
  whatWeDoTitle: "What We Do",
  whatWeDoItems: [
    { text: "Train members to turn legal knowledge into usable systems, frameworks, and products" },
    { text: "Support venture style projects in legal tech, compliance, and process automation" },
    { text: "Provide mentorship, feedback, and structured deliverables that build real portfolios" },
    { text: "Connect learning to practical outcomes. Skills, confidence, and credibility" },
  ],
  whoItsForTitle: "Who It’s For",
  whoItsForItems: [
    { text: "Law students and recent graduates" },
    { text: "Working professionals moving into compliance, legal ops, or policy" },
    { text: "Builders exploring legal tech and regulation aware product design" },
    { text: "Lifelong learners who want practical legal skills with modern tools" },
  ],
  howWeWorkTitle: "How We Work",
  howWeWorkBody:
    "You learn through structured sprints, reviews, and teamwork. Every track includes clear milestones, templates, and real outputs you can show. We focus on clarity, ethics, and usability. Because legal work should be understandable, accessible, and built to last.",
  valuesTitle: "Our Values",
  valuesItems: [
    { text: "Integrity and professionalism" },
    { text: "Accessibility. Clear language, inclusive design, practical tools" },
    { text: "Accountability. We measure progress by deliverables, not hype" },
    { text: "Innovation with responsibility. Especially when using AI" },
  ],
  closingBody:
    "If you want to go beyond theory and start building what comes after the bar, Legal Ventures Institute is your place.",
};

export default async function AboutPage() {
  const fetched = await fetchAbout();
  const content = { ...(fetched ?? {}), ...fallbackContent };

  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <Nav />
      <header className={styles.hero}>
        <p className="kicker">{content.kicker || "ABOUT US"}</p>
        <h1 className="h1">{content.heroHeadline || content.title}</h1>
        <div className={styles.stack}>
          {toParagraphs(content.heroSubheadline).map((p, idx) => (
            <p key={idx} className="p">
              {p}
            </p>
          ))}
        </div>
      </header>

      <section className={styles.section} aria-labelledby="mission">
        <div className={styles.panel}>
          <h2 id="mission" className="h2">
            {content.missionTitle}
          </h2>
          <p className="p">{content.missionBody}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="whatwedo">
        <div className={styles.panel}>
          <h2 id="whatwedo" className="h2">
            {content.whatWeDoTitle}
          </h2>
          {content.whatWeDoItems && (
            <ul className={styles.list}>
              {content.whatWeDoItems.map((item, idx) => (
                <li key={idx}>{item.text}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="whoitsfor">
        <div className={styles.panel}>
          <h2 id="whoitsfor" className="h2">
            {content.whoItsForTitle}
          </h2>
          {content.whoItsForItems && (
            <ul className={styles.list}>
              {content.whoItsForItems.map((item, idx) => (
                <li key={idx}>{item.text}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="howwework">
        <div className={styles.panel}>
          <h2 id="howwework" className="h2">
            {content.howWeWorkTitle}
          </h2>
          <div className={styles.stack}>
            {toParagraphs(content.howWeWorkBody).map((p, idx) => (
              <p key={idx} className="p">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="values">
        <div className={styles.panel}>
          <h2 id="values" className="h2">
            {content.valuesTitle}
          </h2>
          {content.valuesItems && (
            <ul className={styles.list}>
              {content.valuesItems.map((item, idx) => (
                <li key={idx}>{item.text}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.panel}>
          <div className={styles.stack}>
            {toParagraphs(content.closingBody).map((p, idx) => (
              <p key={idx} className="p">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
