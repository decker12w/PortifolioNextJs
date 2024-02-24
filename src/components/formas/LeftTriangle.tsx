import Style from "./LeftTriangle.module.css";
import Triangle from "./Triangle";

export default function LeftTriangle() {
	return (
		<div className={Style.container}>
			<Triangle className={Style.leftTriangle}></Triangle>
			<Triangle className={Style.leftBottomTriangle}></Triangle>
		</div>
	);
}
