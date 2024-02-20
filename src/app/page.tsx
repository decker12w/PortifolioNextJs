import Introduction from "../components/home/Introduction";
import Triangle from "../components/home/Triangle";
import Style from "./Home.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<main>
			<Triangle className={Style.leftTriangle}></Triangle>
			<Introduction></Introduction>
			<div className={Style.container5}>
				<FaGithub className={Style.icon}></FaGithub>
				<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
				<FaLinkedin className={Style.icon}></FaLinkedin>
			</div>
			<Triangle className={Style.rightTriangle}></Triangle>
		</main>
	);
}
