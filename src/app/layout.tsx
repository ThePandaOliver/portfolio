import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";

const geist = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Oliver Froberg — Software Developer & Minecraft Mod Author",
	description:
		"Portfolio of Oliver Froberg, a Danish software developer and Minecraft mod author with over 30 million downloads on CurseForge and Modrinth. Partnered with Kinetic Hosting.",
	keywords: [
		"Oliver Froberg",
		"The Panda Oliver",
		"Minecraft mod developer",
		"software developer",
		"portfolio",
		"CurseForge",
		"Modrinth",
		"Kinetic Hosting",
	],
	authors: [{name: "Oliver Froberg"}],
	openGraph: {
		title: "Oliver Froberg — Software Developer & Minecraft Mod Author",
		description:
			"30M+ downloads. software developer & Minecraft mod author from Denmark.",
		type: "website",
	},
};

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={geist.variable}>
		<body>{children}</body>
		</html>
	);
}
