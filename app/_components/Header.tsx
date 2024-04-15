import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary gap-1">Popol.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://le-cv-de-popol.netlify.app"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://le-cv-de-popol.netlify.app"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://le-cv-de-popol.netlify.app"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
