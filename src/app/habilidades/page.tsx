import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import CardSkills from "@/src/components/habilidades/CardSkills";
import { SiStorybook } from "react-icons/si";
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
import { SiApache } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiPowershell } from "react-icons/si";
import { FaAsterisk } from "react-icons/fa";
import { SiPrometheus } from "react-icons/si";
import { SiAnsible } from "react-icons/si";

import Style from "./Habilidades.module.css";
import { Reveal } from "@/src/components/utils/Reveal";

export default function Habilidades() {
	return (
		<>
			<h1 className={Style.titlePage}>Tecnologias Dominadas</h1>
			<div className={Style.containerPrincipal}>
				<Reveal>
					<div className={Style.containerBlocos}>
						<h1 className={Style.title}>Frontend</h1>
						<div className={Style.containerLinguagens}>
							<CardSkills title="Html">
								<FaHtml5 className={Style.icon}></FaHtml5>
							</CardSkills>
							<CardSkills title="Css">
								<IoLogoCss3 className={Style.icon}></IoLogoCss3>
							</CardSkills>
							<CardSkills title="React">
								<FaReact className={Style.icon}></FaReact>
							</CardSkills>
							<CardSkills title="NextJs">
								<TbBrandNextjs className={Style.icon}></TbBrandNextjs>
							</CardSkills>
							<CardSkills title="Angular">
								<FaAngular className={Style.icon}></FaAngular>
							</CardSkills>
							<CardSkills title="Tailwind">
								<SiTailwindcss className={Style.icon}></SiTailwindcss>
							</CardSkills>
							<CardSkills title="Css in Js">
								<SiStyledcomponents className={Style.icon}></SiStyledcomponents>
							</CardSkills>
							<CardSkills title="React Testing">
								<SiTestinglibrary className={Style.icon}></SiTestinglibrary>
							</CardSkills>
							<CardSkills title="Redux">
								<SiRedux className={Style.icon}></SiRedux>
							</CardSkills>
							<CardSkills title="Sass">
								<FaSass className={Style.icon}></FaSass>
							</CardSkills>
							<CardSkills title="Storybook">
								<SiStorybook className={Style.icon}></SiStorybook>
							</CardSkills>
							<CardSkills title="React Query">
								<SiReactquery className={Style.icon}></SiReactquery>
							</CardSkills>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className={Style.containerBlocos}>
						<h1 className={Style.title}>Backend</h1>
						<div className={Style.containerLinguagens}>
							<CardSkills title="Spring">
								<SiSpring className={Style.icon}></SiSpring>
							</CardSkills>
							<CardSkills title="Node.js">
								<FaNodeJs className={Style.icon}></FaNodeJs>
							</CardSkills>
							<CardSkills title="Nest.js">
								<SiNestjs className={Style.icon}></SiNestjs>
							</CardSkills>
							<CardSkills title="Express">
								<SiExpress className={Style.icon}></SiExpress>
							</CardSkills>
							<CardSkills title="PostgreSQL">
								<BiLogoPostgresql className={Style.icon}></BiLogoPostgresql>
							</CardSkills>
							<CardSkills title="MySQL">
								<SiMysql className={Style.icon}></SiMysql>
							</CardSkills>
							<CardSkills title="Redis">
								<DiRedis className={Style.icon}></DiRedis>
							</CardSkills>
							<CardSkills title="Jest">
								<SiJest className={Style.icon}></SiJest>
							</CardSkills>
							<CardSkills title="JUnit5">
								<SiJunit5 className={Style.icon}></SiJunit5>
							</CardSkills>
							<CardSkills title="MongoDB">
								<BiLogoMongodb className={Style.icon}></BiLogoMongodb>
							</CardSkills>
							<CardSkills title="Apache">
								<SiApache className={Style.icon}></SiApache>
							</CardSkills>
							<CardSkills title="Nginx">
								<SiNginx className={Style.icon}></SiNginx>
							</CardSkills>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className={Style.containerBlocos}>
						<h1 className={Style.title}>Linguagens</h1>
						<div className={Style.containerLinguagens}>
							<CardSkills title="Java">
								<FaJava className={Style.icon}></FaJava>
							</CardSkills>
							<CardSkills title="JavaScript">
								<RiJavascriptFill className={Style.icon}></RiJavascriptFill>
							</CardSkills>
							<CardSkills title="TypeScript">
								<SiTypescript className={Style.icon}></SiTypescript>
							</CardSkills>
							<CardSkills title="Python">
								<FaPython className={Style.icon}></FaPython>
							</CardSkills>
							<CardSkills title="C">
								<FaCopyright className={Style.icon}></FaCopyright>
							</CardSkills>
							<CardSkills title="C++">
								<TbBrandCpp className={Style.icon}></TbBrandCpp>
							</CardSkills>
							<CardSkills title="C#">
								<TbBrandCSharp className={Style.icon}></TbBrandCSharp>
							</CardSkills>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className={Style.containerBlocos}>
						<h1 className={Style.title}>DevOps</h1>
						<div className={Style.containerLinguagens}>
							<CardSkills title="Linux">
								<FaLinux className={Style.icon}></FaLinux>
							</CardSkills>
							<CardSkills title="GitHub">
								<FaGithub className={Style.icon}></FaGithub>
							</CardSkills>
							<CardSkills title="Docker">
								<FaDocker className={Style.icon}></FaDocker>
							</CardSkills>
							<CardSkills title="Kubernets">
								<SiKubernetes className={Style.icon}></SiKubernetes>
							</CardSkills>
							<CardSkills title="Terraform">
								<SiTerraform className={Style.icon}></SiTerraform>
							</CardSkills>
							<CardSkills title="Jenkins">
								<FaJenkins className={Style.icon}></FaJenkins>
							</CardSkills>
							<CardSkills title="GitLab">
								<FaGitlab className={Style.icon}></FaGitlab>
							</CardSkills>
							<CardSkills title="Shell">
								<SiPowershell className={Style.icon}></SiPowershell>
							</CardSkills>
							<CardSkills title="Asterisk">
								<FaAsterisk className={Style.icon}></FaAsterisk>
							</CardSkills>
							<CardSkills title="Prometheus">
								<SiPrometheus className={Style.icon}></SiPrometheus>
							</CardSkills>
							<CardSkills title="Ansible">
								<SiAnsible className={Style.icon}></SiAnsible>
							</CardSkills>
						</div>
					</div>
				</Reveal>
			</div>
		</>
	);
}
