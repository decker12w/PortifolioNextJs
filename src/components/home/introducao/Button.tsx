"use client";

import Style from "./Button.module.css";
import { motion } from "framer-motion";

interface ButtonProps {
	text: string;
}

export default function Button({ text }: ButtonProps) {
	return (
		<motion.button
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
