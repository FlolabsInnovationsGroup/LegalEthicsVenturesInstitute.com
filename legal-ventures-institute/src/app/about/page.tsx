import Nav from "@/components/Nav";
import styles from "./page.module.css";

type ListItem = { text: string };

type AboutPageData = {
  title: string;
  heroHeadline: string;
  heroSubheadline?: string;
  missionTitle: string;
  missionBody: string;
  whatWeDoTitle: string;
  whatWeDoItems?: ListItem[];
  whoItsForTitle: string;
  whoItsForItems?: ListItem[];
  howWeWorkTitle: string;
  howWeWorkBody: string;
  valuesTitle: string;
  valuesItems?: ListItem[];
  closingBody: string;
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

export default async function AboutPage() {
  const content = await fetchAbout();

  if (!content) {
    return (
      <main className="container" style={{ padding: "80px 0" }}>
        <Nav />
        <h1 className="h1" style={{ marginBottom: 16 }}>About Us</h1>
        <p className="p">About content is not available right now. Please check back soon.</p>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <Nav />
      <header className={styles.hero}>
        <p className="kicker">About</p>
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

      <section className={styles.section} aria-labelledby="closing">
        <div className={styles.panel}>
          <h2 id="closing" className="h2">
            Ready to build what comes after the bar
          </h2>
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
