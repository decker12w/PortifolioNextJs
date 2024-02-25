"use client";

import { Reveal } from "../utils/Reveal";
import Style from "./SobreMim.module.css";
import Image from "next/image";
export default function SobreMim() {
	return (
		<section id="sobre" className={Style.containerSobreMim}>
			<div className={Style.containerTexto}>
				<Reveal>
					<h1 className={Style.titleSobreMim}>Sobre Mim</h1>
				</Reveal>
				<Reveal>
					<p>
						Meu nome é José Maia de Oliveira, tenho 20 anos e desde 2020 venho me dedicando ao
						estudo da programação. Durante a pandemia, tive a oportunidade de aprofundar meu
						conhecimento nessa área, começando pela lógica de programação e progredindo para
						as tecnologias web. Em 2023, ingressei no curso de Bacharelado em Ciências da
						Computação na Universidade Federal de São Carlos (UFSCar), onde tenho aprimorado
						minhas habilidades e adquirido novos conhecimentos. Atualmente, estou focando meus
						estudos tanto na área de Backend quanto em DevOps, buscando dominar as tecnologias
						associadas a essas áreas. Meu objetivo é consolidar esses conhecimentos e me
						tornar um desenvolvedor de software reconhecido no mercado.
					</p>
				</Reveal>
			</div>

			<Reveal>
				<div className={Style.circle}>
					<Image src="/fotoPerfil.jpeg" alt="Circle Image" width={500} height={500} />
				</div>
			</Reveal>
		</section>
	);
}
