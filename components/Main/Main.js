import styles from "./main.module.scss";
import cn from "classnames";

export default function Main({ children, inert = false }) {
	return (
		<main className={cn("main", styles.main)} inert={inert ? "inert" : null}>
			<div className={cn("container", styles.main__container)}>{children}</div>
		</main>
	);
}
