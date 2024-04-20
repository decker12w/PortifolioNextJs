"use client";

import React, { useRef, useLayoutEffect } from "react";
import Style from "./EntrarEmContatoModal.module.css";
import { IoIosClose } from "react-icons/io";
import { contato } from "../../utils/Contato";
import Link from "next/link";
import { Links } from "../../utils/Links";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

interface ModalProps {
	open: boolean;
	onClose: () => void;
}

export default function EntrarEmContato({ open, onClose }: ModalProps) {
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
				<h1 className={Style.title}>Contatos</h1>
				<ul className={Style.containerContatos}>
					<li className={Style.containerInfo}>
						<IoIosCall className={Style.icons}></IoIosCall>
						{contato.telefone}
					</li>
					<li className={Style.containerInfo}>
						<IoIosMail className={Style.icons}></IoIosMail>
						{contato.email}
					</li>
					<li className={Style.containerInfo}>
						<IoLogoGithub className={Style.icons}></IoLogoGithub>
						<Link className={Style.links} href={Links.github}>
							{contato.github}
						</Link>
					</li>
					<li className={Style.containerInfo}>
						<IoLogoLinkedin className={Style.icons}></IoLogoLinkedin>
						<Link className={Style.links} href={Links.linkedin}>
							{contato.linkedin}
						</Link>
					</li>
				</ul>
			</div>
		</dialog>
	) : null;
}
