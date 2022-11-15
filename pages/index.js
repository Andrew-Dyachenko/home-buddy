import Head from "next/head";
import styles from "./index.module.scss";

export default function Index() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home Buddy</title>
			</Head>
		</div>
	);
}
