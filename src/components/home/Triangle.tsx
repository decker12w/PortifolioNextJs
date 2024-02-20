import Style from "./Triangle.module.css";

interface TriangleProps {
	className?: string;
}

export default function Triangle({ className }: TriangleProps) {
	return <div className={`${Style.triangleDraw} ${className}`}></div>;
}
