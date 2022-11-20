import styles from "./main.module.scss";
import cn from "classnames";

export default function Main({ children }) {
	return (
		<main className={cn("main", styles.main)}>
			<div className={cn("container", styles.main__container)}>{children}</div>
		</main>
	);
}
