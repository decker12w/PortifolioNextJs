import CardProjetos from "@/src/components/projetos/CardProjetos";
import Style from "./Projetos.module.css";
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export default function Projetos() {
	return (
		<div className={Style.containerPrincipal}>
			<div className={Style.containerBlocos}>
				<h1 className={Style.titlePage}>Destaque</h1>
				<div className={Style.containerDestaque}>
					<CardProjetos
						title={"Tá Chovendo Hambúrguer"}
						src={"/TaChovendo.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<TbBrandCSharp className={Style.icon}> </TbBrandCSharp>
							<FaUnity className={Style.icon}></FaUnity>
						</div>
					</CardProjetos>
					<CardProjetos
						title={"Trilhas do Medo"}
						src={"/TrilhasDoMedo.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<TbBrandCSharp className={Style.icon}> </TbBrandCSharp>
							<FaUnity className={Style.icon}></FaUnity>
						</div>
					</CardProjetos>
					<CardProjetos
						title={"Desempenho no Enem 2023"}
						src={"/RelatorioEnem.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<SiPandas className={Style.icon}></SiPandas>
							<FaPython className={Style.icon}></FaPython>
						</div>
					</CardProjetos>
				</div>
			</div>

			<div className={Style.containerBlocos}>
				<h1 className={Style.titlePage}>Todos os Projetos</h1>
				<div className={Style.containerDestaque}>
					<CardProjetos
						title={"TÁ CHOVENDO HAMBURGUER "}
						src={"/TaChovendo.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<TbBrandCSharp className={Style.icon}> </TbBrandCSharp>
							<FaUnity className={Style.icon}></FaUnity>
						</div>
					</CardProjetos>
					<CardProjetos
						title={"TRILHAS DO MEDO"}
						src={"/TrilhasDoMedo.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<TbBrandCSharp className={Style.icon}> </TbBrandCSharp>
							<FaUnity className={Style.icon}></FaUnity>
						</div>
					</CardProjetos>
					<CardProjetos
						title={"DESEMPENHO NO ENEM 2022"}
						src={"/RelatorioEnem.png"}
						data={"27/12/2003"}
					>
						<div className={Style.containerIcons}>
							<SiPandas className={Style.icon}></SiPandas>
							<FaPython className={Style.icon}></FaPython>
						</div>
					</CardProjetos>
				</div>
			</div>
		</div>
	);
}
