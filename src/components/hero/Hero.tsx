import Image from "next/image";
import { heroImage, shop } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import s from "./Hero.module.css";

/*
 * Opens in a blackout: the room is dark, the power flickers back, the lamp and
 * fan come on, then the copy rises in. All CSS, so it plays before any script
 * loads. ScrollFx adds the scroll drift (see [data-hero] there).
 */
export function Hero() {
  return (
    <section id="top" className={s.hero} data-hero aria-labelledby="hero-title">
      <div className={s.frame}>
        <div className={s.media} data-hero-media>
          <div className={s.settle}>
            <Image
              src={heroImage}
              alt="A mother reading in her living room during a power cut, a fan and lamp running from an itel Power Tank 1000 beside the sofa"
              fill
              preload
              placeholder="blur"
              sizes="100vw"
              className={s.img}
            />
          </div>
        </div>
        <div className={s.night} aria-hidden="true" />
        <div className={s.fade} aria-hidden="true" />
        <div className={s.chipRow}>
          <div className={s.chipWrap}>
            <p className={s.chip}>
              <span className={s.amber} aria-hidden="true" />
              Lamp and fan running on an itel Power Tank 1000
            </p>
          </div>
        </div>
      </div>

      <div className={s.copyWrap} data-hero-copy>
        <div className={s.copy}>
          <p className={s.eyebrow}>
            <span className={s.rule} aria-hidden="true" />
            {shop.dealer} · Ikeja
          </p>
          <h1 id="hero-title" className={s.title}>
            <SplitWords text="Stay powered through every blackout." />
          </h1>
          <p className={s.lead}>
            We sell, install and support itel Energy power stations, inverters and solar panels — and phones and tablets from the
            brands you know. Come and see them working in Computer Village.
          </p>
          <div className={`btn-row ${s.ctas}`}>
            <a href="#find" className="btn">
              Find the right power
            </a>
            <a href={shop.phone.href} className="link">
              Call {shop.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
