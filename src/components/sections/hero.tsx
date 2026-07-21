import {personal} from "@/data/portfolio";
import Button from "@/components/elements/button";
import {TbArrowNarrowRight, TbBrandGithub, TbCode, TbCodeblock} from "react-icons/tb";
import Card from "@/components/elements/card";

export default function HeroSection() {
	return (
		<div className={"h-screen flex flex-col justify-center"}>

			<div className={"mx-auto container grid grid-cols-[50%_30%_auto] gap-4"}>
				{/* Profile */}
				<div className={"flex gap-10 items-center py-20"}>
					{/* Profile Image */}
					<div className={"rounded-full size-60 bg-gray-200"}>

					</div>

					{/* Profile Info */}
					<div>
						<h1 className={"text-4xl font-extrabold mb-2 w-fit text-transparent bg-clip-text bg-linear-120 from-indigo-200 via-indigo-400 to-indigo-600"}>{personal.name}</h1>
						<h2 className={"text-2xl font-bold mb-4"}>{personal.title}</h2>
						<h3 className={"text-xl font-bold mb-2"}>{personal.tagline}</h3>
					</div>
				</div>

				{/* Bio */}
				<Card className={"p-4"}>
					<p className={"text-xl max-w-200"}>
						{
							personal.bio.map((item, index) => <span key={index} className={"inline-block mb-1"}>{item}</span>)
						}
					</p>
				</Card>
			</div>

			{/* Bottom content */}
			<div>
				<div className={"container mx-auto flex gap-8 justify-center"}>
					<Button><TbBrandGithub/> Github Profile</Button>
					<Button><TbCode/> Codebase</Button>
					<Button>View Projects <TbArrowNarrowRight/></Button>
				</div>

			</div>

		</div>
	)
}
