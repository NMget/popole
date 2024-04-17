import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { NextJsIcon } from "./icons/NextJsIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";
import { ReactIcon } from "./icons/ReactIcon";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler avec...
      </h2>
      <div className="flex justify-center items-center m-5">
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <ReactIcon
              size={67}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-base">
            En <Code>Javascript</Code> ou en <Code>TypeScript</Code>. Que ce
            soit coté client, coté serveur avec <Code>NexJS</Code> ou bien pour
            une apllication mobile hybride avec <Code>React Native</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <NextJsIcon size={52} />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            NextJS
          </h3>
          <p className="text-base">
            Construit sur les dernières fonctionnalités de React et de{" "}
            <Code>NodeJS</Code>, notamment les composants et les actions
            serveur. Il me permet de construire de magnifiques applications
            stylisées par <Code>Tailwind CSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <OpenAiIcon
              size={52}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            OpenAI
          </h3>
          <p className="text-base">
            Intégration d'<Code>OpenAi</Code> dans vos applications pour créer
            une expérience utilisateur parfaite.
          </p>
        </div>
      </div>
    </Section>
  );
};
