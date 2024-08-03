import Style from "./Blocos.module.css";
import Style2 from "../../components/habilidades/CardSkills.module.css";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFastify } from "react-icons/si";
import { SiApache } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import CardSkills from "./CardSkills";

export default function Backend() {
	return (
		<div className={Style.containerBlocos}>
			<h1 className={Style.title}>Backend</h1>
			<div className={Style.containerIcones}>
				<CardSkills title="Node.js">
					<FaNodeJs className={Style2.icon}></FaNodeJs>
				</CardSkills>
				<CardSkills title="Spring">
					<SiSpring className={Style2.icon}></SiSpring>
				</CardSkills>
				<CardSkills title="Fastify">
					<SiFastify className={Style2.icon}></SiFastify>
				</CardSkills>
				<CardSkills title="Nest.js">
					<SiNestjs className={Style2.icon}></SiNestjs>
				</CardSkills>
				<CardSkills title="Express">
					<SiExpress className={Style2.icon}></SiExpress>
				</CardSkills>
				<CardSkills title="PostgreSQL">
					<BiLogoPostgresql className={Style2.icon}></BiLogoPostgresql>
				</CardSkills>
				<CardSkills title="MySQL">
					<SiMysql className={Style2.icon}></SiMysql>
				</CardSkills>
				<CardSkills title="Redis">
					<DiRedis className={Style2.icon}></DiRedis>
				</CardSkills>
				<CardSkills title="Jest">
					<SiJest className={Style2.icon}></SiJest>
				</CardSkills>
				<CardSkills title="JUnit5">
					<SiJunit5 className={Style2.icon}></SiJunit5>
				</CardSkills>
				<CardSkills title="MongoDB">
					<BiLogoMongodb className={Style2.icon}></BiLogoMongodb>
				</CardSkills>
				{/* <CardSkills title="Apache"> */}
				{/* 	<SiApache className={Style2.icon}></SiApache> */}
				{/* </CardSkills> */}
				<CardSkills title="Nginx">
					<SiNginx className={Style2.icon}></SiNginx>
				</CardSkills>
			</div>
		</div>
	);
}
