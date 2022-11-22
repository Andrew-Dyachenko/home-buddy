import styles from "./header.module.scss";
import Brand from "../Brand";
import cn from "classnames";

export default function Header({ inert = false }) {
	return (
		<header className={styles.header} inert={inert ? "inert" : null}>
			<div className={cn("container", styles.header__container)}>
				<Brand href="https://www.homebuddy.com/" slogan="FOR HOMEOWNERS" />
				<nav className={styles.header__nav}>
					<ul className={styles["header__nav-list"]}>
						<li className={styles["header__nav-item"]}>
							<a
								href="#form-control--zip"
								className={styles["header__nav-link"]}
							>
								Link to form
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
