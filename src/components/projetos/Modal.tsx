"use client";

import React, { useRef, useLayoutEffect } from "react";
import Style from "./Modal.module.css";
import Image from "next/image";
import BotaoModal from "./BotaoModal";
import { IoIosClose } from "react-icons/io";

interface ModalProps {
	title: string;
	src: string;
	data: string;
	open: boolean;
	repositorio: string;
	projeto: string;
	descricao: string;
	onClose: () => void;
}

export default function Modal({
	title,
	src,
	data,
	open,
	onClose,
	repositorio,
	projeto,
	descricao
}: ModalProps) {
	const dialogRef = useRef<null | HTMLDialogElement>(null);

	useLayoutEffect(() => {
		if (open && !dialogRef.current?.open) {
			dialogRef.current?.showModal();
		} else if (!open && dialogRef.current?.open) {
			dialogRef.current?.close();
		}
	}, [open]);

	return open ? (
		<dialog
			className={Style.modal}
			ref={dialogRef}
			onClick={e => {
				const dialogDimensions = e.currentTarget.getBoundingClientRect();

				if (
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
				) {
					onClose();
				}
			}}
		>
			<IoIosClose onClick={onClose} className={Style.close}></IoIosClose>
			<div className={Style.containerPrincipal}>
				<div className={Style.containerImage}>
					<Image
						className={Style.image}
						quality={100}
						width={800}
						height={800}
						alt=""
						src={src}
					></Image>
					<div className={Style.containerBotoes}>
						<BotaoModal href={projeto} text={"Acessar projeto"}></BotaoModal>
						<BotaoModal href={repositorio} text={"Acessar repositório"}></BotaoModal>
					</div>
				</div>
				<div className={Style.containerTexto}>
					<h1 className={Style.title}>{title}</h1>
					<p className={Style.paragraph}>{descricao}</p>
					<p className={Style.date}>{data}</p>
				</div>
			</div>
		</dialog>
	) : null;
}
