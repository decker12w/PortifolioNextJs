import Style from "./Blocos.module.css";
import Style2 from "../../components/habilidades/CardSkills.module.css";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa";
import CardSkills from "./CardSkills";

export default function Linguagens() {
	return (
		<div className={Style.containerBlocos}>
			<h1 className={Style.title}>Linguagens</h1>
			<div className={Style.containerIcones}>
				<CardSkills title="Java">
					<FaJava className={Style2.icon}></FaJava>
				</CardSkills>
				<CardSkills title="JavaScript">
					<RiJavascriptFill className={Style2.icon}></RiJavascriptFill>
				</CardSkills>
				<CardSkills title="TypeScript">
					<SiTypescript className={Style2.icon}></SiTypescript>
				</CardSkills>
				<CardSkills title="Python">
					<FaPython className={Style2.icon}></FaPython>
				</CardSkills>
				<CardSkills title="C">
					<FaCopyright className={Style2.icon}></FaCopyright>
				</CardSkills>
				<CardSkills title="C++">
					<TbBrandCpp className={Style2.icon}></TbBrandCpp>
				</CardSkills>
				<CardSkills title="C#">
					<TbBrandCSharp className={Style2.icon}></TbBrandCSharp>
				</CardSkills>
			</div>
		</div>
	);
}
