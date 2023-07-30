import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

//author: {avatar_url, name, role}
//publishedAt: Date
//content: String

export function Post(props) {
	// const postobj = { ...props.author };

	// const publishedFormatted1 = new Intl.DateTimeFormat("pt-Br", {
	// 	day: "2-digit",
	// 	month: "long",
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// }).format(props.publishedAt);

	// const publishedFormatted2 = format(new Date(2014, 1, 11), " Publicado MM/dd/yyyy");

	console.log(props);

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={props.author.avatar_url} />

					<div className={styles.authorInfo}>
						<strong>{props.author.name}</strong>
						<span>{props.author.role}</span>
					</div>
				</div>
				<time dateTime="2022-07-20 08:00:00" title="20 de Julho"></time>
			</header>
			<div className={styles.content}></div>

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
