"use client";

import { motion } from "framer-motion";
import Style from "./Triangle.module.css";
interface TriangleProps {
	className?: string;
}

export default function Triangle({ className }: TriangleProps) {
	return (
		<motion.div
			className={`${Style.triangleDraw} ${className}`}
			animate={{}}
			transition={{
				duration: 2, // Duração da animação
				repeat: Infinity, // Loop infinito
				ease: "easeInOut" // Tipo de easing
			}}
		></motion.div>
	);
}
