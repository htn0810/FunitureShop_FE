import { THeaderLink } from "../_types/general.type";
import Service1 from "@/app/_assets/images/service-promo-1.png";
import Service2 from "@/app/_assets/images/service-promo-2.png";
import Service3 from "@/app/_assets/images/service-promo-3.png";
import Service4 from "@/app/_assets/images/service-promo-4.png";

export const HeaderLinks: THeaderLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Service = [
  {
    title: "Free Shipping",
    desc: "Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!",
    img: Service1,
  },
  {
    title: "30 Days Money Back",
    desc: "100% satisfaction guaranteed, or get your money back within 30 days!",
    img: Service2,
  },
  {
    title: "Safe Payment",
    desc: "Pay with the world’s most popular and secure payment methods.",
    img: Service3,
  },
  {
    title: "Loyalty Customer",
    desc: "Card for the other 30% of their purchases at a rate of 1% cash back.",
    img: Service4,
  },
];
