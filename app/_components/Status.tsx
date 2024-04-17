import { Card } from "@/components/ui/card";
import { ArrowUpRight, Code, LucideIcon, Palette, Server } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-y-2">
          <p className="text-lgsm text-muted-foreground">Mes side projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                logo={project.logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expérience.</p>
          <div className="flex flex-col gap-1">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contactez-moi.</p>
          <div className="flex flex-col gap-1">
            {CONTACTS.map((contact, index) => (
              <ContactCard
                key={index}
                image={contact.image}
                mediumImage={contact.mediumImage}
                name={contact.name}
                url={contact.url}
                description={contact.description}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

//------------------------------
const CONTACTS: ContactCardProps[] = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1134206420947054772/1229454354822467594/laurent7939_An_ultra_realistic_photo_of_a_developer_on_a_neutra_ade79bf6-30e5-4caa-b7e3-5735236fe207.png?ex=662fbd98&is=661d4898&hm=cac26c265c90e86312c12f963d65fb8479265e1410ddd04aa738c5cabfae3b96&",
    mediumImage:
      "https://cableriedaumesnilblog.com/wp-content/uploads/2022/10/linkedin-icon-logo-png-transparent.png",
    name: "Linkedin",
    url: "/",
    description: "popol@linkedin",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1134206420947054772/1229454354822467594/laurent7939_An_ultra_realistic_photo_of_a_developer_on_a_neutra_ade79bf6-30e5-4caa-b7e3-5735236fe207.png?ex=662fbd98&is=661d4898&hm=cac26c265c90e86312c12f963d65fb8479265e1410ddd04aa738c5cabfae3b96&",
    mediumImage:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png",
    name: "X-Twitter",
    url: "/",
    description: "@popol",
  },
];

type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  url: string;
  description: string;
};

const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url} className="flex flex-col gap-4 ">
      <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/50 transition-colors group p-2 rounded ">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />

          <img
            src={props.mediumImage}
            alt={props.mediumImage}
            className="w-6 h-6 absolute -bottom-2 -right-2 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-1 mr-2 goup-hover:-translate-y-1 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
//---------------------------

const SIDE_PROJECTS: SideProjectProps[] = [
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

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D4D0BAQFfKBwi9T5zeA/company-logo_100_100/0/1667393399930/esnl_ecole_suprieure_du_numrique_des_landes_logo?e=1721260800&v=beta&t=YA4p6GhKxaLZ6o4nBak3Rs_R48HhgHw4n5aiWTfsixc",
    title: "Ecole supérieure du numérique",
    role: "Intervenant - Consulant - Développement logiciel",
    date: "nov. 2020 - Aujourd'hui",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGoQm0HA1bCJA/company-logo_100_100/0/1631351065924?e=1721260800&v=beta&t=2VqTlGMZaJ2h85FTKeLiGBYE2z020OoZo7UW1UFMyZk",
    title: "ArtPhotoLimited",
    role: "Developpeur Ruby et React",
    date: "sept. 2019 - nov. 2020",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQHQEaNnM76Xuw/company-logo_100_100/0/1631356139153/huile_de_code_logo?e=1721260800&v=beta&t=mK8RerEZDTBgDx2VJGVIAY979-kHADp1NIaTEENlMRo",
    title: "Huile de Code",
    role: "Developpeur Javascript et React",
    date: "févr. 2019 - sept. 2019 ",
    url: "/",
  },
];

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
//---------------------------
type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="flex flex-col gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
    >
      <div className="inline-flex items-center gap-3">
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 object-contain rounded-lg"
        />

        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.role}</p>
        </div>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
