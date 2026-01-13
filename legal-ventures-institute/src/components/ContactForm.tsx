/* Client-side HubSpot form embed. */
"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  disclaimer?: string;
};

type HubspotFormOptions = {
  portalId: string;
  formId: string;
  region?: string;
  target: string;
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: HubspotFormOptions) => void;
      };
    };
  }
}

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const HUBSPOT_PORTAL_ID = "45023159";
const HUBSPOT_FORM_ID = "a41399f8-7406-4f05-91ca-1c79839a2987";
const HUBSPOT_REGION = "na1";

  useEffect(() => {
    const createForm = () => {
      if (!window.hbspt?.forms || !formRef.current) return;
      if (formRef.current.childElementCount > 0) return;

      window.hbspt.forms.create({
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        region: HUBSPOT_REGION,
        target: `#${targetId}`,
      });
    };

    if (window.hbspt?.forms) {
      createForm();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", createForm);
      return () => existingScript.removeEventListener("load", createForm);
    }

    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", createForm);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", createForm);
    };
  }, [targetId]);

  return (
    <div className={styles.wrapper}>
      <div id={targetId} ref={formRef} />
      {disclaimer ? <p className={styles.disclaimer}>{disclaimer}</p> : null}
    </div>
  );
}
