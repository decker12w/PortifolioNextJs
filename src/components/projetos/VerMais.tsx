import { motion } from "framer-motion";
import Botao from "./Botao";
import Style from "./VerMais.module.css";

interface VerMaisProps {
	data: string;
}

export default function VerMais({ data }: VerMaisProps) {
	return (
		<motion.div
			className={Style.verMais}
			initial={{ opacity: 0, y: -40 }}
			animate={{ opacity: 1, y: 10 }}
			transition={{ duration: 0.5, delay: 0.1 }}
		>
			<p className={Style.data}>{data}</p>
			<Botao text={"Ver mais"}></Botao>
		</motion.div>
	);
}
