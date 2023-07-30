import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
	// Using JS Intl:
	// const publishedFormatted1 = new Intl.DateTimeFormat("pt-Br", {
	// 	day: "2-digit",
	// 	month: "long",
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// }).format(publishedAt);

	//Using date-fns:

	const publishedFormatted2 = format(
		new Date(2023, 7, 20, 8, 0, 0),
		" d 'de' LLLL 'às' HH:mm'h'",
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

	function deleteComment(comment) {
		const filteredComments = comments.filter((value) => {
			return value !== comment;
		});

		setComments(filteredComments);
	}

	const [comments, setComments] = useState(["Legal"]);
	const [newCommentText, setNewCommentText] = useState("");

	const handleNewCommentChange = () => {
		setNewCommentText(event.target.value);
	};

	const handleNewComment = () => {
		event.preventDefault();

		setComments([...comments, newCommentText]);

		setNewCommentText("");
	};
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
				<time title={publishedFormatted2} dateTime={publishedAt}>
					{publishedRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content?.map((line, i) => {
					if (line.type === "paragraph") {
						return <p key={i}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={i}>
								<a href="">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleNewComment} className={styles.form}>
				<strong> Deixe seu feedback</strong>
				<textarea
					value={newCommentText}
					onChange={handleNewCommentChange}
					name="comment"
					placeholder="Deixe seu comentário"
				></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment, i) => {
					return (
						<Comment
							key={i}
							onDeleteComment={deleteComment}
							content={comment}
						></Comment>
					);
				})}
			</div>
		</article>
	);
}
