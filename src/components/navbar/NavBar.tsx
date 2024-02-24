import NavLink from "./NavLink";
import Style from "./NavBar.module.css";
import { CiDark } from "react-icons/ci";
import HamburguerMenu from "./HamburguerMenu";
interface LinkProps {
	nome: string;
	link: string;
}

const listaNavLinks: LinkProps[] = [
	{
		nome: "Home",
		link: "/"
	},
	{
		nome: "Sobre Mim",
		link: "/sobre"
	},
	{
		nome: "Habilidades",
		link: "/habilidades"
	},
	{
		nome: "Projetos",
		link: "/projetos"
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
			<HamburguerMenu link={listaNavLinks}></HamburguerMenu>
		</nav>
	);
}
