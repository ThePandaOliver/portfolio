import {ReactNode} from "react";
import style from "./effects.module.css"

export function FrostedGlass(
	{
		children,
		blur = "16px",
		className
	}: {
		children?: ReactNode,
		blur?: string
		className?: string
	}
) {
	return (
		<div className={style.frostedGlass + className}>
			<div className={style.frostedGlassBackdrop} style={{backdropFilter: `blur(${blur})`}}></div>
			{children}
		</div>
	)
}