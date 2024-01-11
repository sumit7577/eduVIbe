import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#about",
  },
  {
    id: 2.1,
    title: "Courses",
    newTab: false,
    path: "/course",
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path:"/blog"
  }
];

export default menuData;
