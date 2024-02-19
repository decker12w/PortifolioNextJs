import Link from "next/link";
import Style from "./NavLink.module.css";

interface LinkProps {
	nome: string;
	link: string;
}

export default function NavLink({ nome, link }: LinkProps) {
	return (
		<li>
			<Link className={Style.link} href={link}>
				{nome}
			</Link>
		</li>
	);
}
