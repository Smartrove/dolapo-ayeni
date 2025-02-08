export interface NavLinksType {
  navitem: string;
  subMenus?: { menu: string; link: string }[];
  link: string;
}

export const NavLinks = [
  {
    navitem: "Home",
    link: "/",
  },

  {
    navitem: "About Us",
    link: "/about",
  },
  {
    navitem: "Services",
    link: "/services",
  },
  {
    navitem: "Portfolio",
    link: "/portfolio",
  },
];
export const MobileNavLinks = [
  {
    navitem: "Home",
    link: "/",
  },

  {
    navitem: "About Us",
    link: "/about",
  },
  {
    navitem: "Services",
    link: "/services",
  },
  {
    navitem: "Portfolio",
    link: "/portfolio",
  },
];
