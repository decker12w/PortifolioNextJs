"use client";

import { useState } from "react";
import Style from "./CardProjetos.module.css";
import Image from "next/image";
import VerMais from "./VerMais";

interface CardProjetosProps {
	children: React.ReactNode;
	title: string;
	src: string;
	data: string;
}

export default function CardProjetos({ children, title, src, data }: CardProjetosProps) {
	const [showVerMais, setShowVerMais] = useState(false);

	return (
		<div
			className={Style.container}
			onMouseEnter={() => setShowVerMais(true)}
			onMouseLeave={() => setShowVerMais(false)}
		>
			<Image className={Style.image} quality={100} layout="fill" alt="" src={src} />
			<div className={Style.containerTexto}>
				<h2 className={Style.title}>{title}</h2>
				{children}
			</div>
			{showVerMais && <VerMais data={data}></VerMais>}
		</div>
	);
}
