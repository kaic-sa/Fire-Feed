import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/Post";
function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post />
					<Post />
					<Post />
				</main>
			</div>
		</>
	);
}

export default App;