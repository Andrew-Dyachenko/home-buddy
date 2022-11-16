import styles from "./header.module.scss";
import Brand from "../Brand";
import cn from "classnames";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={cn("container", styles.header__container)}>
				<Brand href="/" slogan="FOR HOMEOWNERS" />
				<nav className={styles.header__nav}>
					<ul className={styles["header__nav-list"]}>
						<li className={styles["header__nav-item"]}>
							<a href="#form" className={styles["header__nav-link"]}>
								Link to form
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
