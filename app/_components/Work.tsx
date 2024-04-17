import Link from "next/link";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

export const Work = (props: WorkProps) => {
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
