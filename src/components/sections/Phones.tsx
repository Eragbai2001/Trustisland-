import Image from "next/image";
import { phonesImage, shop } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import { Catalog } from "./Catalog";
import s from "./sections.module.css";

export function Phones() {
  return (
    <section id="phones" className={s.phones} aria-labelledby="phones-title">
      <div className={`wrap ${s.phonesIntro}`}>
        <div className={`frame ${s.phonesFrame}`} data-reveal="">
          <div data-parallax="">
            <Image
              src={phonesImage}
              alt="Shelves of boxed Tecno, Redmi and Infinix phones under the Trust Island sign in the shop"
              fill
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "50% 22%" }}
            />
          </div>
        </div>
        <div className={s.phonesText}>
          <p className="eyebrow" data-reveal="">
            Phones &amp; tablets
          </p>
          <h2 id="phones-title" className="h2" data-split="">
            <SplitWords text="Stay connected too." />
          </h2>
          <p className={s.bodyCopy} data-reveal="">
            New, sealed smartphones, tablets, feature phones and smartwatches from the brands people trust. Pair a new phone with a Power
            Go Pro and you won’t run flat in a power cut again.
          </p>
          <p className={s.brands} data-reveal="">
            Infinix · Redmi · POCO · Tecno · Samsung · realme · itel · HMD · Nokia · iPhone
          </p>
          <div data-reveal="">
            <a href={shop.phone.href} className="btn btn--outline">
              Call to check what’s in stock
            </a>
          </div>
        </div>
      </div>

      <Catalog />
    </section>
  );
}
