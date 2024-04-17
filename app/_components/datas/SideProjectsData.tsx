import { Code, Palette, Server } from "lucide-react";
import { SideProjectProps } from "../SideProject";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logo: Code,
    title: "React",
    description:
      "Une bibliothèque JavaScript libre, maintenue par Meta ainsi que par une communauté de développeurs individuels et d'entreprises",
    url: "/",
  },
  {
    logo: Server,
    title: "NextJS",
    description:
      " Framework open source s'appuyant sur React et sur la technologie Node.js",
    url: "/",
  },
  {
    logo: Palette,
    title: "Tailwind.css",
    description:
      "Framework CSS open source qui, contrairement à d'autres frameworks CSS comme Bootstrap, ne procure pas de classes prédéfinies pour des éléments tels que des boutons ou des tables.",
    url: "/",
  },
];
