/* Client-side contact form that posts to /api/contact. Copy/content managed in Strapi. */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ContactForm.module.css";

type Props = {
  disclaimer?: string;
};

type FormValues = {
  fullName: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const topics = ["General", "Programs", "Partnerships", "Media", "Support"] as const;

export default function ContactForm({ disclaimer }: Props) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    topic: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const refs = {
    fullName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    topic: useRef<HTMLSelectElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
    consent: useRef<HTMLInputElement>(null),
  };

  const firstErrorKey = useMemo(() => {
    const order: (keyof FormValues)[] = ["fullName", "email", "topic", "message", "consent"];
    return order.find((key) => errors[key]);
  }, [errors]);

  useEffect(() => {
    if (firstErrorKey) {
      refs[firstErrorKey].current?.focus();
    }
  }, [firstErrorKey, refs]);

  const validate = (v: FormValues): Errors => {
    const next: Errors = {};
    if (!v.fullName || v.fullName.trim().length < 2) {
      next.fullName = "Full name must be at least 2 characters.";
    }
    if (!v.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) {
      next.email = "Enter a valid email.";
    }
    if (!v.topic) {
      next.topic = "Select a topic.";
    }
    if (!v.message || v.message.trim().length < 20) {
      next.message = "Message must be at least 20 characters.";
    }
    if (!v.consent) {
      next.consent = "Consent is required.";
    }
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccess(false);
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, sourcePage: "/contact" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSuccess(true);
      setValues({
        fullName: "",
        email: "",
        topic: "",
        message: "",
        consent: false,
      });
      setErrors({});
    } catch (err: any) {
      setServerError(err?.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {success && <div className={styles.success}>Thanks. We received your message and will reply soon.</div>}
      {serverError && <div className={styles.errorBanner}>{serverError}</div>}

      <div className={styles.field}>
        <label htmlFor="fullName">Full name *</label>
        <input
          id="fullName"
          name="fullName"
          ref={refs.fullName}
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          required
        />
        {errors.fullName && (
          <p id="fullName-error" className={styles.error}>
            {errors.fullName}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          ref={refs.email}
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className={styles.error}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="topic">Topic *</label>
        <select
          id="topic"
          name="topic"
          ref={refs.topic}
          value={values.topic}
          onChange={handleChange}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "topic-error" : undefined}
          required
        >
          <option value="">Select a topic</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="topic-error" className={styles.error}>
            {errors.topic}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          ref={refs.message}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          required
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.checkboxRow}>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          ref={refs.consent}
          checked={values.consent}
          onChange={handleChange}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          required
        />
        <label htmlFor="consent">I agree to be contacted about my inquiry.</label>
      </div>
      {errors.consent && (
        <p id="consent-error" className={styles.error}>
          {errors.consent}
        </p>
      )}

      {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
