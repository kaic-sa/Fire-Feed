import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/Post";

//https://github.com/CaioKenedy.png

//author: {avatar_url, name, role}
//publishedAt: Date
//content: String
const d = 2020;
const posts = [
	{
		id: 1,
		author: {
			avatar_url: "https://github.com/kaic-sa.png",
			name: "Kaic Santos",
			role: "Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala 👋" },
			{
				type: "paragraph",
				content: "	Subi mais um projeto no meu repository",
			},
			{
				type: "paragraph",
				content: "É um projeto que fiz no NLW Ignite.",
			},
			{ type: "paragraph", content: "O nome do projet é Fire Feed  🚀 👉" },
			{ type: "link", content: "kaic-sa/fire-feed" },
		],
		publishedAt: new Date("01-01-2022 11:30:00"),
	},
	{
		id: 2,
		author: {
			avatar_url: "https://github.com/CaioKenedy.png",
			name: "Caio Kenedy",
			role: "Developer Java",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content: "Acabei de subir mais um projeto",
			},
			{
				type: "paragraph",
				content: "É um projeto que fiz no NLW Return, evento da Rocketseat.",
			},
			{ type: "paragraph", content: "O nome do projet é Rocket  🚀 👉" },
			{ type: "link", content: "caio.design/rocket" },
		],
		publishedAt: new Date("01-01-2022 11:30:00"),
	},
];

function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}

					<Post />
				</main>
			</div>
		</>
	);
}

export default App;
