import Link from "next/link";
import Style from "./BotaoModal.module.css";

interface BotaoProps {
	text: string;
	href: string;
}

export default function Botao({ text, href }: BotaoProps) {
	return (
		<Link href={href}>
			<button className={Style.botao}>{text}</button>
		</Link>
	);
}
