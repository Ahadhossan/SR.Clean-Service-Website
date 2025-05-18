

/** @format */

import client1 from "../../src/assets/client-1.jpg";
import client2 from "../../src/assets/client-2.jpg";
import client3 from "../../src/assets/client-3.jpg";
import client4 from "../../src/assets/client-4.jpg";
import client5 from "../../src/assets/client-5.jpg";

export const Menus = [
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Services',
    subMenu: [
      {
        name: 'House Cleaning',
        path: '/house',
      },
      {
        name: 'Move In Out Cleaning',
        path: '/moveinout',
      },
      {
        name: 'Office Cleaning',
        path: '/office',
      },
      {
        name: 'Deep Cleaning',
        path: '/deep',
      },
    ],
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const services = [
  {
    name: "Home Cleaning",
    href: "#",
    image:
      "https://cache-landingpages.services.handy.com/assets/pages/services/homecleaner_image-fedc37eea62743f6da98a145bfc573e8e827c5e68ff13b935857c43fb7d97f37.png",
  },
  {
    name: "Move In or Out Cleaning",
    href: "#",
    image:
      "../../src/assets/move out.webp",
  },
  {
    name: "Office Cleaning",
    href: "#",
    image:
      "../../src/assets/move-in.jpg",
  },
];

export const features = [
  {
    title: "Expert Cleaners",
    description:
      "Expert cleaners delivering spotless, reliable, and professional service with attention to detail for homes, offices, and special cleanings.",
    image: "../../src/assets/feature-1.jpg", // Make sure these are in /public/img
  },
  {
    title: "Reasonable Prices",
    description:
      "We offer high-quality cleaning services at reasonable prices, ensuring great value, transparent rates, and satisfaction without compromising on excellence.",
    image: "../../src/assets/feature-2.jpg",
  },
  {
    title: "Quick & Best Services",
    description:
      "Enjoy quick, efficient, and top-quality cleaning services tailored to your schedule—delivering outstanding results with speed and reliability.",
    image: "../../src/assets/feature-3.jpg",
  },
];

export  const steps = [
  {
    image:
      "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f334f8023dd_vacuum-cleaner.svg",
    title: "Choose Your Cleaning Service",
    description:
      "Let us know what you would like cleaned, and we'll give you the best prices on the market.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f04698023de_calendar.svg",
    title: "Schedule Your Cleaning Time",
    description:
      "Our online booking system lets you choose a time most convenient to you.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f96388023df_home-run.svg",
    title: "Enjoy A Clean, Tidy Home",
    description:
      "Now you just sit back and relax, while we ensure your home is spotless, top-to-bottom.",
  },
];

export const uspList = [
  "Get the same trusted cleaner, every time",
  "Professionally trained employees (not sub-contractors)",
  "Background checked",
  "Bonded & Insured",
  "Eco-friendly green cleaning",
  "We bring all our own supplies & equipment",
  "Hundreds of 5-star reviews",
];

export const reasons = [
  {
    img: "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f0ae58023e5_plagiarism.svg",
    title: "We bring all our own supplies & equipment",
  },
  {
    img: "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f82e28023e6_cleaning.svg",
    title: "Enjoy the same trusted cleaners, every time you book",
  },
  {
    img: "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f84758023e0_ranking.svg",
    title: "We only use high quality safe, yet effective cleaning solutions",
  },
  {
    img: "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f908d8023e3_on-time.svg",
    title: "You have the option to provide your own custom supplies",
  },
  {
    img: "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f7a3f8023e4_security.svg",
    title: "100% secure online payments",
  },
];

export const serviceSections = [
  {
    title: "Bedrooms & common areas",
    image:
      "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f62ed261bb2058339f1f81b_livingroom.jpg",
    items: [
      "✔ Dust, wipe, and scrub all surfaces",
      "✔ Change sheets, make beds",
      "✔ We complete our 55 Point Checklist",
      "✔ Includes living room, kitchen & bathroom",
    ],
  },
  {
    title: "Bathrooms",
    image:
      "../../src/assets/blog-3.jpg",
    items: [
      "✔ Scrub & disinfect toilet & bath",
      "✔ Clean the sink, vanity, and floor",
      "✔ Fold towels & organize everything",
    ],
  },
  {
    title: "Extras",
    image:
      "https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f62ed256e3fe3f300e65858_laundry.jpg",
    items: [
      "✔ Inside cabinets",
      "✔ Inside fridge",
      "✔ Inside oven",
      "✔ Laundry wash dry",
      "✔ Interior windows",
    ],
  },
];

export const worksteps = [
  {
    img: "https://cache.hbfiles.com/assets/quotes/setup_plan_icon-607fb02252b207230fcd46af97ebe387ea9b1abcd9a2388afee952c977df54ee.svg",
    title: "Set Up a Cleaning Plan",
    desc: "Choose a weekly, biweekly, or monthly cleaning plan. We schedule your recurring bookings to make things easy - but don’t worry, you can always reschedule if things change.",
  },
  {
    img: "https://cache.hbfiles.com/assets/quotes/manage_online_icon-5bf2fc306e29670599471bdf284e9029f58d6e30a4e98befcde35429e3f882d7.svg",
    title: "Manage Everything Online",
    desc: "Rescheduling, contacting your professional, and tipping are just a tap away.",
  },
  {
    img: "https://cache.hbfiles.com/assets/quotes/pro_female_icon-35e6db8dd02d646511d284eff179afb07f142deec4f2acef027d71a303826ba5.svg",
    title: "Sit Back and Relax",
    desc: "An experienced, fully-equipped housekeeping professional will be there on time.",
  },
];

export const clients = [
  {
    img: client1,
    name: "Erick Jones",
    designation: "Customer, Canada",
    rating: 4.5,
    description:
      "Erick Jones from Canada praised SR.Clean’s service, highlighting their professionalism, attention to detail, and friendly staff. He highly recommends them for anyone seeking reliable and thorough cleaning.",
  },
  {
    img: client2,
    name: "Ben Smith",
    designation: "Customer, Canada",
    rating: 4.5,
    description:
      "Ben Smith from Canada shared his satisfaction with SR.Clean, praising their punctuality, excellent results, and courteous team. He confidently recommends their service for hassle-free and spotless cleaning every time.",
  },
  {
    img: client3,
    name: "Ellen Harper",
    designation: "Customer, Canada",
    rating: 4.5,
    description:
      "Ellen Harper from Canada commended SR.Clean for their outstanding service, noting the team’s efficiency, friendliness, and attention to detail. She was impressed and highly recommends them for home cleaning needs.",
  },
  {
    img: client4,
    name: "Jonathan Doe",
    designation: "Customer, Canada",
    rating: 4.5,
    description:
      "Jonathan Doe from Canada praised SR.Clean for their exceptional professionalism, quick service, and spotless results. He mentioned the team was courteous and efficient, and he would definitely use them again.",
  },
  {
    img: client5,
    name: "Emiley McArthur",
    designation: "Customer, Canada",
    rating: 4.5,
    description:
      "Emiley McArthur from Canada shared her delight with SR.Clean’s service, highlighting their thoroughness, friendly staff, and impressive attention to detail. She highly recommends them for reliable and top-quality cleaning.",
  },
];