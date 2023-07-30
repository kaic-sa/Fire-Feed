import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ publishedAt, author, content }) {
	// const publishedFormatted1 = new Intl.DateTimeFormat("pt-Br", {
	// 	day: "2-digit",
	// 	month: "long",
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// }).format(props.publishedAt);

	const [comments, setNewComment] = useState(["Que legal"]);

	function handleNewComment() {
		event.preventDefault();
		console.log(event.target);
		setNewComment([...comments, 4]);
		console.log(comments);
	}

	const publishedFormatted2 = format(
		new Date(2023, 7, 11, 8, 0, 0),
		"d 'de' LLLL 'às' HH:mm:'h'",
		{
			locale: ptBR,
		}
	);

	const publishedRelativeToNow = formatDistanceToNow(
		new Date(2023, 6, 20, 8, 0, 0),
		{
			locale: ptBR,
			addSuffix: true,
		}
	);

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author?.avatar_url} />

					<div className={styles.authorInfo}>
						<strong>{author?.name}</strong>
						<span>{author?.role}</span>
					</div>
				</div>
				<time dateTime={publishedAt} title={publishedFormatted2}>
					{publishedRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content?.map((line) => {
					if (line.type === "paragraph") {
						return <p>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p>
								<a href="">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleNewComment} className={styles.form}>
				<strong> Deixe seu feedback</strong>
				<textarea placeholder="Deixe seu comentário"></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment content={comment}></Comment>;
				})}
			</div>
		</article>
	);
}
