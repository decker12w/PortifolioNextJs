import Style from "./RightTriangle.module.css";
import Triangle from "./Triangle";

export default function RightTriangle() {
	return (
		<div className={Style.container}>
			<Triangle className={Style.rightTriangle}></Triangle>
		</div>
	);
}
