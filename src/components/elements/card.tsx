import {ReactNode} from "react";
import {FrostedGlass} from "@/components/elements/frostedGlass/frostedGlass";

export default function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <FrostedGlass className={`bg-black rounded-xl shadow-md w-fit h-fit ${className ?? ""}`}>
      {children}
    </FrostedGlass>
  );
}