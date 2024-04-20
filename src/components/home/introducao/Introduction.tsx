"use client";

import Button from "./Button";
import Style from "./Introduction.module.css";
import { Reveal } from "../../utils/Reveal";
import Link from "next/link";
import { useState } from "react";
import EntrarEmContato from "./EntrarEmContatoModal";

export default function Introduction() {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<>
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
						<Link
							href={
								"https://www.canva.com/design/DAGBBupGLns/et2_skjpi9X3yesZkwP10A/edit?utm_content=DAGBBupGLns&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
							}
						>
							<Button text={"Download cv"}></Button>
						</Link>
						<Button onClick={() => setShowModal(true)} text={"Entrar em contato"}></Button>
					</div>
				</Reveal>
				<div className={Style.line}></div>
			</section>
			<EntrarEmContato open={showModal} onClose={() => setShowModal(false)}></EntrarEmContato>
		</>
	);
}
