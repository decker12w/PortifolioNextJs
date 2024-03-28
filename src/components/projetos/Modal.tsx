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
	onClose: () => void;
}

export default function Modal({ title, src, data, open, onClose }: ModalProps) {
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
						<BotaoModal text={"Acessar projeto"}></BotaoModal>
						<BotaoModal text={"Acessar repositório"}></BotaoModal>
					</div>
				</div>
				<div className={Style.containerTexto}>
					<h1 className={Style.title}>{title}</h1>
					<p className={Style.paragraph}>
						lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus eget
						libero tincidunt pharetra. lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
						labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
						anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
						aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
						pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
						commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
						proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
						Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate
						laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. lorem
						ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<p className={Style.date}>{data}</p>
				</div>
			</div>
		</dialog>
	) : null;
}
