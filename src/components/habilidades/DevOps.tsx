import Style from "./Blocos.module.css";
import Style2 from "../../components/habilidades/CardSkills.module.css";
import CardSkills from "@/src/components/habilidades/CardSkills";
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

export default function DevOps() {
	return (
		<div className={Style.containerBlocos}>
			<h1 className={Style.title}>DevOps</h1>
			<div className={Style.containerIcones}>
				<CardSkills title="Linux">
					<FaLinux className={Style2.icon}></FaLinux>
				</CardSkills>
				<CardSkills title="GitHub">
					<FaGithub className={Style2.icon}></FaGithub>
				</CardSkills>
				<CardSkills title="Docker">
					<FaDocker className={Style2.icon}></FaDocker>
				</CardSkills>
				<CardSkills title="Kubernets">
					<SiKubernetes className={Style2.icon}></SiKubernetes>
				</CardSkills>
				<CardSkills title="Terraform">
					<SiTerraform className={Style2.icon}></SiTerraform>
				</CardSkills>
				<CardSkills title="Jenkins">
					<FaJenkins className={Style2.icon}></FaJenkins>
				</CardSkills>
				<CardSkills title="GitLab">
					<FaGitlab className={Style2.icon}></FaGitlab>
				</CardSkills>
				<CardSkills title="Shell">
					<SiPowershell className={Style2.icon}></SiPowershell>
				</CardSkills>
				<CardSkills title="Asterisk">
					<FaAsterisk className={Style2.icon}></FaAsterisk>
				</CardSkills>
				<CardSkills title="Prometheus">
					<SiPrometheus className={Style2.icon}></SiPrometheus>
				</CardSkills>
				<CardSkills title="Ansible">
					<SiAnsible className={Style2.icon}></SiAnsible>
				</CardSkills>
			</div>
		</div>
	);
}
