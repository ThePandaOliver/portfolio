import {personal} from "@/data/portfolio";
import Button from "@/components/elements/button";
import {TbArrowNarrowRight, TbBrandGithub} from "react-icons/tb";

export default function HeroSection() {
	return (
		<div className={"h-screen grid grid-rows-[1fr_30rem]"}>

			{/* Profile */}
			<div className={"mx-auto container flex gap-10 items-center"}>
				{/* Profile Image */}
				<div className={"rounded-full size-60 bg-gray-200"}>

				</div>

				{/* Profile Info */}
				<div>
					<h1 className={"text-4xl font-extrabold mb-2 w-fit text-transparent bg-clip-text bg-linear-120 from-indigo-200 via-indigo-400 to-indigo-600"}>{personal.name}</h1>
					<h2 className={"text-2xl font-bold mb-4"}>{personal.title}</h2>
					<h3 className={"text-xl font-bold mb-2"}>{personal.tagline}</h3>
					<p className={"text-xl max-w-200"}>
						{
							personal.bio.map((item, index) => <span key={index} className={"inline-block mb-1"}>{item}</span>)
						}
					</p>
				</div>
			</div>

			{/* Bottom content */}
			<div>
				<div className={"container"}>
					<Button><TbBrandGithub/> Github Profile</Button>
					<Button><TbBrandGithub/> Codebase</Button>
					<Button>Projects <TbArrowNarrowRight/></Button>
				</div>

			</div>

		</div>
	)
}
