"use client";

import {useEffect, useState} from "react";
import {navLinks, personal} from "@/data/portfolio";
import styles from "./Navbar.module.css";
import {TbBrandGithubFilled} from "react-icons/tb";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);

			// Update active section based on scroll position
			const sections = navLinks.map((l) => l.href.replace("#", ""));
			for (const id of [...sections].reverse()) {
				const el = document.getElementById(id);
				if (el && window.scrollY >= el.offsetTop - 120) {
					setActiveSection(id);
					break;
				}
			}
		};

		window.addEventListener("scroll", onScroll, {passive: true});
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		const id = href.replace("#", "");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({behavior: "smooth"});
		}
	};

	return (
		<header
			className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
		>
			<div className={styles.inner}>
				<div></div>

				<nav className={styles.links} aria-label="Main navigation">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={(e) => handleNavClick(e, link.href)}
							className={`${styles.link} ${
								activeSection === link.href.replace("#", "")
									? styles.linkActive
									: ""
							}`}
						>
							{link.label}
						</a>
					))}
				</nav>

				<a href={"https://github.com/ThePandaOliver/portfolio/"} className={styles.iconBtn + " " + styles.githubButton}>
					<TbBrandGithubFilled/>
				</a>
			</div>
		</header>
	);
}
