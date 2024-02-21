"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Style from "./Introduction.module.css";

export default function Introduction() {
	const variants = {
		hidden: { opacity: 0, x: -200 },
		visible: { opacity: 1, x: 0 }
	};

	return (
		<section className={`${Style.container1} ${Style.linha}`}>
			<div className={Style.container2}>
				<motion.h1
					className={Style.title1}
					initial="hidden"
					animate="visible"
					variants={variants}
					transition={{ ease: "easeOut", duration: 0.8 }}
				>
					<span className={Style.char}>J</span>osé Maia
				</motion.h1>
				<div className={Style.container3}>
					<motion.h2
						className={Style.title2}
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{ ease: "easeOut", duration: 1.2 }}
					>
						Full-Stack Developer
					</motion.h2>
					<motion.p
						className={Style.paragraph}
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{ ease: "easeOut", duration: 1.8 }}
					>
						Olá me chamo José Maia de Oliveira, sou um desenvolvedor Full-Stack junior
					</motion.p>
				</div>
			</div>
			<motion.div
				className={Style.container4}
				initial="hidden"
				animate="visible"
				variants={variants}
				transition={{ ease: "easeOut", duration: 2 }}
			>
				<Button text={"Download csv"}></Button>
				<Button text={"Entrar em contato"}></Button>
			</motion.div>
		</section>
	);
}
