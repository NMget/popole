import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = (props: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono text-primary border hover:bg-accent/50 transition-colors border-accent p-0.5 rounded-md"
      )}
      {...props}
    />
  );
};
