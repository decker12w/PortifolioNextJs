"use client";

import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Style from "./HamburguerMenu.module.css";
import NavLink from "./NavLink";

interface HamburguerMenuProps {
	link: LinkProps[];
}

export default function HamburguerMenu({ link }: HamburguerMenuProps) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<nav className={Style.SideBarNav}>
			<div className={Style.Nav}>
				{isOpen ? (
					<IoClose className={`${Style.icon} ${Style.close}`}></IoClose>
				) : (
					<GiHamburgerMenu className={`${Style.hamburguer} ${Style.icon}`} />
				)}
			</div>
			<div className={Style.NavWrapper}>
				{isOpen && (
					<ul className={Style.containerLinks}>
						{link.map((link, index) => {
							return <NavLink key={index} nome={link.nome} link={link.link}></NavLink>;
						})}
					</ul>
				)}
			</div>
			<div className={Style.containerIcons}>
				<FaGithub className={Style.icon}></FaGithub>
				<FaWhatsapp className={Style.icon}>/</FaWhatsapp>
				<FaLinkedin className={Style.icon}></FaLinkedin>
			</div>
		</nav>
	);
}
