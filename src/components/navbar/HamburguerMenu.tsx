"use client";

import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Style from "./HamburguerMenu.module.css";
import NavLink from "./NavLink";
import DarkMode from "./DarkMode";

interface HamburguerMenuProps {
	link: LinkProps[];
}
export default function HamburguerMenu({ link }: HamburguerMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Limpeza ao desmontar
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			{!isOpen && (
				<GiHamburgerMenu onClick={handleOpen} className={`${Style.hamburguer} ${Style.icon}`} />
			)}
			<nav className={`${Style.SideBarNav} ${isOpen ? Style.open : ""}`}>
				<div className={Style.Nav}>
					<IoClose onClick={handleOpen} className={`${Style.icon}`}></IoClose>
					<DarkMode className={Style.icon}></DarkMode>
				</div>
				<div className={Style.NavWrapper}>
					<ul className={Style.containerLinks}>
						{link.map((link, index) => {
							return <NavLink key={index} nome={link.nome} link={link.link}></NavLink>;
						})}
					</ul>
				</div>
				<div className={Style.containerIcons}>
					<FaGithub className={Style.icon}></FaGithub>
					<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
					<FaLinkedin className={Style.icon}></FaLinkedin>
				</div>
			</nav>
		</>
	);
}
