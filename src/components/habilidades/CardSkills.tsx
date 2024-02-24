import React from "react";
import Styles from "./CardSkills.module.css";

interface CardSkillsProps {
	children: React.ReactNode;
	title: string;
}

export default function CardSkills({ children, title }: CardSkillsProps) {
	return (
		<div className={Styles.card}>
			<h3 className={Styles.title}>{title}</h3>
			{children}
		</div>
	);
}
