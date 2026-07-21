import React from "react";
import {FrostedGlass} from "@/components/elements/frostedGlass";
import {tv, VariantProps} from "tailwind-variants";

const button = tv({
	base: "px-4 py-2 inline-flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform",
	variants: {
		color: {
			primary: "bg-blue-400/80 border-blue-300/50 shadow-blue-700/25",
		}
	}
})

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
	children: React.ReactNode;
}

export default function Button({children, ...props}: ButtonProps) {
	return (
		<a>
			<FrostedGlass className={button(props)}>
				{children}
			</FrostedGlass>
		</a>
	)
}