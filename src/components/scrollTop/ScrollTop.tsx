"use client";

import Style from "./ScrollTop.module.css";
import ScrollToTop from "react-scroll-up";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollTop() {
	return (
		<ScrollToTop showUnder={100} duration={800}>
			<div className={Style.link}>
				<FaArrowCircleUp className={Style.icon} />
			</div>
		</ScrollToTop>
	);
}
