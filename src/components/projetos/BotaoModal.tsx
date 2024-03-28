import Style from "./BotaoModal.module.css";

interface BotaoProps {
	text: string;
}

export default function Botao({ text }: BotaoProps) {
	return <button className={Style.botao}>{text}</button>;
}
