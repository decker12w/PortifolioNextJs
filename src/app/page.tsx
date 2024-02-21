import Introduction from "../components/home/introducao/Introduction";
import ListaContatos from "../components/home/ListaContatos/ListaContatos";
import SobreMim from "../components/home/SobreMim/SobreMim";
import Triangle from "../components/home/Formas/Triangle";
import Style from "./Home.module.css";

export default function Home() {
	return (
		<main className={Style.containerPrincipal}>
			<div className={Style.container1}>
				<Triangle className={Style.leftTriangle}></Triangle>
				<Triangle className={Style.leftBottomTriangle}></Triangle>
			</div>
			<Introduction></Introduction>
			<SobreMim></SobreMim>
			<ListaContatos></ListaContatos>

			<div className={Style.container3}>
				<Triangle className={Style.rightTriangle}></Triangle>
			</div>
		</main>
	);
}
