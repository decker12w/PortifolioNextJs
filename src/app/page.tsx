import Introduction from "../components/home/introducao/Introduction";
import ListaContatos from "../components/home/ListaContatos/ListaContatos";
import SobreMim from "../components/home/SobreMim/SobreMim";
import Style from "./Home.module.css";
import AnimatedBackground from "../components/home/Formas/AnimatedBackground";
import LeftTriangle from "../components/home/Formas/LeftTriangle";
import RightTriangle from "../components/home/Formas/RightTriangle";

export default function Home() {
	return (
		<AnimatedBackground>
			<main className={Style.containerPrincipal}>
				<LeftTriangle></LeftTriangle>
				<Introduction></Introduction>
				<SobreMim></SobreMim>
				<ListaContatos></ListaContatos>
				<RightTriangle></RightTriangle>
			</main>
		</AnimatedBackground>
	);
}
