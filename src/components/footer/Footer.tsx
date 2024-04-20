import Link from "next/link";
import Style from "./Footer.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Links } from "../utils/Links";

export default function Footer() {
	return (
		<footer className={Style.rodape}>
			<p>Feito com ❤️ por José Maia de Oliveira</p>
			<p>2024</p>
			<div className={Style.listLinks}>
				<Link href={Links.github} passHref>
					<FaGithub className={Style.icon}></FaGithub>
				</Link>
				<Link href={Links.whatsapp}>
					<FaWhatsapp className={Style.icon}></FaWhatsapp>
				</Link>
				<Link href={Links.linkedin}>
					<FaLinkedin className={Style.icon}></FaLinkedin>
				</Link>
				{/* <MdOutlineEmail className={Style.icon}></MdOutlineEmail> */}
			</div>
		</footer>
	);
}
