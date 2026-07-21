import {ReactNode} from "react";

export function FrostedGlass({ children, className }: { children: ReactNode, className?: string }) {
	return (
		<div className={`bg-white/20 backdrop-blur-md rounded-lg shadow-lg shadow-black/10 border border-t-2 border-l-2 border-white/25  ${className ?? ""}`}>
			{children}
		</div>
	)
}