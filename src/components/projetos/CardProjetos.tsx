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
}

export default function CardProjetos({ children, title, src, data }: CardProjetosProps) {
	const [showVerMais, setShowVerMais] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// const toggleModal = () => setShowModal(prev => !prev);

	return (
		<>
			<div
				className={Style.container}
				onMouseEnter={() => setShowVerMais(true)}
				onMouseLeave={() => setShowVerMais(false)}
				onClick={() => setShowModal(true)}
			>
				<Image className={Style.image} quality={100} layout="fill" alt="" src={src} />
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
				onClose={() => setShowModal(false)}
			></Modal>
		</>
	);
}
