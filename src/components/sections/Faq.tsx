import type { ReactNode } from "react";
import { shop } from "@/content/site";
import { PlusIcon } from "@/components/icons";
import { SplitWords } from "@/components/motion/SplitWords";
import s from "./sections.module.css";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Are your itel Energy products genuine?",
    a: "Yes. Trust Island is an authorized itel Energy dealer, and everything we sell is new and sealed in its box. Ask us about the warranty on the product you’re buying.",
  },
  {
    q: "Why don’t you show prices?",
    a: (
      <>
        Prices in Computer Village change often, so we don’t put them online. Call <a href={shop.phone.href}>{shop.phone.display}</a> or{" "}
        <a href={shop.phone2.href}>{shop.phone2.display}</a> and we’ll give you today’s price.
      </>
    ),
  },
  {
    q: "Which power product do I need?",
    a: "Tell us what you want to keep running, and for how long — for example a fan, TV and lights through the night. We’ll suggest the right product and size.",
  },
  { q: "Do you install inverters and solar panels?", a: "Yes. Our team sizes the system for your home, shop or office, installs it and sets it up." },
  { q: "Can I see the products working before I buy?", a: "Yes. Visit the shop and we’ll show you the Power Tank and Power Go Pro running." },
  {
    q: "Do you sell phones and tablets on their own?",
    a: "Yes. We stock smartphones, tablets, feature phones and smartwatches from Infinix, Redmi, POCO, Tecno, Samsung, realme, itel, HMD and Nokia. Stock changes often, so call to check what’s in.",
  },
  { q: "When are you open?", a: `${shop.hours}. You’ll find us at ${shop.address}.` },
];

export function Faq() {
  return (
    <section id="faq" className={`section ${s.faqSection}`} aria-labelledby="faq-title">
      <div className={`wrap ${s.faq}`}>
        <div className={s.faqHead}>
          <p className="eyebrow" data-reveal="">
            Questions
          </p>
          <h2 id="faq-title" className="h2" data-split="">
            <SplitWords text="Good to know before you visit." />
          </h2>
          <p className={s.faqNote} data-reveal="">
            Can’t see your question? <a href={shop.whatsapp}>Send it to us on WhatsApp</a>.
          </p>
        </div>
        <div className={s.faqList}>
          {faqs.map((f, i) => (
            <details key={f.q} className={s.qa} data-reveal="" style={{ "--i": i } as React.CSSProperties}>
              <summary>
                {f.q}
                <PlusIcon className={s.plus} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
