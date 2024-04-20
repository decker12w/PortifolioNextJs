"use client";

import Style from "./Button.module.css";
import { motion } from "framer-motion";

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

export default function Button({ onClick, text }: ButtonProps) {
	return (
		<motion.button
			onClick={onClick}
			className={Style.button}
			whileHover={{
				scale: 1.1
			}}
			whileTap={{
				scale: 0.9
			}}
		>
			{text}
		</motion.button>
	);
}
