import Style from "./Blocos.module.css";
import Style2 from "../../components/habilidades/CardSkills.module.css";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import CardSkills from "./CardSkills";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";

export default function Linguagens() {
	return (
		<div className={Style.containerBlocos}>
			<h1 className={Style.title}>Frontend</h1>
			<div className={Style.containerIcones}>
				<CardSkills title="Html">
					<FaHtml5 className={`${Style2.icon}`}></FaHtml5>
				</CardSkills>
				<CardSkills title="Css">
					<IoLogoCss3 className={Style2.icon}></IoLogoCss3>
				</CardSkills>
				<CardSkills title="React">
					<FaReact className={Style2.icon}></FaReact>
				</CardSkills>
				<CardSkills title="NextJs">
					<TbBrandNextjs className={Style2.icon}></TbBrandNextjs>
				</CardSkills>
				<CardSkills title="Angular">
					<FaAngular className={Style2.icon}></FaAngular>
				</CardSkills>
				<CardSkills title="Tailwind">
					<SiTailwindcss className={Style2.icon}></SiTailwindcss>
				</CardSkills>
				<CardSkills title="Css in Js">
					<SiStyledcomponents className={Style2.icon}></SiStyledcomponents>
				</CardSkills>
				<CardSkills title="React Testing">
					<SiTestinglibrary className={Style2.icon}></SiTestinglibrary>
				</CardSkills>
				<CardSkills title="Redux">
					<SiRedux className={Style2.icon}></SiRedux>
				</CardSkills>
				<CardSkills title="Sass">
					<FaSass className={Style2.icon}></FaSass>
				</CardSkills>
				{/* <CardSkills title="Storybook"> */}
				{/* 	<SiStorybook className={Style2.icon}></SiStorybook> */}
				{/* </CardSkills> */}
				{/* <CardSkills title="React Query"> */}
				{/* 	<SiReactquery className={Style2.icon}></SiReactquery> */}
				{/* </CardSkills> */}
			</div>
		</div>
	);
}
