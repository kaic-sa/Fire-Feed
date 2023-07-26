import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/kaic-sa.png" />

					<div className={styles.authorInfo}>
						<strong>Kaic Santos</strong>
						<span> Web Developer</span>
					</div>
				</div>
				<time dateTime="2022-07-20 08:00:00" title="20 de Julho">
					Publicado há X horas{" "}
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋 </p>
				<p>Acabei de subir mais um projeto no meu portifa.</p>
				<p> É um projeto que fiz no NLW Return, evento da Rocketseat. </p>
				<p> O nome do projet é DoctorCare 🚀 </p>
				<p>
					👉 {"  "}
					<a href="">jane.design/doctorcare</a>
				</p>

				<p>
					<a href=""> #novoprojeto</a>
					<a href=""> #nlw </a>
					<a href=""> #rocketseat</a>
				</p>
			</div>

			<form className={styles.form}>
				<strong> Deixe seu feedback</strong>
				<textarea placeholder="Deixe seu comentário"></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				<Comment></Comment>
				<Comment></Comment>
			</div>
		</article>
	);
}
