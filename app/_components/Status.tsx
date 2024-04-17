import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject } from "./SideProject";
import { Work } from "./Work";
import { CONTACTS } from "./datas/ContactsData";
import { SIDE_PROJECTS } from "./datas/SideProjectsData";
import { WORKS } from "./datas/WorksData";

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
