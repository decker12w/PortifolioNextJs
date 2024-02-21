import Button from "./Button";
import Style from "./Introduction.module.css";

export default function Introduction() {
	return (
		<section className={`${Style.container1} ${Style.linha}`}>
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
	);
}
