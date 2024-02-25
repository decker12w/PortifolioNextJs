import Style from "./CardProjetos.module.css";
import Image from "next/image";

interface CardProjetosProps {
	children: React.ReactNode;
	title: string;
	src: string;
}

export default function CardProjetos({ children, title, src }: CardProjetosProps) {
	return (
		<div className={Style.container}>
			<Image className={Style.image} quality={100} fill alt="" src={src} />
			<div className={Style.containerTexto}>
				<h2 className={Style.title}>{title}</h2>
				{children}
			</div>
		</div>
	);
}
