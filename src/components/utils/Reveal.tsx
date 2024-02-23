"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
	children: React.ReactNode;
	width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref} className={`relative ${width} overflow-hidden`}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 }
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
				<motion.div
					variants={{
						hidden: { left: 0 },
						visible: { left: "100%" }
					}}
					initial="hidden"
					animate={slideControls}
					transition={{ duration: 0.7, ease: "easeIn" }}
					style={{
						position: "absolute",
						top: 4,
						bottom: 4,
						left: 0,
						right: 0,
						background: "var(--purpleSoft)",
						zIndex: 200
					}}
				></motion.div>
			</motion.div>
		</div>
	);
};
