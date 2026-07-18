import {personal} from "@/data/portfolio";
import styles from "./HeroSection.module.css";
import {TbArrowNarrowRight, TbBrandGithub} from "react-icons/tb";

export default function HeroSection() {
	return (
		<section id="hero" className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.badge}>
					<span className={styles.badgeDot}/>
					{personal.status}
				</div>

				<h1 className={styles.name}>{personal.name}</h1>
				<p className={styles.title}>{personal.title}</p>
				<p className={styles.tagline}>{personal.tagline}</p>
				<p className={"text-base text-[#B4C8F0BF] max-w-160 mx-auto mt-7"}>
					{
						personal.bio.map((value, index) =>
							<span key={index} className={"block mt-3"}>{value}</span>
						)
					}
				</p>

				<div className={styles.location}>
					<svg
						className={styles.locationIcon}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.8}
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 21.75S3.75 14.25 3.75 9a8.25 8.25 0 0116.5 0c0 5.25-8.25 12.75-8.25 12.75z"
						/>
						<circle cx="12" cy="9" r="2.25"/>
					</svg>
					{personal.location}
				</div>

				<div className={styles.actions}>
					<a
						href={personal.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className={`${styles.btn} ${styles.btnPrimary}`}
						id="hero-github-btn"
					>
						<TbBrandGithub/>
						GitHub
					</a>
					<a
						href="#projects"
						className={`${styles.btn} ${styles.btnSecondary}`}
						id="hero-projects-btn"
					>
						View Projects
						<TbArrowNarrowRight/>
					</a>
				</div>
			</div>
		</section>
	);
}
