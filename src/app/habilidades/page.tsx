import Style from "./Habilidades.module.css";
import Frontend from "@/src/components/habilidades/Frontend";
import Backend from "@/src/components/habilidades/Backend";
import Linguagens from "@/src/components/habilidades/Linguagens";
import DevOps from "@/src/components/habilidades/DevOps";

export default function Habilidades() {
	return (
		<>
			<h1 className={Style.titlePage}>Tecnologias Dominadas</h1>

			<div className={Style.containerPrincipal}>
				<Frontend></Frontend>
				<Backend></Backend>
				<Linguagens></Linguagens>
				<DevOps></DevOps>
			</div>
		</>
	);
}
