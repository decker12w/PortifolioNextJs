import CardProjetos from "@/src/components/projetos/CardProjetos";
import Style from "./Projetos.module.css";
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { projetos } from "@/src/components/utils/Projetos";
import { IconType } from "react-icons";

export default function Projetos() {
	const iconMapping: { [key: string]: IconType } = {
		csharp: TbBrandCSharp,
		unity: FaUnity,
		pandas: SiPandas,
		python: FaPython
	};

	return (
		<div className={Style.containerPrincipal}>
			<div className={Style.containerBlocos}>
				<h1 className={Style.titlePage}>Destaque</h1>
				<div className={Style.containerDestaque}>
					{projetos.map((projeto, index) => (
						<CardProjetos
							key={index}
							title={projeto.nome}
							src={projeto.src}
							data={projeto.data}
							repositorio={projeto.repositorio}
							projeto={projeto.projeto}
							descricao={projeto.descricao}
						>
							<div className={Style.containerIcons}>
								{projeto.icons.map((icon, index) => {
									const IconComponent = iconMapping[icon];
									return <IconComponent key={index} className={Style.icon} />;
								})}
							</div>
						</CardProjetos>
					))}
				</div>
			</div>

			<div className={Style.containerBlocos}>
				<h1 className={Style.titlePage}>Todos os Projetos</h1>
				<div className={Style.containerDestaque}>
					{projetos.map((projeto, index) => (
						<CardProjetos
							key={index}
							title={projeto.nome}
							src={projeto.src}
							data={projeto.data}
							repositorio={projeto.repositorio}
							projeto={projeto.projeto}
							descricao={projeto.descricao}
						>
							<div className={Style.containerIcons}>
								{projeto.icons.map((icon, index) => {
									const IconComponent = iconMapping[icon];
									return <IconComponent key={index} className={Style.icon} />;
								})}
							</div>
						</CardProjetos>
					))}
				</div>
			</div>
		</div>
	);
}
