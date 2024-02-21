import Introduction from "../components/home/Introduction";
import SobreMim from "../components/home/SobreMim";
import Triangle from "../components/home/Triangle";
import Style from "./Home.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<main className={Style.containerPrincipal}>
			<div className={Style.container1}>
				<Triangle className={Style.leftTriangle}></Triangle>
				<Triangle className={Style.leftBottomTriangle}></Triangle>
			</div>
			<Introduction></Introduction>
			<SobreMim></SobreMim>
			<div className={Style.container2}>
				<FaGithub className={Style.icon}></FaGithub>
				<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
				<FaLinkedin className={Style.icon}></FaLinkedin>
			</div>

			<div className={Style.container3}>
				<Triangle className={Style.rightTriangle}></Triangle>
			</div>
		</main>
	);
}
