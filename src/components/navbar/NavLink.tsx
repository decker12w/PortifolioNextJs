"use client";

import Link from "next/link";
import Style from "./NavLink.module.css";
import { usePathname } from "next/navigation";

interface LinkProps {
	nome: string;
	link: string;
}

export default function NavLink({ nome, link }: LinkProps) {
	const pathname = usePathname();

	return (
		<li>
			<Link className={`${Style.link}  ${pathname == link && Style.linkActive}`} href={link}>
				{nome}
			</Link>
		</li>
	);
}
