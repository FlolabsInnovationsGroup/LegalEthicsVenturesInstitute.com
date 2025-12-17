import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import styles from "./page.module.css";

type ContactPageData = {
  title: string;
  heroHeadline: string;
  heroSubheadline?: string;
  primaryEmail?: string;
  phone?: string;
  location?: string;
  hours?: string;
  ctaTitle?: string;
  ctaBody?: string;
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
      title: attrs.title,
      heroHeadline: attrs.heroHeadline,
      heroSubheadline: attrs.heroSubheadline,
      primaryEmail: attrs.primaryEmail,
      phone: attrs.phone,
      location: attrs.location,
      hours: attrs.hours,
      ctaTitle: attrs.ctaTitle,
      ctaBody: attrs.ctaBody,
      formDisclaimer: attrs.formDisclaimer,
    };
  } catch (err) {
    return null;
  }
}

const splitParas = (text?: string) =>
  text
    ?.split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean) ?? [];

export default async function ContactPage() {
  const data = await fetchContact();

  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <Nav />
      <header className={styles.hero}>
        <p className="kicker">Contact</p>
        <h1 className="h1">{data?.heroHeadline || data?.title || "Contact Us"}</h1>
        <div className={styles.stack}>
          {splitParas(data?.heroSubheadline).map((p, idx) => (
            <p key={idx} className="p">
              {p}
            </p>
          ))}
        </div>
      </header>

      <div className={styles.grid}>
        <section className={styles.panel} aria-labelledby="contact-info">
          <h2 id="contact-info" className="h2">
            Get in touch
          </h2>
          <div className={styles.infoList}>
            {data?.primaryEmail && (
              <div>
                <p className={styles.label}>Email</p>
                <p className={styles.value}>{data.primaryEmail}</p>
              </div>
            )}
            {data?.phone && (
              <div>
                <p className={styles.label}>Phone</p>
                <p className={styles.value}>{data.phone}</p>
              </div>
            )}
            {data?.location && (
              <div>
                <p className={styles.label}>Location</p>
                <p className={styles.value}>{data.location}</p>
              </div>
            )}
            {data?.hours && (
              <div>
                <p className={styles.label}>Hours</p>
                <p className={styles.value}>{data.hours}</p>
              </div>
            )}
          </div>

          {(data?.ctaTitle || data?.ctaBody) && (
            <div className={styles.ctaBox}>
              {data?.ctaTitle && <h3 className={styles.subhead}>{data.ctaTitle}</h3>}
              {splitParas(data?.ctaBody).map((p, idx) => (
                <p key={idx} className="p">
                  {p}
                </p>
              ))}
            </div>
          )}
        </section>

        <section className={styles.panel} aria-labelledby="contact-form">
          <h2 id="contact-form" className="h2">
            Send us a message
          </h2>
          <ContactForm disclaimer={data?.formDisclaimer} />
        </section>
      </div>
    </main>
  );
}
