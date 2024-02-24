"use client";

import Button from "./Button";
import Style from "./Introduction.module.css";
import { Reveal } from "../../utils/Reveal";

export default function Introduction() {
	return (
		<section className={`${Style.container1} ${Style.linha}`}>
			<div className={Style.container2}>
				<Reveal>
					<h1 className={Style.title1}>
						<span className={Style.char}>J</span>osé Maia
					</h1>
				</Reveal>
				<div className={Style.container3}>
					<Reveal>
						<h2 className={Style.title2}>Full-Stack Developer</h2>
					</Reveal>
					<Reveal>
						<p className={Style.paragraph}>
							Olá me chamo José Maia de Oliveira, sou um desenvolvedor Full-Stack junior
						</p>
					</Reveal>
				</div>
			</div>
			<Reveal>
				<div className={Style.container4}>
					<Button text={"Download csv"}></Button>
					<Button text={"Entrar em contato"}></Button>
				</div>
			</Reveal>
			<div className={Style.line}></div>
		</section>
	);
}
