import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
				alt=""
			/>
			<div className={styles.profile}>
				<Avatar src="https://github.com/kaic-sa.png"></Avatar>
				<strong> Kaic Santos</strong>
				<span>Web Developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
