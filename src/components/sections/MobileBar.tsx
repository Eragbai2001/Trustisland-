"use client";

import { useEffect, useState } from "react";
import { shop } from "@/content/site";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/icons";
import s from "./sections.module.css";

/* Call, WhatsApp and directions, one tap away on phones once the hero is passed. */
export function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0, rootMargin: "-40% 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`${s.bar} ${show ? s.barOn : ""}`} aria-label="Contact Trust Island">
      <a href={shop.phone.href} className={`${s.barBtn} ${s.barCall}`}>
        <PhoneIcon />
        Call
      </a>
      <a href={shop.whatsapp} className={s.barBtn}>
        <ChatIcon />
        WhatsApp
      </a>
      <a href={shop.maps} className={s.barBtn} target="_blank" rel="noopener noreferrer">
        <PinIcon />
        Directions
      </a>
    </nav>
  );
}
