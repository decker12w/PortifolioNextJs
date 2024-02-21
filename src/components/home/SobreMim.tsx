import Style from "./SobreMim.module.css";
import Image from "next/image";
export default function SobreMim() {
	return (
		<section id="sobre" className={Style.containerSobreMim}>
			<div className={Style.containerTexto}>
				<h1 className={Style.titleSobreMim}>Sobre Mim</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repellat assumenda,
					animi praesentium dolorem vero repudiandae qui quia excepturi, cumque earum
					recusandae vitae amet asperiores dolore! Praesentium quasi minus expedita? Obcaecati,
					dolorem! Ex eum debitis fugit mollitia nostrum. Alias tempore natus et, voluptatibus
					id quod sunt, tenetur repudiandae voluptatum quasi iste veritatis repellendus
					quisquam. Vel voluptatibus animi magni nostrum amet? Accusantium omnis officiis
					commodi culpa amet, velit sit molestiae delectus eligendi autem, necessitatibus
					fugiat perspiciatis incidunt asperiores quod fugit inventore porro. Excepturi
				</p>
			</div>
			<div className={Style.circle}>
				<Image src="/fotoPerfil.jpeg" alt="Circle Image" width={500} height={500} />
			</div>
		</section>
	);
}
