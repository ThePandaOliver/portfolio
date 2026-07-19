import {ReactNode} from "react";

export default function Button(
	{children}: {children: ReactNode}
) {
	return (
		<a className={"px-4 py-2 text-white inline-flex rounded-md border-2 border-gray-500"}>
			{children}
		</a>
	)
}