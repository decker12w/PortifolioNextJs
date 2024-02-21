import NavLink from "./NavLink";
import Style from "./NavBar.module.css";
import { CiDark } from "react-icons/ci";

interface listaLinks {
	nome: string;
	link: string;
}

const listaNavLinks: listaLinks[] = [
	{
		nome: "Home",
		link: "/"
	},
	{
		nome: "Sobre Mim",
		link: "#sobre"
	},
	{
		nome: "Projetos",
		link: "/projetos"
	},
	{
		nome: "Habilidades",
		link: "/Habilidades"
	},
	{
		nome: "Contato",
		link: "/contato"
	}
];

export default function NavBar() {
	return (
		<nav className={Style.containerNav}>
			<h1 className={Style.Logo}>
				{"<"}
				<span className={Style.LogoSecondChar}>J</span>
				{"/>"}
			</h1>
			<ul className={Style.container}>
				{listaNavLinks.map((link, index) => {
					return <NavLink key={index} nome={link.nome} link={link.link}></NavLink>;
				})}
			</ul>
			<CiDark className={Style.icon} />
		</nav>
	);
}
