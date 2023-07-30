import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/kaic-sa.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorTime}>
							<strong> Name</strong>
							<time> Cerca de 1 hora</time>
						</div>

						<button title="Excluir comentario" type="submit">
							<Trash size={20}></Trash>
						</button>
					</header>

					<p>Muito bom parabens</p>
				</div>
				<footer>
					<button type="submit">
						<ThumbsUp />
						Aplaudir <span> 20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
