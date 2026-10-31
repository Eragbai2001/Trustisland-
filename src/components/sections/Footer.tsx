import Image from "next/image";
import logo from "@/assets/logo/trust-island-logo.svg";
import lion from "@/assets/logo/trust-island-lion.svg";
import { shop } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import s from "./sections.module.css";

export function Footer() {
  return (
    <footer id="visit" className={s.footer} aria-labelledby="visit-title">
      <div className={`wrap ${s.footerInner}`}>
        <div className={s.visit}>
          <div data-reveal="">
            <Image src={logo} alt="Trust Island" width={120} height={128} unoptimized className={s.footerLogo} />
          </div>
          <p className="eyebrow" data-reveal="">
            Visit us
          </p>
          <h2 id="visit-title" className={`h2 ${s.visitTitle}`} data-split="">
            <SplitWords text="Come and see it working." />
          </h2>
          <address className={s.address} data-reveal="">
            {shop.address}.
          </address>
          <p className={s.hours} data-reveal="">
            Open {shop.hours}
          </p>
          <div className={`btn-row ${s.visitCtas}`} data-reveal="">
            <a href={shop.phone.href} className="btn">
              {shop.phone.display}
            </a>
            <a href={shop.phone2.href} className="btn btn--outline">
              {shop.phone2.display}
            </a>
            <a href={shop.whatsapp} className="btn btn--outline">
              WhatsApp
            </a>
            <a href={shop.maps} className="link" target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </div>
        </div>
        <div className={s.base}>
          <span className={s.baseBrand}>
            <Image src={lion} alt="" width={27} height={30} unoptimized />
            <span className={s.baseName}>Trust Island</span>
            <span className={s.baseTag}>{shop.tagline}</span>
          </span>
          <p className={s.baseDealer}>
            <span className="dot" aria-hidden="true" />
            {shop.dealer} · Computer Village, Ikeja
          </p>
        </div>
      </div>
    </footer>
  );
}
