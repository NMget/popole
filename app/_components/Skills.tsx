import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NextJsIcon } from "./icons/NextJsIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";
import { ReactIcon } from "./icons/ReactIcon";

type Props = {};

const SKILL_ICONS: any = {
  ReactIcon: ReactIcon,
  OpenAiIcon: OpenAiIcon,
  NextJsIcon: NextJsIcon,
  // Ajoute d'autres icônes ici au besoin
};

const SKILLS: SkillProps[] = [
  {
    logo: "ReactIcon",
    size: 52,
    name: "React",
    description:
      "En Javascript ou en TypeScript. Que ce soit coté client, coté serveur avec NexJS ou bien pour une apllication mobile hybride avec React Native.",
    rotate: true,
  },
  {
    logo: "NextJsIcon",
    size: 52,
    name: "NextJS",
    description:
      "Construit sur les dernières fonctionnalités de React et de Node JS, notamment les composants et les actions serveur. Il me permet de construire de magnifiques applications stylisées par Tailwind CSS.",
    rotate: false,
  },
  {
    logo: "OpenAiIcon",
    size: 52,
    name: "OpenAI",
    description:
      "Intégration d'OpenAi dans vos applications pour créer une expérience utilisateur parfaite.",
    rotate: true,
  },
];

type SkillProps = {
  logo: string;
  size: number;
  name: string;
  description: string;
  rotate: boolean;
};

const Skill = (props: SkillProps) => {
  const IconComponent = SKILL_ICONS[props.logo];
  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="flex-1">
        {IconComponent && (
          <IconComponent
            size={props.size}
            className={props.rotate ? "animate-spin" : ""}
            style={props.rotate ? { animationDuration: "10s" } : {}}
          />
        )}
      </div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {props.name}
      </h3>
      <p className="text-base">{props.description}</p>
    </div>
  );
};

export const Skills = (props: Props) => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler avec...
      </h2>
      <div className="flex justify-center items-center m-5">
        {SKILLS.map((skill, index) => (
          <Skill
            key={index}
            logo={skill.logo}
            size={skill.size}
            name={skill.name}
            description={skill.description}
            rotate={skill.rotate}
          />
        ))}
      </div>
    </Section>
  );
};
