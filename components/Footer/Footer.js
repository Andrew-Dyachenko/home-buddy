import styles from "./footer.module.scss";
import cn from "classnames";
import Brand from "../../components/Brand";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={cn("container", styles.footer__container)}>
				<Brand
					href="https://www.homebuddy.com"
					modificator={styles.footer__brand}
				/>
				<nav className={styles.footer__nav}>
					<ul className={styles["footer__nav-list"]}>
						{/* 1 */}
						<li className={styles["footer__nav-item"]}>
							<a
								href="https://www.homebuddy.com/terms-of-use"
								className={styles["footer__nav-link"]}
								target="_blank"
								rel="noreferrer"
							>
								Terms of Use
							</a>
						</li>
						{/* 2 */}
						<li className={styles["footer__nav-item"]}>
							<a
								href="https://www.homebuddy.com/privacy-policy"
								className={styles["footer__nav-link"]}
								target="_blank"
								rel="noreferrer"
							>
								Privacy Policy
							</a>
						</li>
						{/* 3 */}
						<li className={styles["footer__nav-item"]}>
							<a
								href="https://www.homebuddy.com/cookie-policy"
								className={styles["footer__nav-link"]}
								target="_blank"
								rel="noreferrer"
							>
								Cookie Policy
							</a>
						</li>
						{/* 4 */}
						<li className={styles["footer__nav-item"]}>
							<a
								href="https://www.homebuddy.com/do-not-sell"
								className={styles["footer__nav-link"]}
								target="_blank"
								rel="noreferrer"
							>
								Do Not Sell My Personal Information
							</a>
						</li>
						{/* 5 */}
						<li className={styles["footer__nav-item"]}>
							<a
								href="https://www.homebuddy.com/contact-us"
								className={styles["footer__nav-link"]}
								target="_blank"
								rel="noreferrer"
							>
								Contact us
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
