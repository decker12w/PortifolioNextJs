import Style from "./Footer.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer className={Style.rodape}>
			<p>Feito com ❤️ por José Maia de Oliveira</p>
			<p>2024</p>
			<div className={Style.listLinks}>
				<FaGithub className={Style.icon}></FaGithub>
				<FaWhatsapp className={Style.icon}></FaWhatsapp>
				<FaLinkedin className={Style.icon}></FaLinkedin>
				<MdOutlineEmail className={Style.icon}></MdOutlineEmail>
			</div>
		</footer>
	);
}
