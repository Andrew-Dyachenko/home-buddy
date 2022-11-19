import styles from "./main.module.scss";

export default function Main({ children }) {
	return (
		<main className={styles.main}>
			<div className={styles.main__container}>{children}</div>
		</main>
	);
}
