import {ReactNode} from "react";
import {cn} from "@/lib/utils";

export function FrostedGlass({ children, className }: { children?: ReactNode, className?: string }) {
	return (
		<div className={cn(
			"bg-white/20 backdrop-blur-md rounded-lg shadow-lg shadow-black/10 border border-white/25",
			className
		)}>
			{children}
		</div>
	)
}