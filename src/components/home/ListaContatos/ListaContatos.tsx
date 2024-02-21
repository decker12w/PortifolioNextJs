import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Style from "./ListaContatos.module.css";

export default function ListaContatos() {
	return (
		<div className={Style.container}>
			<FaGithub className={Style.icon}></FaGithub>
			<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
			<FaLinkedin className={Style.icon}></FaLinkedin>
		</div>
	);
}
