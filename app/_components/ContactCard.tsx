import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  url: string;
  description: string;
};

export const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url} className="flex flex-col gap-4 ">
      <Card className="bg-accent/10 flex items-center gap-4 hover:bg-accent/50 transition-colors group p-2 rounded ">
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
