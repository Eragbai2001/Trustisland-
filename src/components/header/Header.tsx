"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import lion from "@/assets/logo/trust-island-lion.svg";
import { shop } from "@/content/site";
import { lockScroll } from "@/lib/scroll";
import { ChatIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import s from "./Header.module.css";

const menu = [
  { href: "#categories", label: "Shop by category" },
  { href: "#find", label: "Find your power" },
  { href: "#range", label: "The itel Energy range" },
  { href: "#phones", label: "Phones & tablets" },
  { href: "#inside", label: "Inside the shop" },
  { href: "#how", label: "How to buy" },
  { href: "#faq", label: "Questions" },
  { href: "#visit", label: "Visit us" },
];

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  /* Hide on the way down, return on the way up; draw the reading progress. */
  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current?.style.setProperty("--progress", String(max > 0 ? Math.min(1, y / max) : 0));
      setStuck(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 861px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
      lockScroll(false);
    };
  }, [open]);

  const cls = [s.header, stuck && s.stuck, hidden && !open && s.hidden, open && s.open].filter(Boolean).join(" ");

  return (
    <header ref={ref} className={cls}>
      <div className={s.bar}>
        <nav className={s.links} aria-label="Main">
          <a href="#find">Find your power</a>
          <a href="#range">itel Energy</a>
          <a href="#phones">Phones &amp; tablets</a>
        </nav>

        <a href="#top" className={s.logo} aria-label="Trust Island, home" onClick={close}>
          <Image src={lion} alt="" width={39} height={44} unoptimized preload className={s.lion} />
          <span className={s.wordmark}>
            <span className={s.name}>Trust Island</span>
            <span className={s.tagline}>{shop.tagline}</span>
          </span>
        </a>

        <div className={s.actions}>
          <a href="#visit" className={s.visit}>
            Visit us
          </a>
          <a href={shop.phone.href} className={`btn ${s.call}`}>
            <PhoneIcon />
            Call us
          </a>
        </div>

        <div className={s.mobile}>
          <a href={shop.phone.href} className={s.iconBtn} aria-label={`Call Trust Island on ${shop.phone.display}`}>
            <PhoneIcon />
          </a>
          <button
            type="button"
            className={`${s.iconBtn} ${s.menuBtn}`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={s.progress} aria-hidden="true" />

      <div id="site-menu" className={s.drawer} hidden={!open}>
        <nav aria-label="Menu" className={s.drawerNav}>
          {menu.map((item, i) => (
            <a key={item.href} href={item.href} onClick={close} style={{ "--i": i } as React.CSSProperties}>
              {item.label}
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
        <div className={s.drawerCtas}>
          <a href={shop.phone.href} className="btn">
            <PhoneIcon />
            Call us
          </a>
          <a href={shop.whatsapp} className="btn btn--outline">
            <ChatIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
