import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { ScrollFx } from "@/components/motion/ScrollFx";
import { Categories } from "@/components/sections/Categories";
import { Faq } from "@/components/sections/Faq";
import { FindPower } from "@/components/sections/FindPower";
import { Footer } from "@/components/sections/Footer";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { Inside } from "@/components/sections/Inside";
import { MobileBar } from "@/components/sections/MobileBar";
import { Phones } from "@/components/sections/Phones";
import { Range } from "@/components/sections/Range";
import { Ticker } from "@/components/sections/Ticker";
import { shop } from "@/content/site";

const store = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: shop.name,
  slogan: shop.tagline,
  description: "Authorized itel Energy dealer selling power stations, inverters, solar panels, phones and tablets in Computer Village, Ikeja.",
  telephone: [shop.phone.e164, shop.phone2.e164],
  address: {
    "@type": "PostalAddress",
    streetAddress: shop.street,
    addressLocality: "Ikeja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  hasMap: shop.maps,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <Categories />
        <FindPower />
        <Range />
        <Phones />
        <Inside />
        <HowToBuy />
        <Faq />
      </main>
      <Footer />
      <MobileBar />
      <ScrollFx />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(store) }} />
    </>
  );
}
