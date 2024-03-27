"use client";

import React from "react";
import { useRef, useEffect } from "react";

interface ModalProps {
	title: string;
	src: string;
	data: string;
	show: boolean;
}

export default function Modal({ title, src, data, show }: ModalProps) {
	const dialogRef = useRef<null | HTMLDialogElement>(null);

	useEffect(() => {
		if (show) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [show]);

	const closeModal = () => {
		dialogRef.current?.close();
	};

	const dialog: JSX.Element | null =
		show === true ? (
			<dialog ref={dialogRef}>
				<button onClick={closeModal}>x</button>
			</dialog>
		) : null;

	return dialog;
}
