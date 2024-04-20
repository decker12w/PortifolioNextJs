import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Style from "./ListaContatos.module.css";
import Link from "next/link";
import { Links } from "../../utils/Links";

export default function ListaContatos() {
	return (
		<div className={Style.container}>
			<Link className={Style.link} href={Links.github}>
				<FaGithub className={Style.icon}></FaGithub>
			</Link>
			<Link className={Style.link} href={Links.whatsapp}>
				<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
			</Link>
			<Link className={Style.link} href={Links.linkedin}>
				{" "}
				<FaLinkedin className={Style.icon}></FaLinkedin>
			</Link>
		</div>
	);
}
