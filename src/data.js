import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: "25 Apr 2024",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: "6 days",
    price: "from $2100",
  },

  {
    id: 2,
    img: img2,
    date: "05 May 2024",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: "12 days",
    price: "from $2800",
  },

  {
    id: 3,
    img: img3,
    date: "29 May 2024",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: "3 days",
    price: "from $1900",
  },

  {
    id: 4,
    img: img4,
    date: "05 Jun 2024",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    days: "9 days",
    price: "from $3500",
  },
];
