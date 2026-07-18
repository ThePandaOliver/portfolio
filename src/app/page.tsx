import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ModdingSection from "@/components/ModdingSection/ModdingSection";
import PartnershipSection from "@/components/PartnershipSection/PartnershipSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Navbar/>
			<main>
				<HeroSection/>
				<div style={{maxWidth: "1100px", margin: "0 auto"}}>
					<SkillsSection/>
					<ProjectsSection/>
					<ModdingSection/>
					<PartnershipSection/>
				</div>
			</main>
			<Footer/>
		</>
	);
}
