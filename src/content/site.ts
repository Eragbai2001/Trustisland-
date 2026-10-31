/**
 * Everything the homepage says and shows lives here, so copy, products and
 * photos can be changed without touching the components.
 */
import type { StaticImageData } from "next/image";

import heroLivingRoom from "@/assets/hero/living-room.jpg";
import findGoproBalcony from "@/assets/find/gopro-balcony.jpg";
import rangeGopro from "@/assets/range/gopro.jpg";
import rangeTankFront from "@/assets/range/tank-front.jpg";
import rangeTankBack from "@/assets/range/tank-back.jpg";
import rangeInverters from "@/assets/range/inverters.jpg";
import rangeSolar from "@/assets/range/solar.jpg";
import rangeFan from "@/assets/range/fan.jpg";
import closerGopro from "@/assets/closer/gopro-top.jpg";
import closerTankDisplay from "@/assets/closer/tank-display.jpg";
import closerTankBack from "@/assets/closer/tank-back.jpg";
import shopTrust from "@/assets/shop/trust.jpg";
import shopWall from "@/assets/shop/wall.jpg";
import shopMi from "@/assets/shop/mi.jpg";
import shopRedmi from "@/assets/shop/redmi.jpg";
import shopFeaturePhones from "@/assets/shop/feature-phones.jpg";

import pNote17ProMax from "@/assets/phones/note17promax.jpg";
import pHot70Pro from "@/assets/phones/hot70pro.jpg";
import pGalaxyA56 from "@/assets/phones/galaxya56.jpg";
import pCamon50Pro from "@/assets/phones/camon50pro.jpg";
import pRedmi17 from "@/assets/phones/redmi17.jpg";
import pZeroFlip from "@/assets/phones/zeroflip.jpg";
import pC75x from "@/assets/phones/c75x.jpg";
import pGalaxyA15 from "@/assets/phones/galaxya15.jpg";
import pItelA200s from "@/assets/phones/itela200s.jpg";
import pXpad30e from "@/assets/phones/xpad30e.jpg";
import pNote17Pro from "@/assets/phones/note17pro.jpg";
import pNote17 from "@/assets/phones/note17.jpg";
import pCamon50 from "@/assets/phones/camon50.jpg";
import pNoteEdge from "@/assets/phones/noteedge5g.jpg";
import pHot70 from "@/assets/phones/hot70.jpg";
import pSpark50 from "@/assets/phones/spark50.jpg";
import pPocoC85 from "@/assets/phones/pococ85.jpg";
import pGalaxyA06 from "@/assets/phones/galaxya06.jpg";
import pSmart20 from "@/assets/phones/smart20.jpg";
import pRedmi15c from "@/assets/phones/redmi15c.jpg";
import pRedmiNote15 from "@/assets/phones/redminote15.jpg";
import pRedmiA7Pro from "@/assets/phones/redmia7pro.jpg";
import pPocoC71 from "@/assets/phones/pococ71.jpg";
import pPop20 from "@/assets/phones/pop20.jpg";
import pC100i from "@/assets/phones/c100i.jpg";
import pRedmiPad2 from "@/assets/phones/redmipad2.jpg";
import pMegapad from "@/assets/phones/megapad.jpg";
import pXwatch from "@/assets/phones/xwatchh4.jpg";
import pHmd150 from "@/assets/phones/hmd150.jpg";
import pHmd10x from "@/assets/phones/hmd10x.jpg";

/* ------------------------------------------------------------------ contact */

export const shop = {
  name: "Trust Island",
  tagline: "Your trust. Our priority.",
  dealer: "Authorized itel Energy dealer",
  address: "Suite C3, 12 Adepele Street, off Medical Road, by UBA Bank, Computer Village, Ikeja, Lagos",
  street: "Suite C3, 12 Adepele Street, off Medical Road",
  locality: "Computer Village, Ikeja",
  hours: "[Opening hours]",
  phone: { display: "0803 395 4647", href: "tel:+2348033954647", e164: "+2348033954647" },
  phone2: { display: "0802 316 8637", href: "tel:+2348023168637", e164: "+2348023168637" },
  whatsapp: "https://wa.me/2348023168637",
  maps: "https://www.google.com/maps/search/?api=1&query=12+Adepele+Street+Computer+Village+Ikeja+Lagos",
};

export const whatsappAbout = (product: string) =>
  `${shop.whatsapp}?text=${encodeURIComponent(`Hello Trust Island, I would like to ask about the ${product}.`)}`;

export const ticker = [
  "Genuine itel Energy products",
  "Expert installation",
  "After-sales support",
  "Phones and tablets",
  "Computer Village, Ikeja",
];

/* --------------------------------------------------------------- categories */

export type Category = {
  num: string;
  name: string;
  note: string;
  href: string;
  filter?: Filter;
  image: StaticImageData;
  position?: string;
  studio?: boolean;
};

/* ------------------------------------------------------------------- needs */

export type Need = {
  num: string;
  label: string;
  kicker: string;
  name: string;
  short: string;
  image: StaticImageData;
  alt: string;
  body: string;
  points: string[];
};

export const needs: Need[] = [
  {
    num: "01",
    label: "Phone and laptop",
    kicker: "Portable",
    name: "itel Power Go Pro",
    short: "the Power Go Pro",
    image: findGoproBalcony,
    alt: "A laptop plugged straight into an itel Power Go Pro on a balcony at night",
    body: "Small enough to carry anywhere, strong enough to keep you working when the light goes.",
    points: [
      "A real AC socket for your laptop — no adapter needed",
      "USB and DC ports for phones and routers",
      "Charges several devices at once",
    ],
  },
  {
    num: "02",
    label: "Fan, TV and lights",
    kicker: "Home power station",
    name: "itel Power Tank 1000",
    short: "the Power Tank",
    image: heroLivingRoom,
    alt: "A fan and lamp running from an itel Power Tank 1000 in a living room",
    body: "An all-in-one home power station. Quiet, plug and play, with no installation needed.",
    points: ["2000Wh storage, 1000W output", "Keeps the fan, TV and lights on through the night", "Charges from the wall or from solar"],
  },
  {
    num: "03",
    label: "The whole house or shop",
    kicker: "Inverter systems",
    name: "itel Energy inverters",
    short: "itel inverters",
    image: rangeInverters,
    alt: "Boxed itel Energy inverters in the shop",
    body: "For a whole house, shop or office. Tell us what you want to power and we’ll size the system and install it.",
    points: ["4KVA, 6KVA and 8KVA hybrid inverters", "Works with batteries and solar panels", "Sizing, installation and after-sales support"],
  },
  {
    num: "04",
    label: "Power from the sun",
    kicker: "Solar",
    name: "Solar panels",
    short: "solar panels",
    image: rangeSolar,
    alt: "An installer fixing solar panels on a Lagos rooftop",
    body: "Charge your Power Tank or inverter batteries from the sun by day, and spend less on generator fuel.",
    points: ["Pairs with the Power Tank and itel inverters", "Runs the itel solar ceiling fan from a 12V panel", "Roof installation and setup by our team"],
  },
];

/* -------------------------------------------------------------------- range */

export type RangeItem = {
  kicker: string;
  name: string;
  images: { src: StaticImageData; alt: string; position?: string }[];
  specs: [string, string][];
  studio?: boolean;
};

export const range: RangeItem[] = [
  {
    kicker: "Portable · 01",
    name: "Power Go and Power Go Pro",
    images: [{ src: rangeGopro, alt: "A white itel Power Go Pro with its tan strap, on the shop counter" }],
    specs: [
      ["Powers", "Laptops, phones, lamps, Wi-Fi routers"],
      ["Battery", "100,000mAh on the Power Go Pro"],
      ["AC socket", "220V, 50Hz, 200W"],
      ["DC output", "133W, plus USB ports"],
    ],
  },
  {
    kicker: "Home power station · 02",
    name: "Power Tank 500 and 1000",
    images: [
      { src: rangeTankFront, alt: "Front of the itel Power Tank: white panel with a round black display" },
      { src: rangeTankBack, alt: "Back of the itel Power Tank: dark grey with a cooling grille and output sockets", position: "30% 50%" },
    ],
    specs: [
      ["Tank 1000", "2000Wh storage, 1000W output"],
      ["Tank 500", "1000Wh storage, 500W output"],
      ["Powers", "Fans, TVs, lights, decoders, laptops"],
    ],
  },
  {
    kicker: "Whole house or shop · 03",
    name: "itel Energy inverters",
    images: [{ src: rangeInverters, alt: "Boxed itel Energy inverters stacked in the shop", position: "30% 50%" }],
    specs: [
      ["Sizes", "4KVA, 6KVA and 8KVA hybrid"],
      ["Works with", "Batteries and solar panels"],
      ["We handle", "Sizing, installation, after-sales"],
    ],
  },
  {
    kicker: "Power from the sun · 04",
    name: "Solar panels",
    images: [{ src: rangeSolar, alt: "An installer fixing the last solar panel on a Lagos rooftop at golden hour" }],
    specs: [
      ["Pairs with", "Power Tank and itel inverters"],
      ["Saves", "Charges by day, cuts generator fuel"],
      ["We handle", "Roof installation and setup"],
    ],
  },
  {
    kicker: "Runs on solar · 05",
    name: "itel solar ceiling fan",
    images: [{ src: rangeFan, alt: "Box of the itel 24-inch AC/DC solar ceiling fan, 20W" }],
    specs: [
      ["Size", "24 inches (600mm)"],
      ["Power", "20W, AC or DC"],
      ["Runs from", "A 12V solar panel or 12V battery"],
      ["Also has", "Remote control"],
    ],
    studio: true,
  },
];

export const closer = [
  {
    title: "Power Go Pro",
    body: "USB and DC ports on top, and a leather strap to carry it from room to room.",
    image: closerGopro,
    alt: "Close-up of the top of an itel Power Go Pro: USB and DC ports, a round knob and the tan leather strap, with a phone cable plugged in",
  },
  {
    title: "Power Tank, front",
    body: "The display and touch buttons sit inside the blue ring, so you can see how much charge is left.",
    image: closerTankDisplay,
    alt: "Close-up of the itel Power Tank display, lit inside its blue ring at night",
  },
  {
    title: "Power Tank, back",
    body: "The output sockets sit under a cooling grille. Plug in your fan, TV and lights.",
    image: closerTankBack,
    alt: "Close-up of the back of the itel Power Tank: a mesh cooling grille above the output sockets",
  },
];

/* ------------------------------------------------------------------- phones */

export const filters = ["All", "Infinix", "Redmi & POCO", "Tecno", "Samsung", "realme", "itel", "Tablets", "Feature phones"] as const;
export type Filter = (typeof filters)[number];

export type Product = {
  brand: string;
  type: string;
  name: string;
  full: string;
  image: StaticImageData;
  groups: Filter[];
  alt?: string;
  position?: string;
};

/** In display order: the first ten show before “Show all”. */
export const products: Product[] = [
  { brand: "Redmi", type: "Smartphone", name: "Redmi Note 17 Pro Max 5G", full: "Redmi Note 17 Pro Max 5G", image: pNote17ProMax, groups: ["Redmi & POCO"] },
  { brand: "Infinix", type: "Smartphone", name: "HOT 70 Pro 5G+", full: "Infinix HOT 70 Pro 5G+", image: pHot70Pro, groups: ["Infinix"] },
  { brand: "Samsung", type: "Smartphone", name: "Galaxy A56 5G", full: "Samsung Galaxy A56 5G", image: pGalaxyA56, groups: ["Samsung"] },
  { brand: "Tecno", type: "Smartphone", name: "CAMON 50 Pro", full: "TECNO CAMON 50 Pro", image: pCamon50Pro, groups: ["Tecno"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi 17", full: "Redmi 17", image: pRedmi17, groups: ["Redmi & POCO"] },
  { brand: "Infinix", type: "Flip phone", name: "ZERO Flip", full: "Infinix ZERO Flip", image: pZeroFlip, groups: ["Infinix"] },
  { brand: "realme", type: "Smartphone", name: "C75x", full: "realme C75x", image: pC75x, groups: ["realme"] },
  { brand: "Samsung", type: "Smartphone", name: "Galaxy A15", full: "Samsung Galaxy A15", image: pGalaxyA15, groups: ["Samsung"] },
  { brand: "itel", type: "Smartphone", name: "A200S", full: "itel A200S", image: pItelA200s, groups: ["itel"] },
  { brand: "Infinix", type: "Tablet", name: "XPAD 30E", full: "Infinix XPAD 30E", image: pXpad30e, groups: ["Infinix", "Tablets"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi Note 17 Pro 5G", full: "Redmi Note 17 Pro 5G", image: pNote17Pro, groups: ["Redmi & POCO"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi Note 17", full: "Redmi Note 17", image: pNote17, groups: ["Redmi & POCO"] },
  { brand: "Tecno", type: "Smartphone", name: "CAMON 50", full: "TECNO CAMON 50", image: pCamon50, groups: ["Tecno"] },
  { brand: "Infinix", type: "Smartphone", name: "NOTE Edge 5G", full: "Infinix NOTE Edge 5G", image: pNoteEdge, groups: ["Infinix"] },
  { brand: "Infinix", type: "Smartphone", name: "HOT 70", full: "Infinix HOT 70", image: pHot70, groups: ["Infinix"] },
  { brand: "Tecno", type: "Smartphone", name: "SPARK 50", full: "TECNO SPARK 50", image: pSpark50, groups: ["Tecno"] },
  { brand: "POCO", type: "Smartphone", name: "POCO C85", full: "POCO C85", image: pPocoC85, groups: ["Redmi & POCO"] },
  { brand: "Samsung", type: "Smartphone", name: "Galaxy A06", full: "Samsung Galaxy A06", image: pGalaxyA06, groups: ["Samsung"] },
  { brand: "Infinix", type: "Smartphone", name: "SMART 20 and 20e", full: "Infinix SMART 20 or SMART 20e", image: pSmart20, groups: ["Infinix"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi 15C", full: "Redmi 15C", image: pRedmi15c, groups: ["Redmi & POCO"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi Note 15", full: "Redmi Note 15", image: pRedmiNote15, groups: ["Redmi & POCO"] },
  { brand: "Redmi", type: "Smartphone", name: "Redmi A7 Pro", full: "Redmi A7 Pro", image: pRedmiA7Pro, groups: ["Redmi & POCO"] },
  { brand: "POCO", type: "Smartphone", name: "POCO C71", full: "POCO C71", image: pPocoC71, groups: ["Redmi & POCO"] },
  { brand: "Tecno", type: "Smartphone", name: "POP 20", full: "TECNO POP 20", image: pPop20, groups: ["Tecno"] },
  { brand: "realme", type: "Smartphone", name: "C100i", full: "realme C100i", image: pC100i, groups: ["realme"] },
  { brand: "Redmi", type: "Tablet", name: "Redmi Pad 2 4G", full: "Redmi Pad 2 4G", image: pRedmiPad2, groups: ["Redmi & POCO", "Tablets"] },
  { brand: "Tecno", type: "Tablet", name: "MEGAPAD", full: "TECNO MEGAPAD", image: pMegapad, groups: ["Tecno", "Tablets"] },
  { brand: "Infinix", type: "Smartwatch", name: "XWATCH H4", full: "Infinix XWATCH H4", image: pXwatch, groups: ["Infinix"] },
  { brand: "HMD", type: "Feature phone", name: "HMD 150 Music", full: "HMD 150 Music", image: pHmd150, groups: ["Feature phones"] },
  {
    brand: "HMD",
    type: "Feature phones",
    name: "HMD 100, 101 and 102",
    full: "HMD 100, HMD 101 and HMD 102",
    image: pHmd10x,
    groups: ["Feature phones"],
    alt: "Retail boxes of the HMD 101, HMD 100 and HMD 102 feature phones",
  },
  {
    brand: "Nokia · Tecno · itel",
    type: "",
    name: "More feature phones",
    full: "feature phones",
    image: shopFeaturePhones,
    groups: ["Feature phones", "Tecno", "itel"],
    alt: "Shelves of boxed Nokia, Tecno and itel feature phones in the shop",
    position: "60% 40%",
  },
];

export const FIRST_PRODUCTS = 10;

export const categories: Category[] = [
  { num: "01", name: "Power stations", note: "Power Go Pro and Power Tank", href: "#range", image: rangeGopro },
  { num: "02", name: "Inverters", note: "4KVA, 6KVA and 8KVA hybrid", href: "#range", image: rangeInverters, position: "30% 50%" },
  { num: "03", name: "Solar panels", note: "Supplied and installed", href: "#range", image: rangeSolar },
  { num: "04", name: "Smartphones", note: "Infinix, Redmi, Tecno and more", href: "#phones", filter: "All", image: shopRedmi, position: "50% 40%" },
  { num: "05", name: "Tablets", note: "Redmi, Infinix and Tecno", href: "#phones", filter: "Tablets", image: pXpad30e, studio: true },
  { num: "06", name: "Feature phones", note: "HMD, Nokia, Tecno and itel", href: "#phones", filter: "Feature phones", image: pHmd10x, studio: true },
];

/* ------------------------------------------------------------------- inside */

export const gallery = [
  { src: shopTrust, alt: "The Trust Island phone wall: shelves of boxed Tecno, Redmi and Infinix phones", caption: "The phone wall", position: "50% 30%" },
  { src: shopWall, alt: "The shop counter, with Infinix and Nokia displays behind it", caption: "The counter", position: "50% 45%" },
  { src: shopMi, alt: "Cartons of itel Energy products stacked in front of the Xiaomi shelves", caption: "itel Energy stock", position: "50% 70%" },
  { src: shopRedmi, alt: "The Xiaomi display, stocked with Redmi and POCO phones", caption: "Redmi and POCO", position: "50% 40%" },
  { src: shopFeaturePhones, alt: "Shelves of boxed feature phones", caption: "Feature phones", position: "60% 40%" },
];

export const why = [
  { title: "Authorized itel Energy dealer", body: "You get genuine itel Energy products, and proper support behind them." },
  { title: "New and sealed", body: "Every phone, tablet and power product leaves the shop new, in its sealed box." },
  { title: "Installed by our team", body: "We size and install inverter and solar systems for homes, shops and offices." },
  { title: "Help after you buy", body: "Something not right? Call or WhatsApp us. After-sales support is part of what we do." },
];

export const steps = [
  { title: "Tell us what you need", body: "Call, WhatsApp or walk in. Name the product, or tell us what you want to keep running." },
  { title: "Get today’s price", body: "Call us and we’ll give you today’s price, and check it’s in stock before you make the trip." },
  { title: "Collect it, or book installation", body: "Pick it up from the shop. For inverters and solar, we arrange the installation with you." },
];

export const heroImage = heroLivingRoom;
export const phonesImage = shopTrust;
