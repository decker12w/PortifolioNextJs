"use client";

import Image from "next/image";
import { useState } from "react";
import Style from "./CardProjetos.module.css";
import VerMais from "./VerMais";
import Modal from "./Modal";

interface CardProjetosProps {
	children: React.ReactNode;
	title: string;
	src: string;
	data: string;
	repositorio: string;
	projeto: string;
	descricao: string;
}

export default function CardProjetos({
	children,
	title,
	src,
	data,
	repositorio,
	projeto,
	descricao
}: CardProjetosProps) {
	const [showVerMais, setShowVerMais] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	return (
		<>
			<div
				className={Style.container}
				onMouseEnter={() => setShowVerMais(true)}
				onMouseLeave={() => setShowVerMais(false)}
				onClick={() => setShowModal(true)}
			>
				{loading && <div className={Style.loading}>Loading...</div>}
				{error && <div className={Style.error}>Failed to load image</div>}
				<Image
					className={Style.image}
					quality={100}
					layout="fill"
					alt=""
					src={src}
					onLoadingComplete={() => setLoading(false)}
					onError={() => setError(true)}
				/>
				<div className={Style.containerTexto}>
					<h2 className={Style.title}>{title}</h2>
					{children}
				</div>
				{showVerMais && <VerMais data={data}></VerMais>}
			</div>
			<Modal
				title={title}
				src={src}
				data={data}
				open={showModal}
				repositorio={repositorio}
				projeto={projeto}
				descricao={descricao}
				onClose={() => setShowModal(false)}
			></Modal>
		</>
	);
}
