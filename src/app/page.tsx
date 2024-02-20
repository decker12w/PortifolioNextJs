import Button from "../components/home/Button";
import Style from "./Home.module.css";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<main>
			<div className={Style.triangleDraw1}></div>
			<section className={Style.container1}>
				<div className={Style.container2}>
					<h1 className={Style.title1}>
						<span className={Style.char}>J</span>osé Maia
					</h1>
					<div className={Style.container3}>
						<h2 className={Style.title2}>Full-Stack Developer</h2>
						<p className={Style.paragraph}>
							Olá me chamo José Maia de Oliveira, sou um desenvolvedor Full-Stack junior
						</p>
					</div>
				</div>
				<div className={Style.container4}>
					<Button text={"Download csv"}></Button>
					<Button text={"Entrar em contato"}></Button>
				</div>
			</section>
			<div className={Style.container5}>
				<FaGithub className={Style.icon}></FaGithub>
				<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
				<FaLinkedin className={Style.icon}></FaLinkedin>
			</div>
			<div className={Style.triangleDraw2}></div>
		</main>
	);
}
