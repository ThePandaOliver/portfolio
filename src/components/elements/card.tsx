import {ReactNode} from "react";
import {FrostedGlass} from "@/components/elements/frostedGlass";
import {cn} from "@/lib/utils";

export default function Card({ children, className }: { children?: ReactNode, className?: string }) {
  return (
    <FrostedGlass className={cn(
      "rounded-xl w-fit h-fit",
      className
    )}>
      {children}
    </FrostedGlass>
  );
}