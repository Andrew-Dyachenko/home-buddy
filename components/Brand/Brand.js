import styles from "./brand.module.scss";
import cn from "classnames";

export default function Brand({ href = "/", slogan = "", modificator = "" }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={cn(styles.brand, modificator)}
		>
			<div className={styles.brand__forehead}>
				HomeBuddy
				<span className={styles.brand__dot}>.</span>
			</div>
			{slogan && <small className={styles.brand__slogan}>{slogan}</small>}
		</a>
	);
}
