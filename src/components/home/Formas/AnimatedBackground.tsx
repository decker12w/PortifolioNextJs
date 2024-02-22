import React from "react";
import styles from "./AnimatedBackground.module.css";

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className={styles.area}>
				{children}
				<ul className={styles.circles}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default AnimatedBackground;
