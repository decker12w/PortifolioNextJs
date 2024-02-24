import Introduction from "../components/home/introducao/Introduction";
import ListaContatos from "../components/home/ListaContatos/ListaContatos";
import Style from "./Home.module.css";
import AnimatedBackground from "../components/formas/AnimatedBackground";
import LeftTriangle from "../components/formas/LeftTriangle";
import RightTriangle from "../components/formas/RightTriangle";

export default function Home() {
	return (
		<AnimatedBackground>
			<main className={Style.containerPrincipal}>
				<LeftTriangle></LeftTriangle>
				<Introduction></Introduction>
				<ListaContatos></ListaContatos>
				<RightTriangle></RightTriangle>
			</main>
		</AnimatedBackground>
	);
}
